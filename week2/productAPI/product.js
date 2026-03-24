import exp from 'express'
const app=exp()
app.use(exp.json())
const port=4000
app.listen(port,()=>console.log(`server listening port ${port}...`))
let users=[]
app.get('/users',(req,res)=>{
    res.json({message:"all users",payload:users})
})
app.get('/users/:brand',(req,res)=>{
    let brandUrl=req.params.brand
    let user=users.find(userobj=>userobj.brand===brandUrl)
    if(!user){
        return res.json({message:"brand not found"})
    }
    res.json({message:"a brand",payload:user})
})
app.post('/users',(req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.json({message:"user created"})
})
//route to handle PUT request of client 
app.put('/users',(req,res)=>{
let modifieduser=req.body
let index=users.findIndex(userobj=>userobj.brand===modifieduser.brand)
if(index===-1){
    return res.json({message:"user not found"})
}
users.splice(index,1,modifieduser)
res.json({message:"user updated"})
})
app.delete('/users/:id',(req,res)=>{
 let idUrl=Number(req.params.id)
 let index=users.findIndex(userobj=>userobj.id===idUrl)
 if(index===-1){
    return res.json({message:"user not found to delete"})
 }
users.splice(index,1)
res.json({message:"user removed"})
})