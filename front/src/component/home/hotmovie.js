import React from 'react';
import '../../css/hotmovie.scss';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Hotmovie extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        var _this = this;
        $.get('http://localhost:8080/hotmovie?page=1&count=5', function(res) {
            if(res){
                var data = JSON.parse(res).data.films;
                _this.setState({
                    data:data
                })
            }
            
        })
    }
    render(){
        return (

            <div>
                <ul>
                    {this.state.data.map((item,index) => (
                        <NavLink to={'/filmdetail/'+`${item.id}`} style={{position:'relative',zIndex:1}} className="Navhot" key={index}>
                        <li className="hot" >
                            <img src={item.cover.origin} alt="" />
                            <div className="hot-b" >
                                <div className="hot-b-l" >
                                    <p className="mName" >{item.name}</p>
                                    <span className="mMessage" >{item.cinemaCount}家影院上映 {item.watchCount}人购票</span>
                                </div>
                                <div className="hot-b-r" >{item.grade}</div>
                            </div>
                        </li>
                        </NavLink>
                    ))}   
                </ul>
                <NavLink  className="morehot-btn" to={'/filmhot'}>更多热映电影</NavLink>
                <div className="dividing-line" >
                    <div className="upcoming">即将上映</div>
                </div>
            </div>
        )
    }
}

export default Hotmovie;