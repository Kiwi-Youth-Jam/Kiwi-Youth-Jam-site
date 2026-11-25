/*
The purpose of this script is to generate a refresh token to authenticate the gmail api.
You shouldn't need to touch this script unless the token expires.
Please provide a google client id and google client secret in the config.
*/

// import config from "./config.json" with { type: "json" };
import { google } from 'googleapis';
import express from "express";

const app = express();

const client_id = process.env.GOOGLE_CLIENT_ID;
const client_secret = process.env.GOOGLE_CLIENT_SECRET;
const redirect_uri = "http://localhost:8080";
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/documents.readonly"],
});

console.log("Authorize this app by visiting this url:", authUrl);

app.get("/", async function (req, res) {
    const { tokens } = await oAuth2Client.getToken(req.query.code);

    oAuth2Client.setCredentials(tokens);
    const oauth2 = google.oauth2({ auth: oAuth2Client, version: 'v2' });

    const email = await oauth2.userinfo.v2.me.get();
    const GOOGLE_REFRESH_TOKEN = tokens.refresh_token;
    const email_addr = email.data.email;

    tokens.email_addr = email_addr;
    res.send(tokens);

    console.log(`Setup email ${email_addr} refresh_token: ${GOOGLE_REFRESH_TOKEN}`);
    process.exit(0);
});

app.listen(8080, "0.0.0.0", function (err) {
    if (err) console.log(err);
    console.log("Server running on PORT", 8080);
});