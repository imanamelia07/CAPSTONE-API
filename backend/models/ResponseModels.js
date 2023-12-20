function successResponse(data) {
    return {
        error : false,
        message : "success",
        data,
    };
}

function failedResponse(message) {
    return {
        error: true,
        message,
    };
}

export default {
    successResponse,
    failedResponse,
};