import React, { Component } from 'react';
import '../css/filmdetail.scss';
import $ from 'jquery';
import {connect} from "react-redux";

class Filmdetails extends Component{

    constructor(){
        super();
        this.state = {
            data:[],
            dataa:[]
        }
    }

    componentDidMount(){
        var _this = this;
        var id = this.props.match.params.id;
        $.get('http://localhost:8080/filmdetail?id='+id, function(res) {
            var data = [JSON.parse(res).data.film];
            var dataa = JSON.parse(res).data.film.actors;
            var dataa=[];
            for(var i=0;i<JSON.parse(res).data.film.actors.length;i++){
                dataa.push(JSON.parse(res).data.film.actors[i].name);
            }
            _this.props.Change(data[0].name);
             _this.setState({
                data:data,
                dataa:dataa
            })
        })
        
    }
    

    render(){
        return (
            <div>
            {this.state.data.map((item,index) =>(
                 <div className="detail" key="index">
                    <img src={item.cover.origin} alt="" />
                    <div className="film-word1">影片简介</div>
                    <div className="film-word2">
                        <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                        <span>{item.director}</span>
                    </div>
                     <div className="film-word2">
                        <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                        <span className="actor">
                            {this.state.dataa.join(' | ')}
                        </span>
                    </div>
                    <div className="film-word2">
                        <span>地区语言：</span>
                        <span>{item.nation}({item.language})</span>
                    </div>
                    <div className="film-word2">
                        <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
                        <span>{item.category}</span>
                    </div>
                    <div className="film-word2">
                        <span>上映日期：</span>
                        <span>{new Date(item.premiereAt).getMonth()+1}月{new Date(item.premiereAt).getDate()}日上映</span>
                    </div>
                    <div className="film-word3">
                        <span>
                            {item.synopsis}
                        </span>
                    </div>
                </div>
            ))}
               
                <button className="buybtn" >立即购票</button>
            </div>
        )
    }
}

var Filmdetail = connect(function (state, ownProps) {
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
})(Filmdetails)

export default Filmdetail;