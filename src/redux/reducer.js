import axios from 'axios'

//Intial State Setup
const intialState = {
  user: {},
  loading: false,
  errorMessage: ''
}

// Action Types
const GET_USER = 'GET_USER'

// Action Creator
// action creators return action objects
export function getUser() {
  let newUser = axios
    .get('https://randomuser.me/api/')
    .then(res => res.data.results[0])
    .catch(err => err.message)
  // make an opiton object
  // action objects have a type, and may have a payload
  let action = {
    type: GET_USER,
    payload: newUser
  }
  return action
}

export default function userReducer(state = intialState, action) {
  switch (action.type) {
    case GET_USER + '_PENDING':
      // old way of doing it  VVVVVVV
      // return Object.assign({}, state, { user: action.payload })
      return { ...state, loading: false }
    case GET_USER + '_FULFILLED':
      return { ...state, user: action.payload, loading: false }
    case GET_USER + '_REJECTED':
      return { ...state, errorMessage: action.payload, loading: false }
    default:
      return state
  }
}
