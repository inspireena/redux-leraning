import * as t from "../types";
import axios from "axios";
// import { request } from "../../util/request";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: t.SET_NAME,
    payload: name
  });
}
export const setInfoAge = (age) => dispatch => {
  dispatch({
    type: t.SET_AGE,
    payload: age
  });
}
export const setInfoBoo = (boo) => dispatch => {
  dispatch({
    type: t.SET_BOOLEAN,
    payload: boo
  });
}