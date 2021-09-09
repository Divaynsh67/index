module.exports={
    index(req,res){
        res.send("For Get Request")
    },create(req,res){
        res.send("For POST Request")
    },update(req,res){
        res.send("For PUT Request")
    },delete(req,res){
        cres.send("For DELETE Request")
    }
}