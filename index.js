const express=require("express");
const app=express();
const port=3000;

const path=require("path");
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
const {v4:uuidv4}=require('uuid');


const methodOverride = require("method-override");
app.use(methodOverride("_method"));

let jobs=[
    {
       id:uuidv4(),
       company:"Google",
       position:"Software Engineer Intern",
       location:"Gurugram",
       status:"Applied",
      Date_Applied: "15 Oct 2026"
    },
    {
      id:uuidv4(),
       company:"Amazon",
       position:"Software Engineer Intern",
       location:"Banglore",
       status:"applied",
       Date_Applied: "15 Oct 2026"
    },
    {
        id:uuidv4(),
       company:"face-book",
       position:"Software Engineer ",
       location:"Noida",
       status:"Applied",
      Date_Applied: "15 Oct 2026"
    }
]
app.get("/jobs",(req,res)=>{
    res.render("index.ejs",{jobs:jobs});
});

//new job
app.get("/jobs/new", (req, res) => {
    res.render("new.ejs");
});


//SHOE GET ROITE
app.get("/jobs/:id",(req,res)=>{
   let {id}=req.params;
console.log(id);
   let job=jobs.find((job)=>id==job.id);
   
    if (!job) {
        return res.status(404).send("job not found");
    }
    res.render("show.ejs",{job});
});

//Post
app.post("/jobs",(req,res)=>{
     let { company, position, location, status, Date_Applied } = req.body;
      let id = uuidv4();

    let newJob = {
        id,
        company,
        position,
        location,
        status,
        Date_Applied
    };

    jobs.push(newJob);

    res.redirect("/jobs");
});

// Edit route
app.get("/jobs/:id/edit", (req, res) => {
    let { id } = req.params;

    let job = jobs.find((job) => job.id === id);

    if (!job) {
        return res.status(404).send("Job not found");
    }

    res.render("edit.ejs", { job });
});

//patch
// PATCH: Update job
app.patch("/jobs/:id", (req, res) => {
    let { id } = req.params;

    let job = jobs.find((job) => job.id === id);

    if (!job) {
        return res.status(404).send("Job not found");
    }

    let { company, position, location, status, Date_Applied } = req.body;

    job.company = company;
    job.position = position;
    job.location = location;
    job.status = status;
    job.Date_Applied = Date_Applied;

    res.redirect("/jobs");
});

// DELETE: Remove a job
app.delete("/jobs/:id", (req, res) => {
    let { id } = req.params;

    jobs = jobs.filter((job) => job.id !== id);

    res.redirect("/jobs");
});


//listen
app.listen(port,()=>{
  console.log("listening to the port:8080");
});