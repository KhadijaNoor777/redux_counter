import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'
// import { createStore } from 'redux'

// //STORE ...... GLOBALIZED STATE


// //ACTION ...... Decide what to do, e.g, INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'         //action name or type
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'         //action name or type
//   }
// }

// //REDUCER ...... What ACTION should be performed nd returns UPDATED STATE
// const counter = (state=0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// let store = createStore(counter);

// //displaying store in console:
// store.subscribe(() => console.log(store.getState()));




// //DISPATCH ...... sending an ACTION nd STATE to reducer
// store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
