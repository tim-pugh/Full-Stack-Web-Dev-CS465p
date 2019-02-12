const query=require("querystring")
module.exports={
    use:function(){
    return function(req,res,next){
    var str="";
    req.on("data",function(data){
        str+=data;
    })
    req.on("end",function(){

        req.body=query.parse(str);

        next();
    })

}
}
}