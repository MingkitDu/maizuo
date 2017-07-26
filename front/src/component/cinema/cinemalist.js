import React from 'react';
import $ from 'jquery';
import { Accordion, List } from 'antd-mobile';
import '../../css/cinemalist.scss';
import Backtop from '../backtotop';
class Cinemalist extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[],
            dataa:[]
        }
    }

    componentDidMount(){
        var _this = this;
        aa();
        function aa(){
            $.get('http://localhost:8080/cinema', function(res) {
                if(res){
                    var arr = JSON.parse(res).data.cinemas.map(item =>(
                        item.district.name
                    ))
                    var data = Array.from(new Set(arr));

                    var dataa = JSON.parse(res).data.cinemas;
                    var data0 =[];
                    var data1 =[];
                    var data2 =[];
                    var data3 =[];
                    var data4 =[];
                    var data5 =[];
                    var data6 =[];
                    var data7 =[];
                    var data8 =[];
                    var arr1=[];

                    for(var i = 0; i < dataa.length; i++){
                        if(data[0] == dataa[i].district.name){
                            data0.push(dataa[i]);
                        }else if(data[1] == dataa[i].district.name){
                            data1.push(dataa[i]);
                        }else if(data[2] == dataa[i].district.name){
                            data2.push(dataa[i]);
                        }else if(data[3] == dataa[i].district.name){
                            data3.push(dataa[i]);
                        }else if(data[4] == dataa[i].district.name){
                            data4.push(dataa[i]);
                        }else if(data[5] == dataa[i].district.name){
                            data5.push(dataa[i]);
                        }else if(data[6] == dataa[i].district.name){
                            data6.push(dataa[i]);
                        }else if(data[7] == dataa[i].district.name){
                            data7.push(dataa[i]);
                        }else if(data[8] == dataa[i].district.name){
                            data8.push(dataa[i]);
                        }
                    }
                    
                    arr1.push(data0,data1,data2,data3,data4,data5,data6,data7,data8);

                    _this.setState({
                        data:data,
                        dataa:arr1
                    })
                }else{
                    aa()
                }
            })
        }
        
    }

  render() {
    return (
      <div style={{ marginBottom: 10 }}>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange} defaultActiveKey='0'>
            {this.state.data.map((ii, index) =>(
                <Accordion.Panel header={ii} key={index}>
                    <List className="my-list">
                    {this.state.dataa[index].map((item, index) => (
                        <List.Item>
                            <p className="cinema-name"><span>{item.name}</span><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></p>
                            <p className="active">
                                {item.labels.map((iii, index)=>(
                                    <span className={iii.type} key="index">{iii.name}</span>
                                ))}
                            </p>
                            <p className="cinema-add">{item.address}</p>
                            <p className="cinema-s">距离未知</p>
                        </List.Item>
                    ))}
                    
                    </List>
                </Accordion.Panel>
            ))}
          
        </Accordion>
        <Backtop />
      </div>
    );
  }
}

export default Cinemalist;