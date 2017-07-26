import { createStore } from "redux";
import reducer from "./reducer.js";

var state = {
    head:{
        open:false,
        titleList:["首页","影片","影院","商城","演出","我的","卖座卡"],
        routerUrl:["/","/filmhot","/cinema","/show","/ticket","/login","/card"]
    },
    title:"卖座电影"
    
}


var store = createStore(reducer, state);

export default store;