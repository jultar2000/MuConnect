import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import SignPages from './pages/SignPages/SignPages';

const Routes = () => useRoutes([
  { path: '/home', element: <HomePage /> },
  { path: '/register', element: <SignPages /> },
  { path: '/login', element: <SignPages/> }
])

function App() {
  return (
    <div className="center">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
