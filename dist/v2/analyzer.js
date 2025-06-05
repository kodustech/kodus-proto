"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST_ANALYZER_SERVICE_NAME = void 0;
exports.ASTAnalyzerServiceControllerMethods = ASTAnalyzerServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
function ASTAnalyzerServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["initializeRepository", "deleteRepository", "getGraphs", "getDiff"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ASTAnalyzerService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ASTAnalyzerService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.AST_ANALYZER_SERVICE_NAME = "ASTAnalyzerService";
//# sourceMappingURL=analyzer.js.map