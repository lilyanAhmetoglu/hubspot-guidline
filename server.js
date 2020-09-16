require("dotenv").config();
const express = require("express");
var request = require("request");
const bodyParser = require("body-parser"); //important for requests
const cookieParser = require("cookie-parser"); // dealing with env parameteres
var cors = require("cors");
const path = require("path");
/*********************************** */
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // using middleware from query string
app.use(bodyParser.json());
app.use(express.static("/build"));
const CLIENT_ID = "9ebab9fa-1b06-4191-a849-5f94590debf7";
const BASE_URL = "https://app.hubspot.com/oauth/authorize";
const REDIRECT_URL = "http://localhost:3000/";
const REDIRECT_URI = "http://localhost:3000/auth-callback";
const SCOPES = "contacts automation";
const CLIENT_SECRET = "8dcf41be-c88c-4de6-9ce4-dec4b1b45e7a";
const API_KEY="5ec222f8-1992-4df1-8d13-0b5cbe6c2b1a";
const returnedCompanies = [];

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

// authrize the code request
app.post("/api/hubspot", function (req, res) {
  const formData = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URL,
    code: req.body.code,
  };
  //console.log(req.body.code);
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
// get all contacts
app.get("/api/contacts", function (req, res) {
  // console.log("server token is" +JSON.parse(JSON.stringify(req.query.token)) );
  request.get(
    "https://api.hubapi.com/contacts/v1/lists/all/contacts/all?",
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(JSON.stringify(req.query.token))}`,
        "Content-Type": "application/json",
      },
    },
    (err, data) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(data);
    }
  );
});
// get all companies
app.get("/api/companies", function (req, res) {
  //console.log("server token is" +JSON.parse(JSON.stringify(req.query.token)) );
  request.get(
    "https://api.hubapi.com/companies/v2/companies/paged?properties=name&properties=website",
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(JSON.stringify(req.query.token))}`,
        "Content-Type": "application/json",
      },
    },
    (err, data) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(data);
    }
  );
});
// get contacts by company name
app.get("/api/companycontacts", function (req, res) {
  console.log(
    "server token is" + JSON.parse(JSON.stringify(req.query.companyid))
  );
  request.get(
    `https://api.hubapi.com/companies/v2/companies/${JSON.parse(
      JSON.stringify(req.query.companyid)
    )}/contacts?`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(JSON.stringify(req.query.token))}`,
        "Content-Type": "application/json",
      },
    },
    (err, data) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(data);
    }
  );
});

// create company
app.post("/api/company", function (req, res) {
  var options = {
    method: "POST",
    url: "https://api.hubapi.com/companies/v2/companies",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(JSON.stringify(req.query.token))}`,
    },
    body: req.body,
    json: true,
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    return res.status(200).send(response);
  });
});


// Create contact
app.post("/api/contact", function (req, res) {
  var options = {
    method: "POST",
    url: "https://api.hubapi.com/contacts/v1/contact/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(JSON.stringify(req.query.token))}`,
    },
    body: req.body,
    json: true,
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    return res.status(200).send(response);
  });
});

//Qimia.io Create mew company with Api key
app.post("/api/company-qimia", function (req, res) {
  var options = {
    method: "POST",
    url: "https://api.hubapi.com/companies/v2/companies",
    qs: { hapikey: API_KEY },
    headers: {
      "Content-Type": "application/json",
     // Authorization: `Bearer ${JSON.parse(JSON.stringify(req.query.token))}`,
    },
    body: req.body,
    json: true,
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    return res.status(200).send(response);
  });
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*app.get("/*", (req, res) => {
  res.sendfile(path.join(__dirname, "..", "public", "index.html"));
});
*/
const hostname = 'http://ec2-34-239-139-19.compute-1.amazonaws.com:3000/';
app.listen(3000, hostname,() => {
  console.log("Server is listening on port: 3000");
});
