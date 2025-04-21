express = require('express')
const app  = express()


app.listen(3000,()=>{
   console.log('Succes Connect');
})

app.get('/',(req, res)=>{
   res.send("<h1>Welcome to Homepage");
})
app.get('/about',(req, res)=>{
    res.send("<h1>Welcome to About page");
 })
 app.get('/Gallery',(req, res)=>{
    res.send("<h1>Welcome to Gallery page");
 })
 app.get('/Quality',(req, res)=>{
    res.send("<h1>Welcome to Contact page");
 })
 app.get('/user/:userid-:bookid',(req, res)=>{
    // res.send(req.params.userid);
    // res.send(req.params.bookid);
    res.send(req.params);
 })


//  app.get('/search',(req, res)=>{
//     // res.send(req.params.userid);
//     // res.send(req.params.bookid);
//     res.send(req.query);
//  })

 
 app.get('/search',(req, res)=>{
    const name =  req.query.name
    const age =  req.query.age
    res.send(`search result for name : Name : ${name}, Age:${age} `);
 })