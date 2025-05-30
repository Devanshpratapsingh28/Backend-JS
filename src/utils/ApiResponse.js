class ApiResponse{
    constructor(statuscode,data,message = "Success"){
        this.statuscode = statuscode;
        this.data = data;
        this.message = message;
        this.success = statuscode < 400; // success is true if status code is less than 400;
    }
}