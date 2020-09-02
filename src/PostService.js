import axios from 'axios';

const apiBaseUrl = 'https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

export default class PostService{
    getAllPost(){
        return axios.get(`${apiBaseUrl}/posts`);
    }
}