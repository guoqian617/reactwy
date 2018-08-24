import {combineReducers} from "redux";
function liList(state=[], action){
    switch(action.type){
    case 'TIMEOUT':return state=action.lists;
   default:return state;
    }
}
function sing(state="", action){
    switch(action.type){
    case 'SING':return state=action.singId;
    default:return state;
    }
}
function songs(state=[], action){
    switch(action.type){
    case 'SONGS':return state=action.songs;
    default:return state;
    }
}
function singer(state=[], action){
    switch(action.type){
    case 'SINGER':return state=action.singer;
    default:return state;
    }
}
export default combineReducers({
           liList,
           sing,
           songs,
           singer
})