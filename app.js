const express=require('express')
const app=express();
const bodyparser=require('body-parser')
const https=require('https')
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(__dirname));
app.use(express.static("public"));
app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    const artist=req.body.artist
    const song=req.body.song
    console.log(artist)
    console.log(song)
    const url="https://api.lyrics.ovh/v1/"+artist+"/"+song+""
    https.get(url,function(response,request){
        response.on("data",function(data){
            var properdata=JSON.parse(data)
           /*  res.write("<body style= background: linear-gradient(#141e30, #243b55);><p  style=color:red;text-align:center>"+properdata.lyrics+"</p></body>"
           )
            res.send() */
        })
    })
    console.log(properdata)
})
app.listen(3007,function(req,res){
    console.log("App is running")
})
 
/* 
<body style='background: linear-gradient(#141e30, #243b55);'>
style='color:red;text-align:center' */


