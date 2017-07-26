import React, { Component } from 'react';
import '../css/filmcome.scss';
import Come from './films/come';
import { NavLink } from 'react-router-dom';

class Filmcome extends Component{
    
    render(){
        
        return (
            <div style={{background: '#f9f9f9',padding:'0 30px'}}>
                <div className="tabbs" >
                    <NavLink to={'/filmhot'} className="tabbs-l" >正在热映</NavLink>
                    <div className="tabbs-r" >即将上映</div>
                </div>
                <Come />
            </div>
        )
    }
}

export default Filmcome;