import React, { Component } from 'react';
import '../styles/home.css';
import NowPlaying from './nowPlaying';
import Popular from './popular';
import TopRated from './topRated';
import Upcoming from './upcoming';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: 'movie'
        };

        this.api_url = 'https://api.themoviedb.org/3/';
        this.api_key = '03100836a4b843b52bf4dab39d600f39';
    }
        
    //handle nav bar item click
    handleClick = (type) => {
        if(type!==this.state.display){
            this.setState({
                display: type
            });
        }
    };
      
    render(){
        //render components based on type movie or tv show
        const renderDisplay = (this.state.display === 'movie') ? (
            <div className="main-wrapper">
                <NowPlaying type="movie" category="now_playing" heading="NOW PLAYING" headingSub="in Theatres" api_url={this.api_url} api_key={this.api_key}/>
              <div className="container">
                <Upcoming type="movie" category="upcoming" api_url={this.api_url} api_key={this.api_key}/>
                <Popular type="movie" category="trending" api_url={this.api_url} api_key={this.api_key}/>
                <TopRated type="movie" category="top_rated" api_url={this.api_url} api_key={this.api_key}/>  
              </div>
            </div>
          ) : (
          <div className="main-wrapper">
              <NowPlaying type="tv" category="airing_today" heading="AIRING TODAY" headingSub="on TV" api_url={this.api_url} api_key={this.api_key}/>
              <div className="container">
                <Upcoming type="tv" category="on_the_air" api_url={this.api_url} api_key={this.api_key}/>
                <Popular type="tv" category="trending" api_url={this.api_url} api_key={this.api_key}/>
                <TopRated type="tv" category="top_rated" api_url={this.api_url} api_key={this.api_key}/>
              </div>
          </div>
        );

        return(
            <div className="home">
                <nav className="nav-bar">
                    <div className="nav-wrapper">
                        
                        <div className="list-wrapper"><ul id="nav-mobile" className="right">
                            <li className="brand-logo"><a href="/">MOVIE SURF</a></li>
                            <li className="nav-items" onClick={() => this.handleClick('movie')}>MOVIES</li>
                            <li className="nav-items" onClick={() => this.handleClick('tv')}>TV SHOWS</li>
                        </ul></div>
                    </div>
                </nav>
                
                {renderDisplay}
                <hr/>
            </div>
        );
    }
}

export default Home;