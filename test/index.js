const login = require("../index.js");
const fs = require("fs");

login({appState: JSON.parse(fs.readFileSync("./test/session.json"))}, async (err, api) => {
  
  api.setOptions({logLevel: "info", listenEvents: true, autoMarkRead: true, forceLogin: true})
  
  
  
  api.listenMqtt(async (err, event) => {
    
    if (err) throw err
    
    console.log(event)
    
    
  })
  
  
})