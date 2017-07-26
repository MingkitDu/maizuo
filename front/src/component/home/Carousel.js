import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import  '../../css/banner.scss';
import $ from 'jquery';

class Banner extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
            initialHeight: 200,
        }
    }
  
  componentDidMount() {
      var _this = this;
      $.get('http://localhost:8080/banner', function(res){
            if(res){
              var data = JSON.parse(res).data.billboards;
              _this.setState({
                  data:data
              }) 
            }
              
      })
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank style={{margin:'0'}}>
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          dots={false}
          selectedIndex={1}
          swipeSpeed={35}
        >
          {this.state.data.map((item,index) => (
            <a href="http://baidu.com" key={index} style={hProp}>
              <img
                src={`${item.imageUrl}`}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner;