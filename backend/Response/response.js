function successResponse(data) {
    return {
      error: false,
      message: "Success",
      data,
    };
  }
  
  function failedResponse(message) {
    return {
      error: true,
      message,
    };
  }
  
  function getQuestionnaireResult(point) {
    if (point < 23) {
      return "Rendah";
    } else if (point > 36) {
      return "Tinggi";
    } else {
      return "Sedang";
    }
  }
  
  export default {
    successResponse,
    failedResponse,
    getQuestionnaireResult,
  }
  