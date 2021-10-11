import React, { Dispatch, useState } from 'react';
import './App.css';
import data from './data/data.json'
import Container from '@mui/material/Container';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';

export interface ItemData {
  id: number,
  name: String
}

export type ACTIONTYPE = 
  | { type: "Add Item", payload: ItemData}
  | { type: "Delete Item", payload: ItemData}

export interface reducerContextProps {
  state: ItemData[],
  dispatch: Dispatch<ACTIONTYPE>
}

export const ReducerContext = React.createContext({} as reducerContextProps)

const initialState : ItemData[] = data;

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  let newList;
  switch (action.type) {
    case "Add Item":
      newList = [
        ...state,
        action.payload
      ]
      console.debug("Add Item", newList);
      return newList;
    case "Delete Item":
      newList = state.filter((item) => item.id !== action.payload.id);
      console.debug("Delete Item", newList);
      return newList;
    default:
      throw new Error();
  }
}

function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.debug("App: ", state);
  return (
    <ReducerContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
          <Header/>
          <Search />
          <List/>
        </Container>
      </div>
    </ReducerContext.Provider>
  );
}

export default App;
