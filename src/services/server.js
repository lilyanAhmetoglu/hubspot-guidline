import axios from "axios";
//const { CLIENT_ID, BASE_URL, SCOPES, CLIENT_SECRET } = process.env;
const CLIENT_ID = "9ebab9fa-1b06-4191-a849-5f94590debf7";
const BASE_URL = "https://app.hubspot.com/oauth/authorize";
const REDIRECT_URL = "http://localhost:3000";
const SCOPES = "contacts automation";
class Server {
  authentication() {
    /*return await axios.post(`${BASE_URL}`, null, { params: {
        client_id:CLIENT_ID,
        scope:SCOPES,
        redirect_uri:REDIRECT_URL
      }})*/
    // Build the auth URL
    const authUrl =
      BASE_URL +
      `?client_id=${encodeURIComponent(CLIENT_ID)}` +
      `&scope=${encodeURIComponent(SCOPES)}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

    // Redirect the user
    return window.location.href = authUrl ;
  }
}

export default new Server();
