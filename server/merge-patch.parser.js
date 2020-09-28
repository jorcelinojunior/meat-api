"use strict";
exports.__esModule = true;
exports.mergePatchBodyParser = void 0;
var mpContentType = "application/merge-patch+json";
exports.mergePatchBodyParser = function (req, resp, next) {
    if (req.getContentType() === mpContentType && req.method === "PATCH") {
        req.rawBody = req.body;
        try {
            req.body = JSON.parse(req.body);
        }
        catch (error) {
            return next(new Error("Invalid content: " + error.message));
        }
    }
    return next();
};
