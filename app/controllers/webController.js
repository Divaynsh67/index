module.exports={
    index(req,res){
       res.render("index",{title:"Express MakeOver"})
    },create(req,res){
        console.log("For POST Request")
    },update(req,res){
        console.log("For PUT Request")
    },delete(req,res){
        console.log("For DELETE Request")
    }
}