const express = require('express');
const app = express()
const fetch = require('node-fetch')

const fetchUser = async (user) =>{
    const api_call = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await api_call.json();
    return data;
};

app.get("/users", (req, res)=>{
    fetchUser(req).then(
        (data)=> {res.send(data)}
    );
});

app.listen(3000, function(){
    console.log("Server is running");
});

