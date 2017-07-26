import React, { Component } from 'react';
import '../css/filmhot.scss';
import Hot from './films/hot';
import { NavLink } from 'react-router-dom';




class Filmhot extends Component{
    
    render(){
        return (
            <div style={{background: '#f9f9f9',padding:'0 30px'}}>
                <div className="tabs" >
                    <div className="tabs-l" >正在热映</div>
                    <NavLink to={'/filmcome'} className="tabs-r" >即将上映</NavLink>
                </div>
                <Hot />
            </div>
        )
    }
}

export default Filmhot;