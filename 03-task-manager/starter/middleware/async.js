const asyncWrapper = (fn) =>{
    return async (req, res, next) =>{
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)  //--> here the nect will pass it to next middleWare file so ie.--> error-handler.js
        }
    }
}
module.exports = asyncWrapper