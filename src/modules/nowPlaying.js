import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NowPlaying extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            type: this.props.type,
            category: this.props.category,
            heading: this.props.heading,
            headingSub: this.props.headingSub,
            carouselInfo: []
        };

        //for setting autoplay of carousel
        this.load = true;
        //keep track of slide count
        this.counter = 0;
        //set to setInterval(). used to clear setInterval() on component unmount
        this.interval = null;
    }

    //function to set up carousel
    initiateCarousel = async (interval) =>{
        //fetch nodes from DOM
        const carouselSlide = document.querySelector(".carousel-slide");
        const carouselImages = document.querySelectorAll(".carousel-slide img");
        const carouselCounter = document.querySelector(".carousel-counter p");
        const carouselTitle = document.querySelector(".carousel-info h2");
        const carouselRating = document.querySelector(".carousel-info p span");
        const carouselWrapper = document.querySelector(".carousel-wrapper");
        
        //initiate to 0 on type change
        this.counter = 0;
        //fetch size to set up carousel slide
        let size = carouselWrapper.clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * this.counter) + 'px)';
        
        //initialize for gathering image details
        let info = [];

        //get image details
        await carouselImages.forEach(value => {
            info.push({
                id: value.getAttribute('contentid'),
                title: value.getAttribute('title'),
                rating: value.getAttribute('rating')
            });
        });

        //set state once info is gathered
        await this.setState({
            carouselInfo: info
        });
        
        //carousel autoplay duration
        const duration = interval;

        //update DOM style and display info
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        carouselCounter.innerHTML = (this.counter+1)+'/'+carouselImages.length;
        carouselTitle.innerHTML = this.state.carouselInfo[this.counter].title;
        carouselRating.innerHTML = this.state.carouselInfo[this.counter].rating;
        
        //unique id to set up carousel link
        this.setState({
            id: this.state.carouselInfo[this.counter].id
        });
        
        //sets up autoplay of carousel
        if(this.load){
            this.interval = setInterval(() => {
                if(this.counter>=carouselImages.length-1)
                    this.counter = 0;
                else
                    this.counter++;
            
            //update DOM style and display info based on slide counter
            carouselSlide.style.transform = 'translateX(' + (-size * this.counter) + 'px)';
            carouselCounter.innerHTML = (this.counter+1)+'/'+carouselImages.length;
            carouselTitle.innerHTML = this.state.carouselInfo[this.counter].title;
            carouselRating.innerHTML = this.state.carouselInfo[this.counter].rating;

            //state update on each slide change
            this.setState({
                id: this.state.carouselInfo[this.counter].id
            });
            },duration);

            this.load = false;
        }

        //on window resize sets slide in carousel to initial state
        window.addEventListener('resize', () => {
            size = carouselWrapper.clientWidth;
            this.counter = 0;
            carouselSlide.style.transform = 'translateX(' + (-size * this.counter) + 'px)';
            carouselCounter.innerHTML = (this.counter+1)+'/'+carouselImages.length;
            carouselTitle.innerHTML = this.state.carouselInfo[this.counter].title;
            carouselRating.innerHTML = this.state.carouselInfo[this.counter].rating;
            
        });
    }

    //fetch data from api on initial load
    componentDidMount(){
        fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1")
            .then(response => response.json())
            .then(data => this.props.nowPlaying(data));
    }

    //update data in redux on state type change
    componentDidUpdate(prevProps, prevState){
        if(prevState.type !== this.state.type){
        fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1")
            .then(response => response.json())
            .then(data => this.props.nowPlaying(data));
        }
    }

    //update state on props change
    componentWillReceiveProps(nextProps){
        this.setState({
            type: nextProps.type,
            category: nextProps.category,
            heading: nextProps.heading,
            headingSub: nextProps.headingSub
          });
    }
    
    //clear set interval loop
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        const { dat } = this.props;
        //image url path
        const base_url = "https://image.tmdb.org/t/p/w1280";
        //map data for rendering
        const list = (dat!==undefined) ? (
            dat.map(element => {
                return (
                    <img key={element.id} src={(element.backdrop_path !==null) ? (base_url + element.backdrop_path) : ''} alt={element.title || element.name} title={element.title || element.name} rating={element.vote_average} contentid={element.id}/>
                ); 
            })
        ) : (
                <p>Loading..........</p>
        );
        
        
        return(
            <div id="carousel" className="carousel-wrapper">

                
                <Link to={'/info/'+this.state.type+'/'+this.state.id} className="overlay-link"></Link>

                <div className="overlay-text">
                    <div className="carousel-info">
                        <h1>{this.state.heading} <span>{this.state.headingSub}</span></h1>
                        <h2></h2>
                        <p>Rating - <span></span></p>
                    </div>
                    <div className="carousel-counter">
                        <p></p>
                    </div>
                </div>

                <div className="carousel-slide" onLoad={() => this.initiateCarousel(4000)}>
                    {list}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
      dat: state.playing
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        nowPlaying: (result) => {
            return dispatch(
            {
                type: 'SET_NOW_PLAYING',
                data: result
            });
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);