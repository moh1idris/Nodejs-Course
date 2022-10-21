const logger = (req,res,next )=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);         ///-> this will give you the --> GET / 2022
    // res.send('Testing')             //--> this will stop the spining and execute tesing
    next()  
}

module.exports = logger