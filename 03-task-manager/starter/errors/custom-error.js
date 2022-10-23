class CustomAPIError extends Error{          //--> n extends from the error class
    constructor(message,statusCode){         //--> with functionality cons --> 
     super(message)                          //--> inside the cons --> calling the super
     this.statusCode = statusCode
    }
}


const createCustomError = (msg, statusCode) =>{  //-->create a new object--> with 2 parmeter  
    return new CustomAPIError(msg,statusCode)
}

module.exports ={ createCustomError , CustomAPIError}