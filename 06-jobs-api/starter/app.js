// require('dotenv').config();
// require('express-async-errors');
// const express = require('express');
// const app = express();

// //connectDB
// const connectDB = require('./db/connect')
// //
// const authenticateUser = require('./middleware/authentication')    //--> importing th authentication from th emifddleware to the app.js

// //routers
// const authRouter = require('./routes/auth')
// const jobsRouter = require('./routes/jobs')

// // error handler
// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// app.use(express.json());
// // extra packages

// // routes
// app.use('/api/v1/auth', authRouter)                                   
// // app.use('/api/v1/jobs',  jobsRouter)                                   
// app.use('/api/v1/jobs', authenticateUser,  jobsRouter)  //--> here vr prtecting alll the jobs        ///--> authentication will pass only if the user id token matches that u will c in the ID                           

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// const port = process.env.PORT || 3000;

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI)
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();



//--> adding the security part in  the below 
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

//extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

//connectDB
const connectDB = require('./db/connect')
//
const authenticateUser = require('./middleware/authentication')    //--> importing th authentication from th emifddleware to the app.js

//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);         //--> secnce we RE GOING TO HOST IT SO WE NEED TO SET THIS THINGS 
app.use(rateLimiter({
  window: 15 * 60 * 1000, //15 minutes
  max: 100, // limit each Ip to 100 requests per windowMs
}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.use('/api/v1/auth', authRouter)                                   
// app.use('/api/v1/jobs',  jobsRouter)                                   
app.use('/api/v1/jobs', authenticateUser,  jobsRouter)  //--> here vr prtecting alll the jobs        ///--> authentication will pass only if the user id token matches that u will c in the ID                           

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
