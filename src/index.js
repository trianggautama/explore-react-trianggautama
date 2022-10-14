import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme"
import { ThemeProvider } from '@emotion/react';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>,
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
