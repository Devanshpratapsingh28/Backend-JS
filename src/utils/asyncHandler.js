// Method-1 : Promise Wrapper
const asyncHandler = (requestHandler) => {
    (req,res,next) => { 
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err)) // This line ensures that any unhandled promise rejections are caught and passed to the next middleware
    }
}    

export {asyncHandler};
/*
// Method-2 : Try-catch wrapper
const asyncHandler = (fn) => async (req,res,next) =>{
    try {
        await fn(req,res,next);// execute the function if no error occurs
    }
    catch(err){
        req.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
} // this function takes another function (fn) as an argument and returns a new function that handles errors by catching them and sending a response with the error message and status code.
// Above function is same as () => { async(req,res,next) => {some code} }
export {asyncHandler};
*/