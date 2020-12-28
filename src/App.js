import React from 'react';
import axios from 'axios';
// import cs from 'classnames';
import styled from 'styled-components';
import List from './List';
import SearchForm from './SearchForm';

// interface StoriesFetchInitAction {
//   type: 'STORIES_FETCH_INIT';
// }

// interface StoriesFetchSuccessAction {
//   type: 'STORIES_FETCH_SUCCESS';
//   payload: Stories;
// }

// interface StoriesFetchFailureAction {
//   type: 'STORIES_FETCH_FAILURE';
// }

// interface StoriesRemoveAction {
//   type: 'REMOVE_STORY';
//   payload: Story;
// }

// type StoriesState = {
//   data: Stories;
//   isLoading: boolean;
//   isError: boolean;
// };

//const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const API_BASE = 'https://hn.algolia.com/api/v1';
const API_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

//styled components
const StyledContainer = styled.div`
  height: 100vw;
  padding: 20px;
  
  background: #83a4d4;
  background: linear-gradient(to left, #b6fbff, #83a4d4);
  color: #171212;
`;

const StyledHeadlinePrimary = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 2px;
`;

// const StyledItem = styled.div`
//   display: flex;
//   align-items: center;
//   padding-bottom: 5px;
// `;

// const StyledColumn = styled.span`
//   padding: 0 5px;
//   white-space: nowrap;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipse;

//   a {
//     color: inherit;
//   }

//   width: ${props => props.width};
// `;

// const StyledButtonSmall = styled(StyledButton)`
//   padding: 5px;
// `;

// type StoriesAction = 
//   | StoriesFetchInitAction
//   | StoriesFetchSuccessAction
//   | StoriesFetchFailureAction
//   | StoriesRemoveAction;

//advanced state mgmt
const storiesReducer = (
  state, 
  action
  ) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: 
          action.payload.page === 0
            ? action.payload.list
            : state.data.concat(action.payload.list),
        page: action.payload.page,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          story => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();  
  }
};
  
//custom hook
const useSemiPersistentState = (
  key, 
  initialState
)  => {
  //const isMounted = React.useRef(false);

  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    // if(!isMounted.current) {
    //   isMounted.current = true;
    // } else {
    //   console.log('A');
      localStorage.setItem(key,value);
    //} 
  },[value,key]);
  
  return [value, setValue];
};


// const getSumComments = stories => {

//   return stories.data.reduce(
//     (result,value) => result + value.num_comments,0
//   );
// };

const extractSearchTerm = url => 
  url
    .substring(url.lastIndexOf('?')+1, url.lastIndexOf('&'))
    .replace(PARAM_SEARCH,'');

const getLastSearches = urls => 
  urls
  .reduce((result,url,index) => {
    const searchTerm = extractSearchTerm(url);

    if(index === 0) {
      return result.concat(searchTerm);
    }

    const previousSearchTerm = result[result.length - 1];

    if(searchTerm === previousSearchTerm) {
      return result;
    } else {
      return result.concat(searchTerm);
    }
  },[])
  .slice(-6)
  .slice(0,-1)
  .map(url => extractSearchTerm(url));

const getUrl = (searchTerm,page) => 
  `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`; 



const App = () => {
  
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search','');

  const [urls, setUrls] = React.useState([
    getUrl(searchTerm,0)
  ]);

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    {data: [], page: 0, isLoading: false, isError: false}
  );

  const handleSearchInput = (
    event
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (
    event
    ) => {
      handleSearch(searchTerm,0);
      
      event.preventDefault();
    };
    
    const handleLastSearch = searchTerm => {
      setSearchTerm(searchTerm,0);
    };

    const handleSearch = (searchTerm,page) => {
      const url = getUrl(searchTerm,page);
      setUrls(urls.concat(url));
    };

    const handleFetchStories = React.useCallback(async () => {
  
    dispatchStories({type: 'STORIES_FETCH_INIT'});

    //for error handling, use try catch
    try {
      const lastUrl = urls[urls.length - 1];
      const result = await axios.get(lastUrl);
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: {
        list: result.data.hits,
        page: result.data.page,
        }
      });
    } catch {
      dispatchStories({type: 'STORIES_FETCH_FAILURE'});
    }
  },[urls]);

  React.useEffect(() => {
    handleFetchStories();
  },[handleFetchStories])

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  React.useEffect(() => {
    localStorage.setItem('search',searchTerm);
  },[searchTerm]);

  const handleMore = () => {
    const lastUrl = urls[urls.length - 1];
    const searchTerm = extractSearchTerm(lastUrl);
    handleSearch(searchTerm,stories.page + 1);
  };

  const lastSearches = getLastSearches(urls);

  return (
    <StyledContainer>
      <StyledHeadlinePrimary>My Hacker Stories</StyledHeadlinePrimary>
      
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      /><br/>

      <LastSearches 
        lastSearches={lastSearches}
        onLastSearch={handleLastSearch}
      />

      {lastSearches.map((searchTerm, index) => (
        <button
          key={searchTerm+index}
          type="button"
          onClick={() => handleLastSearch(searchTerm)}
        >
          {searchTerm}
        </button>
      ))}

      {/* <hr/> */}

      <List list={stories.data} onRemoveItem={handleRemoveStory}/>
  
      {stories.isError && <p>Something went wrong ...</p>}
  
      {stories.isLoading ? (
        <p>Loading...</p>
      ): (
        <button type="button" onClick={handleMore}>
          More
        </button>
      )}
    </StyledContainer>
  );
};

const LastSearches = ({lastSearches, onLastSearch}) => (
  <>
    {lastSearches.map((searchTerm,index) => (
      <button
        key={searchTerm}
        type="button"
        onClick={() => onLastSearch(searchTerm)}
      >
        {searchTerm}
      </button>
    ))}
  </>
);

// type SearchFormProps = {
//   searchTerm: string;
//   onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
// };

//console.log('B:App');

//const sumComments = React.useMemo(() => getSumComments(stories),[stories]);

// type InputWithLabelProps = {
//   id: string;
//   value: string;
//   type?: string;
//   onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   isFocused?: boolean;
//   children: React.ReactNode;
// };

export default App;
