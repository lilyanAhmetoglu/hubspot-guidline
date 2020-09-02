require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser"); //important for requests
const cookieParser = require("cookie-parser"); // dealing with env parameteres