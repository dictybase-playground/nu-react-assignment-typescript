import React, { useState } from 'react';
import './App.css';
import data from './data/data.json'
import Container from '@mui/material/Container';
import { flexbox } from '@mui/system';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';

/* Add Context like this
https://gist.github.com/sw-yx/f18fe6dd4c43fddb3a4971e80114a052
*/

interface ItemData {
  id: number,
  name: String
}

// interface ItemListData {
//   array: ItemData[]
// }

// interface ItemListData {
//   [index: number]: {id:number, name: String}
// }

const initialState : ItemData[] = data;

type ACTIONTYPE = 
  | { type: "Add Item"; payload: ItemData}
  | { type: "Delete Item"; payload: ItemData}

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  let newList;
  switch (action.type) {
    case "Add Item":
      newList = [
        ...state,
        action.payload
      ]
      return newList;
    case "Delete Item":
      newList = state.filter((item) => item.id !== action.payload.id);
      return newList;
    default:
      throw new Error();
  }
}

function App() {

  
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addItem = (entry: ItemData) => dispatch({type: "Add Item", payload: entry});
  const removeItem = (entry: ItemData) => dispatch({type: "Delete Item", payload: entry});

  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <Search />
        <List itemList={state}/>
      Test
      </Container>
    </div>
  );
}

export default App;
