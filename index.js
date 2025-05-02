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



app.use(express.json())
app.use(express.urlencoded({extended:false}))

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
    
    
   // this methods for download file 
app.get('/download',(req,res )=>{
   res.download('./files/Rondomat.pdf','news.pdf')
})

//this method is used for to open image,pdf ,or file in new tab

app.get('/downloads',(req,res )=>{
   res.sendFile(__dirname+ '/files/Rondomat.pdf')
})

// learning end method and write method
app.get('/end',(req,res )=>{
   res.write('This is Testing')
   res.end()
})


// app.post('/about',(req,res)=>{
// res.send(req.body)
// })


// app.get('/ghost',(req,res)=>{
// res.send(req.hostname)
// })

// app.get('/ip',(req,res)=>{
// res.send(req.ip)
// })


// app.get('/ips',(req,res)=>{
// res.send(req.ips)
// })

// app.get('/method',(req,res)=>{
//    res.send(req.method)
//    })

// app.get('/original',(req,res)=>{
//    res.send(req.originalUrl)
//    })

// app.get('/path',(req,res)=>{
//       res.send(req.path)
//       })
// app.get('/proto',(req,res)=>{
//       res.send(req.protocol)
//       })


// app.get('/secure',(req,res)=>{
//       res.send(req.secure)
//       })
app.get('/route',(req,res)=>{
      res.send(req.route)
      })