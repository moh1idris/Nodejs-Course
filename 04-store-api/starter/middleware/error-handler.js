// const errorHandlerMiddleware = async (err, req, res, next) => {
//   console.log(err)
//   return res.status(500).json({ msg: 'Something went wrong, please try again' })
// }

// module.exports = errorHandlerMiddleware


//-->after importing the async in app.js
const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err)
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware
