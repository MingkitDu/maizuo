import React from 'react';
import $ from 'jquery';
import '../../css/hot.scss';
import { NavLink } from 'react-router-dom';
import Backtop from '../backtotop';

class Hot extends React.Component{

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
        $.get('http://localhost:8080/hotlist?page='+page+'&count=7', function(res) {
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
                    $.get('http://localhost:8080/hotlist?page='+page+'&count=7', function(res) {
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
                            <li className="hott">
                                <div className="hott-l" >
                                    <img src={`${item.poster.origin}`} alt="" />
                                </div>
                                <div className="hott-r" >
                                    <p><span>{item.name}</span><span>{item.grade} <i className="fa fa-angle-right" aria-hidden="true"></i></span></p>
                                    <p>{item.intro}</p>
                                    <p>
                                        <span className="blue" >{item.cinemaCount}</span><span>家影院上映</span>
                                        <span className="blue" >{item.watchCount}</span><span>购票</span>
                                    </p>
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

export default Hot;