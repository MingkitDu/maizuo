import React, { Component } from 'react';
import Cinemalist from './cinema/cinemalist';
import {connect} from "react-redux";
class Cinemas extends Component{

    componentDidMount(){
        this.props.Change("影院列表")
    }
    render(){
        return (
            <div>
                <Cinemalist />
            </div>
        )
    }
}
var Cinema = connect(function (state, ownProps) {
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
})(Cinemas)
export default Cinema;