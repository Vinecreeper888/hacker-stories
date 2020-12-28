import React from 'react';
//import './App.module.css';
import './index.css';
import {sortBy} from 'lodash';
import {ReactComponent as Check} from './check.svg';


const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENT: list => sortBy(list, 'num_comments').reverse(),
  POINT: list => sortBy(list, 'points').reverse(),
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState({
    sortKey: 'NONE',
    isReverse: false,    
  });

  const handleSort = sortKey => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({sortKey: sortKey, isReverse: isReverse});

    setSort({sortKey, isReverse});
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <div>
      <div style={{display: 'flex'}}>
        <span style={{width: '40%'}}>
          <button type="button" onClick={() => handleSort('TITLE')}>
            Title
          </button>
        </span>
        <span style={{width: '30%'}}>
          <button type="button" onClick={() => handleSort('AUTHOR')}>
            Author
          </button>
        </span>
        <span style={{width: '10%'}}>
          <button type="button" onClick={() => handleSort('COMMENT')}>
            Comments
          </button> 
        </span>
        <span style={{width: '10%'}}>
          <button type="button" onClick={() => handleSort('POINT')}>
            Points
          </button>
        </span>
        <span style={{width: '10%'}}>Actions</span>
      </div><br/>

      {sortedList.map(item => (
        <Item
          key={item.objectID}
          item={item} 
          onRemoveItem={onRemoveItem}
        /> 
      ))}
    </div>
  )
};

const Item = ({ item, onRemoveItem }) => (
  <div style={{display: 'flex'}}>
<span style={{width: '40%'}}>
  <a href={item.url}>{item.title}</a>
</span>
<span style={{width: '30%'}}>{item.author}</span>
<span style={{width: '10%'}}>{item.num_comments}</span>
<span style={{width: '10%'}}>{item.points}</span>
<span style={{width: '10%'}}>
  <button type="button" onClick={() => onRemoveItem(item)} className="buttonContainer">
    <Check className="checkColorChange"/>
    Dismiss
  </button>
</span>
</div> 
);

export default List;
