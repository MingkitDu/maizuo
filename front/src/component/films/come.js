import React from 'react';
import $ from 'jquery';
import '../../css/come.scss';
import { NavLink } from 'react-router-dom';
import Backtop from '../backtotop';

class Come extends React.Component{

    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        var _this = this;
        var page = 1;
        this.isStart = false;
        this.total;
        $.get('http://localhost:8080/comelist?page='+page+'&count=7', function(res) {
            var data = JSON.parse(res).data.films;
             _this.total = JSON.parse(res).data.page.total;
             _this.setState({
                data:data
            })
        })

        page++;
        $(function(){
            $(window).scroll(function(){
                if($(window).scrollTop()+window.innerHeight>=document.body.clientHeight-200&&!_this.isStart&&page<_this.total){
                    _this.isStart = true;
                    $.get('http://localhost:8080/comelist?page='+page+'&count=7', function(res) {
                        var data = JSON.parse(res).data.films;
                        
                        _this.setState({
                            data:_this.state.data.concat(data)
                        })
                        _this.isStart = false;
                    })
                    page++;
                }
            })
            
        })
        
        this.week = function(week){
            switch (week) {
                case 0:
                    return "星期日";
                    break;
                case 1:
                    return "星期一";
                    break;
                case 2:
                    return "星期二";
                    break;
                case 3:
                    return "星期三";
                    break;
                case 4:
                    return "星期四";
                    break;
                case 5:
                    return "星期五";
                    break;
                case 6:
                    return "星期六";
                    break;

                default:
                    break;
            }
        }
    }

    componentWillUnmount(){
        $(window).unbind("scroll");
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.data.map((item, index) =>(
                        <NavLink to={'/filmdetail/'+`${item.id}`} style={{position:'relative',zIndex:1}} className="Navhot" key={index}>
                            <li className="comee">
                                <div className="comee-l" >
                                    <img src={`${item.poster.origin}`} alt="" />
                                </div>
                                <div className="comee-r" >
                                    <p className="cn"><span>{item.name}</span><i className="fa fa-angle-right" aria-hidden="true"></i></p>
                                    <p>{item.intro}</p>
                                    <p><span>{new Date(item.premiereAt).getMonth()+1}月{new Date(item.premiereAt).getDate()}日上映</span><span>{this.week(new Date(item.premiereAt).getDay())}</span></p>
                                </div>
                            </li>
                        </NavLink>
                    ))} 
                </ul>
                <Backtop />
            </div>
        )
    }
}

export default Come;