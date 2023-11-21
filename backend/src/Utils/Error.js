
class DataNotFound extends Error {

    constructor(src, param) {
        super();
        this.name = this.constructor.name;
        this.message = "Data not found at " + src + " with params " + param;
        this.statusCode = 404;
    }
} 

class UnvalidParam extends Error {
    constructor(src, param) {
        super();
        this.name = this.constructor.name;
        this.message = "Unvalid param for " + src + " : " + param;
        this.statusCode = 403;
    }
}

class InvalidRequest extends Error {
    constructor(src = "this data") {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid request for " + src;
        this.statusCode = 401;
    }
}

class ForbiddenAccess extends Error {
    constructor(src = "this data") {
        super();
        this.name = this.constructor.name;
        this.message = "Forbidden access to " + src;
        this.statusCode = 403;
    }
}

class TokenExpiredError extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Token expired";
        this.statusCode = 403;
    }
}

class InvalidToken extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid token";
        this.statusCode = 403;
    }
}

class MissingToken extends Error {
    constructor(src = "this data") {
        super();
        this.name = this.constructor.name;
        this.message = "Missing token to access " + src + ". The header 'x-access-token' is required";
        this.statusCode = 400;
    }
}




export {
    DataNotFound,
    UnvalidParam,
    ForbiddenAccess,
    MissingToken,
    InvalidRequest,
    TokenExpiredError,
    InvalidToken
}