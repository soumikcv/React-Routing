import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
const ROOT_URL='https://reduxblog.herokuapp.com/api'
const API_KEY = '?key=sdfjjikghioerijhgodhgodsfhgodgf';


export function fetchPosts(){
	const req = axios.get(`${ROOT_URL}/posts${API_KEY}`)
	return{
		type: FETCH_POST,
		payload: req
	};
}