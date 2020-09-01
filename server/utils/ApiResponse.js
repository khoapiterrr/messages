'use strict';

var _hasOwnProperty = Object.prototype.hasOwnProperty;

var Status = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_ACTION: 405,
  VALIDATION_FAILED: 422,
  SERVER_ERROR: 500,
};

function statusMessage(status) {
  switch (status) {
    case Status.BAD_REQUEST:
      return 'Bad Request';
    case Status.UNAUTHORIZED:
      return 'Unauthorized';
    case Status.FORBIDDEN:
      return 'Forbidden';
    case Status.NOT_FOUND:
      return 'Not Found';
    case Status.UNSUPPORTED_ACTION:
      return 'Unsupported Action';
    case Status.VALIDATION_FAILED:
      return 'Validation Failed';
    case Status.SERVER_ERROR:
      return 'Internal Server Error';
  }
}

function jsonResponse(res, body, options) {
  options = options || {};
  options.status = options.status || Status.OK;
  res.status(options.status).json(body || null);
}

var api = {
  ok: function (req, res, data) {
    jsonResponse(res, data, {
      status: Status.OK,
    });
  },

  badRequest: function (req, res, errors) {
    errors = Array.isArray(errors) ? errors : [errors];

    var body = {
      message: statusMessage(Status.BAD_REQUEST),
      errors: errors,
    };

    jsonResponse(res, body, {
      status: Status.BAD_REQUEST,
    });
  },

  unauthorized: function (req, res) {
    var body = {
      message: statusMessage(Status.UNAUTHORIZED),
    };

    jsonResponse(res, body, {
      status: Status.UNAUTHORIZED,
    });
  },

  forbidden: function (req, res) {
    var body = {
      message: statusMessage(Status.FORBIDDEN),
    };

    jsonResponse(res, body, {
      status: Status.FORBIDDEN,
    });
  },
  notFound: function (req, res) {
    var body = {
      message: statusMessage(Status.NOT_FOUND),
    };

    jsonResponse(res, body, {
      status: Status.NOT_FOUND,
    });
  },

  unsupportedAction: function (req, res) {
    var body = {
      message: statusMessage(Status.UNSUPPORTED_ACTION),
    };

    jsonResponse(res, body, {
      status: Status.UNSUPPORTED_ACTION,
    });
  },

  invalid: function (req, res, errors) {
    errors = Array.isArray(errors) ? errors : [errors];

    var body = {
      message: statusMessage(Status.VALIDATION_FAILED),
      errors: errors,
    };

    jsonResponse(res, body, {
      status: Status.VALIDATION_FAILED,
    });
  },

  serverError: function (req, res, error) {
    if (error instanceof Error) {
      error = {
        message: error.message,
        stacktrace: error.stack,
      };
    }
    var body = {
      message: statusMessage(Status.SERVER_ERROR),
      error: error,
    };

    jsonResponse(res, body, {
      status: Status.SERVER_ERROR,
    });
  },

  requireParams: function (req, res, params, next) {
    var missing = [];

    params = Array.isArray(params) ? params : [params];

    params.forEach(function (param) {
      if (
        !(req.body && _hasOwnProperty.call(req.body, param)) &&
        !(req.params && _hasOwnProperty.call(req.params, param)) &&
        !_hasOwnProperty.call(req.query, param)
      ) {
        missing.push('Missing required parameter: ' + param);
      }
    });

    if (missing.length) {
      api.badRequest(req, res, missing);
    } else {
      next();
    }
  },

  requireHeaders: function (req, res, headers, next) {
    var missing = [];

    headers = Array.isArray(headers) ? headers : [headers];

    headers.forEach(function (header) {
      if (!(req.headers && _hasOwnProperty.call(req.headers, header))) {
        missing.push('Missing required header parameter: ' + header);
      }
    });

    if (missing.length) {
      api.badRequest(req, res, missing);
    } else {
      next();
    }
  },
};

module.exports = api;
