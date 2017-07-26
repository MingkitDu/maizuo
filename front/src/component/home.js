import React, { Component } from 'react';
import Banner from './home/Carousel';
import Hotmovie from './home/hotmovie';
import Comesoon from './home/comesoon';
import Backtop from './backtotop';
import {connect} from "react-redux";


class Homes extends Component{

     componentDidMount(){
        this.props.Change("卖座电影");
    }

    render(){
        return (
            <div>
                <Banner /> 
                <Hotmovie />
                <Comesoon />
                <Backtop />
            </div>
        )
    }
}

var Home = connect(function (state, ownProps) {
    return {
        
    }
},
function (dispatch, ownProps) {
    return {
        Change: function (title) {
            dispatch({
                type:"CHANGE_TITLE",
                title:title
            })
        }
    }
})(Homes)

export default Home;