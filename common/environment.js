"use strict";
exports.__esModule = true;
exports.environment = void 0;
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    db: { url: process.env.DB_URL || 'mongodb://localhost/meat-api' }
};
