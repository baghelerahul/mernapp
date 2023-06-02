let express=require('express')
let mongoose=require('mongoose')
let cors=require('cors')
let app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/userdet",{
    useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("okk done")}).catch((err)=>{console.log(err)})

let usersch=new mongoose.Schema({"_id":String,"name":String,"email":String,"password":String,"gender":String,"dob":String})

let user=mongoose.model("user",usersch)
app.post("/add",(req,res)=>{
    let userrecord=new user(req.body)
    userrecord.save().then(()=>{
        res.end("save sucessfully")
    }).catch((err)=>{
        res.end(err)
    })
})
app.get("/users",async(req,res)=>{
    let data=await user.find()
    res.json(data)
})
app.get("/databyid/:id",(req,res)=>{
    user.findById({"_id":req.params.id}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.end(err)
    })
})
app.delete("/del/:id",(req,res)=>{
    user.findByIdAndDelete({"_id":req.params.id}).then(()=>{
        res.send("deleted")
    })
})
app.put("/upd",(req,res)=>{
    user.findByIdAndUpdate({"_id":req.body._id},req.body).then(()=>{
        res.end("ok")
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(5000)
