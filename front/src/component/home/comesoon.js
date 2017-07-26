import React from 'react';
import '../../css/comesoon.scss';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Comesoon extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        var _this = this;
        $.get('http://localhost:8080/comesoon?page=1&count=3', function(res) {
            if(res){
                var data = JSON.parse(res).data.films;
                _this.setState({
                    data:data
                })
            }
        })
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.data.map((item,index) =>(
                        <NavLink to={'/filmdetail/'+`${item.id}`} style={{position:'relative',zIndex:1}} className="Navhot" key={index}>
                            <li className="come" >
                                <img src={`${item.cover.origin}`} alt="" />
                                <div className="come-b" >
                                    <div className="come-b-l">{item.name}</div>
                                    <div className="come-b-r">{new Date(item.premiereAt).getMonth()+1}月{new Date(item.premiereAt).getDate()}日上映</div>
                                </div>
                            </li>
                        </NavLink>
                    ))}
                    
                </ul>
                <NavLink to={'/filmcome'} className="morecome-btn" >更多即将上映电影</NavLink>
            </div>
        )
    }
}
export default Comesoon;