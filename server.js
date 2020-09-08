require("dotenv").config();
const express = require("express");
var request = require('request');
const bodyParser = require("body-parser"); //important for requests
const cookieParser = require("cookie-parser"); // dealing with env parameteres
var cors = require('cors')
/*********************************** */
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); // using middleware from query string
app.use(bodyParser.json());

const CLIENT_ID = "9ebab9fa-1b06-4191-a849-5f94590debf7";
const BASE_URL = "https://app.hubspot.com/oauth/authorize";
const REDIRECT_URL = "http://localhost:3000/";
const REDIRECT_URI = "http://localhost:3000/auth-callback";
const SCOPES = "contacts automation";
const CLIENT_SECRET = "8dcf41be-c88c-4de6-9ce4-dec4b1b45e7a";


app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.post("/api/hubspot", function (req, res) {
  const formData = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URL,
    code: req.body.code,
  };
  console.log(req.body.code)
  request.post(
    "https://api.hubapi.com/oauth/v1/token",
    { form: formData },
    (err, data) => {
      //console.log(res)
      if (err) return res.status(400).send(err);
      return res.status(200).send(data);
    }
  );
});

app.listen(3001, () => {
  console.log("Server is listening on port: 3001");
});
