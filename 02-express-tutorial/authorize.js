const authorize = (req, res, next)=>{
    const {user} = req.query;         //-->http://localhost:5000/?user=john   --> this will execute only if u run this r else its Unauthorized
    if(user === 'john'){
        req.user = {name: 'john' , id:3 }
        next()               //-->still need to call the next() --> r the setup faiuils
    }
    res.status(401).send('Unauthorized')
}


module.exports = authorize