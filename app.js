// Lets Learn  about backend

// Middleware : Kisi bhi route pe render karne se phele middle ware pe jayenge.

// HTML VIA EXPRESS
// when you want to show any page then you have to use render key word

// CREATING SERVER WITH THE HELP OF EXPRESS
const express  = require('express')
const port = 8000;
const path = require('path');
const app= express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

// Built-In in middleware this is 
app.use(express.urlencoded({ extended: true }));

// We are rendering the index-file from backend to server then browser through this process is called static website
app.use(express.static("public"));
app.set("view engine",'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use((req,res,next)=>{
    console.log("this is middleware")
    next();
})

app.get('/', (req,res)=>{
    res.render("index");
})


/*app.get('/' , (req,res)=>{
    // res.send('Hello World')
    res.send("This is a home page")
})*/

app.get('/about' , (req,res)=>{
    res.send('This is a about page')
    
})

app.get('/profile',(req,res)=>{
    res.send('This is a profile page')
})

// Method change karne se route bhi change ho jata hai 
// jese yaha pe do alag method post or get use hui hai but same route pe that is register 
// but kam yeh alag karega

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async (req,res)=>{
     const {username, email, password}=(req.body)
      const newUser=await userModel.create({
        username:username,
        email:email,
         password:password
      })
    res.send(newUser)
})

// Read operations

//1) Find is use to find the data 
//2) We can give condition to it also like search username:"hey"
//3) FindOne will similar works like find but it will always give one output of matching condition and return null is condition is invalid whereas find return an empty array in place of that


app.get('/get-users', (req,res) =>{
    userModel.find().then((users)=>{
        res.send(users)
    })
})

// Updation
app.get('/update-user',async (req,res)=>{
   await userModel.findOneAndUpdate({
        password:'765'
    }, {
        email:"c@c.com"
    },
   
)
      res.send("update user")
})


// Deletion
app.get('/delete-user',async (req,res)=>{
    await userModel.findOneAndDelete({
         password:'7429'
    })
       res.send("delete user")
 })
 

// Path to get the from details
// app.get('/get-from-data',(req,res)=>{
//     console.log(req.query) // ispe hi data aata hai server pe 
//     res.send('data received')
// })
// By default har route get ko hi hit karta hai toh make sure you added method ="post"

app.post('/get-from-data',(req,res)=>{
    console.log(req.body) // ispe bhejte hai data server ko
    res.send('data received')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// CREATING A SERVER 
// const http= require('http')
// const server= http.createServer((req,res)=>{
//      if(req.url=='/about'){
//         console.log(req.url)
//         res.end("This is the about page")
//      }
//      if(req.url=='/profile'){
//         console.log(req.url)
//         res.end("This is the profile page")
//      }
//      if(req.url=='/'){
//         console.log(req.url)
//         res.end("This is the home page")
//      }
//      if(req.url=='/contact'){
//         console.log(req.url)
//         res.end("This is the contact page")
//      }
// })
// server.listen(3000)
//ROUTING : route of one page is called routing or going from one page to another that can be called as routing.
// npx nodemon app.js for saving all the changes.
// PACKAGES:-
// Packages are bunch of information that has written by an another developer which describes specific properties and these can be used by any-other developer.
// Like cat me which is used describe the properties of it .
// below commands used to fetch the properties .
// const cat=require('cat-me')
// console.log(cat());
