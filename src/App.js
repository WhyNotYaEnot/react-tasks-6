import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  const menuList = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <Router> 
      <div className="app">
      <Header title="Title" logoImagePath="/monke.gif" />
        <div className="main-content">
          <SideBar title="SideBar" menuList={menuList} />
          <Content title="Content" />
        </div>
        <Footer title="Footer" menuList={menuList} />
      </div>
    </Router>
  );
}

export default App;
