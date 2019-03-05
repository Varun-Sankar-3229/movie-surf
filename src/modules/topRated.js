import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TopRated extends Component {
    constructor(props){
        super(props);
        this.state = {
          type: this.props.type,
          category: this.props.category
        };
    }

    //initial data load from api
    componentDidMount(){
        fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1")
            .then(response => response.json())
            .then(data => this.props.rating(data));
    }

    //update data on state change
    componentDidUpdate(prevProps, prevState){
        if(prevState.type !== this.state.type){
        fetch(this.props.api_url+this.state.type+"/"+this.state.category+"?api_key="+this.props.api_key+"&language=en-US&page=1")
            .then(response => response.json())
            .then(data => this.props.rating(data));
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            type: nextProps.type,
            category: nextProps.category
          });   
    }
    
    //navigate left and right
    rightScroll = () => {
        let scr = document.getElementById('top-rated');
        scr.scrollLeft += 284;
    }

    leftScroll = () => {
        let scr = document.getElementById('top-rated');
        scr.scrollLeft += -284;
    }

    render() {
        const { dat } = this.props;
        
        const base_url = "https://image.tmdb.org/t/p/w1280";
        const list = (dat.length>0 && dat!==undefined) ? (
            dat.map(element => {
                return (
                    <div key={element.id} className="img-wrapper">
                        <Link to={'/info/'+this.state.type+'/'+element.id}>
                            <img src={base_url + element.poster_path} alt={element.title}/>
                        </Link>
                        <span className="mov-title">{element.title || element.name}</span>
                    </div>
                ); 
            })
        ) : (
                <p>Loading..........</p>
        );
        

        return(
            <div className="sub-container">
                <h2 className="sub-heading">TOP RATED</h2>
                <hr className="sub-heading-line"/>
                <div className="row">
                    <i id="explore-left" className="fas fa-angle-left explore" onClick={this.leftScroll}></i>
                    <i id="explore-right" className="fas fa-angle-right explore" onClick={this.rightScroll}></i>
                        <div id="top-rated" className="explore-row">
                            {list}
                        </div>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
      dat: state.rating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rating: (result) => {
            return dispatch(
            {
                type: 'SET_TOP_RATED',
                data: result
            });
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(TopRated);