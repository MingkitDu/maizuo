import React, { Component } from 'react';
import '../css/app.scss';
import $ from 'jquery';

class Backtop extends Component{

    componentDidMount(){
        
        $(function(){
            $(window).scroll(function(){
                if($(window).scrollTop() > 820){
                    // $('.backtop').css('display','block');
                    $('.backtop').addClass('aaa');
                }else{
                    // $('.backtop').css('display','none');
                    $('.backtop').removeClass('aaa');
                }
            })
        })
    }

    Backtop(){
        $('html body').animate({
			'scrollTop':0
		})
    }

    render(){
        return (
            <div className="backtop" onClick={this.Backtop.bind(this)}>
                <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default Backtop;