import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Zpp from './Zpp';
import TodoList from './components/TodoList';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

<TodoList/>  
<br/>
<br/>
<App />  
<br/>
<br/>
<Zpp/>            



</React.StrictMode>
);

// wrap the root component of the App with BrowserRouter from react router package
// Wrapped the app component with browser Router



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
