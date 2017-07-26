import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Drawer, List } from 'antd-mobile';
import { connect } from 'react-redux';
import '../css/app.scss'

class Heads extends Component {

   
    
    render() {
        var that=this;
        var zIndex = this.props.open?'2':'0';
        const sidebar = (<List>
            {this.props.titleAry.map((i, index) => {
                return (
                    <List.Item key={index}>
                        <Link className="link-list" to={that.props.url[index]} onClick={this.props.onOpenChange}>{i}</Link>
                    </List.Item>);
            })}
        </List>);

        return (<div>
            <div className="header">
                <div className="icon-left" onClick={this.props.onOpenChange}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="header-center" ><span>{this.props.title}</span><span>深圳 <i className="fa fa-angle-down" aria-hidden="true"></i></span></div>
                <div className="icon-right"><NavLink to={'/login'}><i className="fa fa-fw fa-user-o" aria-hidden="true"></i></NavLink></div>
            </div>
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight - 200 ,top:"100px",position:'fixed',zIndex:zIndex}}
                enableDragHandle
                sidebar={sidebar}
                open={this.props.open}
                touch={false}
                sidebarStyle={{background:"#282828"}}
            >
            
            </Drawer>
        </div>);
    }
}

var Head = connect(function (state, ownProps) {
    return {
        open: state.head.open,
        titleAry:state.head.titleList,
        url:state.head.routerUrl,
        title:state.title
    }
},
function (dispatch, ownProps) {
    return {
        onOpenChange: function () {
            dispatch({
                type:"CHANGE_OPEN",
            })
        },
        Change: function (title) {
            dispatch({
                type:"CHANGE_TITLE",
                title:title
            })
        }
    }
})(Heads)
export default Head;