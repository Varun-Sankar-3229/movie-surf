import React, { Component } from 'react';
import '../styles/info.css'

class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            castData: null
        };
    }

    componentDidMount(){
        //fetch movie/tv details from tmdb api
        fetch("https://api.themoviedb.org/3/"+this.props.match.params.type+"/"+this.props.match.params.info_id+"?api_key=03100836a4b843b52bf4dab39d600f39")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data
                });
        });
        
        //fetch credits from tmdb api
        fetch("https://api.themoviedb.org/3/"+this.props.match.params.type+"/"+this.props.match.params.info_id+"/credits?api_key=03100836a4b843b52bf4dab39d600f39")
        .then(response => response.json())
        .then(data => {
            this.setState({
                castData: (data.cast<=20) ? (data.cast) : (data.cast.slice(0,20))
            });
        });

        
    }

    //navigate right on click
    rightScroll = () => {
        let scr = document.getElementById('cast');
        scr.scrollLeft += 284;
    }

    //navigate left on click
    leftScroll = () => {
        let scr = document.getElementById('cast');
        scr.scrollLeft += -284;
    }

    render() {
        //initialize image url paths
        let poster_url = '';
        const profile_url = 'https://image.tmdb.org/t/p/original'
        const base_url = "https://image.tmdb.org/t/p/w1280";

        //set body background with movie/tv backdrop
        if(this.state.data.backdrop_path !== undefined && this.state.data.backdrop_path !== null){
            document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('"+base_url+this.state.data.backdrop_path+"')";
        }

        //set poster image path
        if(this.state.data.poster_path !== undefined && this.state.data.poster_path !== null){
            poster_url = base_url + this.state.data.poster_path;
        }
        else{
            poster_url = 'https://via.placeholder.com/150';
        }

        //fetch list of cast details
        const castList = (this.state.castData !== null && this.state.castData.length>0) ? (
            this.state.castData.map(element => {
                return (
                    <div key={element.id} className="img-wrapper">
                        <img src={(element.profile_path !==null) ? (profile_url + element.profile_path) : 'https://via.placeholder.com/150'} alt={element.name}/>
                        <span className="cast-name">{element.name} as {element.character}</span>
                    </div>
                ); 
            })
        ) : (
                <p>Not Available</p>
        );
        
        //fetch genre of the movie/show
        const genreList = (this.state.data.genres !== undefined) ? (
            this.state.data.genres.map(element => {
                return (
                    <span key={element.id} className="genre">{element.name}</span>
                ); 
            })
        ) : (
                <span></span>
        );

        return(
            <div className="grid-container">
                <div className="grid1">
                        <a href="/"><i className="fas fa-arrow-left"></i></a>
                    
                </div>

                <div className="grid2">
                        <div className="info-wrapper">
                        <img className="poster-img" src={poster_url} alt="poster"/>
                        <div className="info">
                            <h1>{this.state.data.title || this.state.data.name} <span className="year">{(this.state.data.release_date !== undefined) ? ('(' + this.state.data.release_date.slice(0,4) + ')') : null}</span></h1>
                            <h2 className="info-subheading">GENRE</h2>
                            
                            <h3>{genreList}</h3>
                            <div className="inline-wraps">
                                <div className="inline-wrap-items">
                                    <h2 className="info-subheading">RATING</h2>
                                    
                                    <h3>{this.state.data.vote_average}</h3>
                                </div>
                                <div className="inline-wrap-items">          
                                    <h2 className="info-subheading">STATUS</h2>
                                    
                                    <h3>{this.state.data.status}</h3>
                                </div>
                            </div>
                            <div className="tagline">
                                <h2 className="info-subheading">TAGLINE</h2>
                                
                                <p>{this.state.data.tagline || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid3">
                    <div className="content-wrapper">
                        <div className="subcontent-wrapper">
                            <h2>OVERVIEW</h2>
                            <hr/>
                            <p>{this.state.data.overview}</p>
                        </div>

                        <div className="subcontent-wrapper">
                            <h2>CAST</h2>
                            <hr/>
                            <div className="row">
                                <i id="explore-left" className="fas fa-angle-left nav-arrows" onClick={this.leftScroll}></i>
                                <i id="explore-right" className="fas fa-angle-right nav-arrows" onClick={this.rightScroll}></i>
                                <div id="cast" className="cast-list">
                                    {castList}    
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Info