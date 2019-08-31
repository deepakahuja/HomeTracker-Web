import axios from 'axios';

export function loadUsers() {
  return (dispatch) => {
    return axios.get("http://localhost:8080/admin/users").then((response) => {      
      dispatch({type: "SEARCHED_USERS", payload: response.data})
    }).catch((error) => {})
  }
}

export function cleanState() {
  return (dispatch) => {
    dispatch({type: "CLEAN_STATE", payload: []});
  }  
}