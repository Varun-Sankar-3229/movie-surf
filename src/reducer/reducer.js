//initialize redux state with empty arrays
const initState = {
    playing: [],
    popular: [],
    upcoming: [],
    rating: []
}

function setState(state = initState, action){
    switch (action.type) {
        case 'SET_NOW_PLAYING':
            let nowPlaying = action.data.results;
            return {
                ...state,
                playing: nowPlaying
            };

        case 'SET_POPULAR':
            let popular = action.data.results;
            return {
                ...state,
                popular: popular
            };

        case 'SET_UPCOMING':
        let upcoming = action.data.results;
        return {
            ...state,
            upcoming: upcoming
        };

        case 'SET_TOP_RATED':
            let topRated = action.data.results;
            return {
                ...state,
                rating: topRated
            };

        default:
            return state;
    }
}

export default setState;