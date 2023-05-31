import * as t from "../types";

const second = (state = {
    name: "guest",
    age:'18',
    boo: true
}, action) => {
  switch(action.type){
    case t.SET_NAME:
      return { 
        ...state,
        name: action.payload
      };
    case t.SET_AGE:
      return { 
        ...state,
        age: action.payload
      };
      case t.SET_BOOLEAN:
      return { 
        ...state,
        boo: action.payload
      };
    default:
      return {...state};
    }
}

export default second;