// const { constants } = require("buffer");
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// app.use(express.static(path.join(__dirname, 'public')));

// const dataUser = [
//     {
//         id : 1,
//         name: "justin",
//         addr: "jakarta",
//         country: "indonesia"
//     },  

//     {
//         id : 2,
//         name: "justin",
//         addr: "jakarta",
//         country: "indonesia"
//     },

//     {
//         id : 3,
//         name: "justin",
//         addr: "jakarta",
//         country: "indonesia"
//     },

//     {
//         id : 4,
//         name: "justin",
//         addr: "jakarta",
//         country: "indonesia"
//     }
// ];

app.get("/", (req,res)=> {
    const addPath = path.join(__dirname, "../public/HTML/HTML_Challenge2.html");
    console.log({addPath});
    res.sendFile(addPath);
})

app.get("/cars", (req,res)=> {
    const addPath2 = path.join(__dirname, "../public/HTML/HTML_Challenge2_Cover 2.html");
    console.log({addPath2});
    res.sendFile(addPath2);
})

// // app.get("/api/username", (req,res)=> {
// //     res.status(200).json({
// //         id : 1,
// //         name: "justin",
// //         addr: "jakarta",
// //         country: "indonesia"
// //     })
// // })

// app.get("/api/username", (req,res)=> {
//     res.status(200).json({dataUser})
// })

// app.get("/api/username/:userId", (req,res)=> {
//     const getuserId = req.params.userId;
//     const filter = dataUser.filter(({id})=> Number(getuserId)=== Number(id))
//     res.status(200).json({
//         data:filter
//     })
// })
// // app.get("/form")

app.use("/",express.static(path.join(__dirname,'../public')));

app.listen(port, ()=>{
    console.log(`this app is listening on port ${port}`);
});

