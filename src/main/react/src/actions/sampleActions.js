//import CourseApi from '../api/mockCourseApi';
import axios from 'axios';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSampleProductsSuccess(products) {
  return {type: types.SAMPLE_FETCH_PRODUCTS_SUCCESS, products};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadSampleProducts() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('http://localhost:8080/getProducts/2').then(response => {
        const products = response.data;
        alert("Product length is : "+products[0].productName);
      dispatch(loadSampleProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

