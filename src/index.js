import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from "./Redux/Store/strore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";






  // useEffect(() => {
  //   switch (theme) {
  //     case themes.light:
  //       document.body.classList.add('white-content');
  //       break;
  //     case themes.dark:
  //     default:
  //       document.body.classList.remove('white-content');
  //       break;
  //   }
  // }, [theme]);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>



        <App  />
        </div>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
