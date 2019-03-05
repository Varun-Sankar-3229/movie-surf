import React, { Component } from 'react';
import './styles/footer.css'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './modules/home'
import Info from './modules/info'

class App extends Component {

  render() {
    //set up route paths to Home & Info components along with footer
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/info/:type/:info_id' component={Info}/>
          <footer>
            <div className="footer">
                <div className="footer-info">
                    <h3>Designed & developed by,</h3>
                    <p>Varun S</p>
                </div>
                <div className="footer-logo">
                    <a href="https://developers.themoviedb.org/3"><img src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="Powered by TMDb"/></a>
                </div>
            </div>
            <p>Movie Surf &copy; Copyright 2019</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
