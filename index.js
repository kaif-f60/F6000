express = require('express')
const app  = express()


app.listen(3000,()=>{
   console.log('Succes Connect');
})

app.get('/',(req, res)=>{

    const childs =[{name:"kailash", age:21},{name:"kailash1", age:25}]
   res.json(
    childs
   );
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

//  Query Parameter
 app.get('/search',(req, res)=>{
    const name =  req.query.name
    const age =  req.query.age
    res.send(`search result for name : Name : ${name}, Age:${age} `);
 })

// redirect Response

// redirect method
app.get('/abc',(req,res)=>{
    res.redirect("https:pipex.ai")
     })
// redirect with status code
     app.get('/abc1',(req,res)=>{
        res.redirect(301, "https:pipex.ai")
         })
    
// redirect with previous page
app.get('/abc2',(req,res)=>{
res.redirect("..")
 })


app.get('/abc3',(req,res)=>{
res.jsonp({name: 'Kailesh', age:25})
})

// method to view html


app.set('view engine', 'ejs')
app.get('/abc4',(req,res)=>{
    res.render('user')
})
    
    
    
