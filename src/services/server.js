import axios from "axios";
//const { CLIENT_ID, BASE_URL, SCOPES, CLIENT_SECRET } = process.env;
const CLIENT_ID = "9ebab9fa-1b06-4191-a849-5f94590debf7";
const BASE_URL = "https://app.hubspot.com/oauth/authorize";
const REDIRECT_URL = "http://localhost:3000/";
const REDIRECT_URI = "http://localhost:3000/auth-callback";
const SCOPES = "contacts automation";
const CLIENT_SECRET = "8dcf41be-c88c-4de6-9ce4-dec4b1b45e7a";
class Server {
  authentication() {
    const authUrl =
      BASE_URL +
      `?client_id=${encodeURIComponent(CLIENT_ID)}` +
      `&scope=${encodeURIComponent(SCOPES)}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

    // Redirect the user
    return (window.location.href = authUrl);
  }

  authcode(authcode) {
    let formData = {
      code:authcode
    }

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    }

    return axios.post(`http://localhost:3001/api/hubspot`,formData);
  }
  
  getContacts(){
    let  token= JSON.parse(sessionStorage.getItem("token"))
    console.log("axios token is "+ token)
    return  axios.get(`http://localhost:3001/api/contacts?token=${token}`);
  }
}

export default new Server();
