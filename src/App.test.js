
// ------------- SOME INFO ON JEST SYNTAX -------------
// a) Jest consists of test suites(describe)
// b) test cases (it)
// c) assertions (expect) that turn out green or red

import { render, screen } from '@testing-library/react';
import App, {Item, List, SearchForm, InputWithLabel} from './App';
import renderer from 'react-test-renderer';
import axios from 'axios';

jest.mock('axios');

describe('Item', () => {
  const item = {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  };
  const handleRemoveItem = jest.fn();

  let component;

  beforeEach(() => {
    component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem}/>
    );
  });

  it('renders all properties',() => {
    const component = renderer.create(<Item item={item}/>);
  });
  it('calls onRemoveItem on button click',() => {
    const handleRemoveItem = jest.fn();

    const component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem}/>
    );
    component.root.findByType('button').props.onClick();

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.root.findAllByType(Item).length).toEqual(1);
  });

  //snapshot testing
  test('renders snapshot',() => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('List', () => {
  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];

  it('renders two items',() => {
    const component = renderer.create(<List list={list}/>);

    expect(component.root.findAllByType(Item).length).toEqual(2);
  });
});

describe('SearchForm',() => {
  const searchFormProps = {
    searchTerm: 'React',
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn(),
  };
  let component;

  beforeEach(() => {
    component = renderer.create(<SearchForm{...searchFormProps}/>);
  });

  it('renders the input field with its value',() => {
    const value = component.root.findByType('input').props.value;

    expect(value).toEqual('React');
  });

  it('changes the input field',() => {
    const pseudoEvent = {target: 'Redux'};

    component.root.findByType('input').props.onChange(pseudoEvent);

    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
    expect(searchFormProps.onSearchInput).toHaveBeenLastCalledWith(pseudoEvent);
  });

  it('submits the form',() => {
    const pseudoEvent = {};

    component.root.findByType('form').props.onSubmit(pseudoEvent);

    expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1);
    expect(searchFormProps.onSearchSubmit).toHaveBeenLastCalledWith(pseudoEvent);
  });

  it('disables the button and prevents submit',() => {
    component.update(
      <SearchForm {...searchFormProps} searchTerm=""/>
    );

    expect(
      component.root.findByType('button').props.disabled
    ).toBeTruthy();
  })
});

describe('App',() => {
  it('succeeds fetching data with a list', async () => {
    const list = [
      {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      },
    ];

    const promise = Promise.resolve({
      data: {
        hits: list,
      },
    });

    axios.get.mockImplementationOnce(() => promise);

    let component;
    
    await renderer.act(async() => {
      component = renderer.create(<App/>);
    }); 

    expect(component.root.findByType(List).props.list).toEqual(list);
  });
});
  