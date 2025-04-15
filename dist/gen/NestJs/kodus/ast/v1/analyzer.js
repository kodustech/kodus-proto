"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST_ANALYZER_SERVICE_NAME = exports.AuthMode = exports.PlatformType = void 0;
exports.ASTAnalyzerServiceControllerMethods = ASTAnalyzerServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
var PlatformType;
(function (PlatformType) {
    PlatformType[PlatformType["PLATFORM_TYPE_UNSPECIFIED"] = 0] = "PLATFORM_TYPE_UNSPECIFIED";
    PlatformType[PlatformType["PLATFORM_TYPE_GITHUB"] = 1] = "PLATFORM_TYPE_GITHUB";
    PlatformType[PlatformType["PLATFORM_TYPE_GITLAB"] = 2] = "PLATFORM_TYPE_GITLAB";
    PlatformType[PlatformType["PLATFORM_TYPE_JIRA"] = 3] = "PLATFORM_TYPE_JIRA";
    PlatformType[PlatformType["PLATFORM_TYPE_SLACK"] = 4] = "PLATFORM_TYPE_SLACK";
    PlatformType[PlatformType["PLATFORM_TYPE_NOTION"] = 5] = "PLATFORM_TYPE_NOTION";
    PlatformType[PlatformType["PLATFORM_TYPE_MSTEAMS"] = 6] = "PLATFORM_TYPE_MSTEAMS";
    PlatformType[PlatformType["PLATFORM_TYPE_DISCORD"] = 7] = "PLATFORM_TYPE_DISCORD";
    PlatformType[PlatformType["PLATFORM_TYPE_AZURE_BOARDS"] = 8] = "PLATFORM_TYPE_AZURE_BOARDS";
    PlatformType[PlatformType["PLATFORM_TYPE_AZURE_REPOS"] = 9] = "PLATFORM_TYPE_AZURE_REPOS";
    PlatformType[PlatformType["PLATFORM_TYPE_KODUS_WEB"] = 10] = "PLATFORM_TYPE_KODUS_WEB";
    PlatformType[PlatformType["PLATFORM_TYPE_BITBUCKET"] = 11] = "PLATFORM_TYPE_BITBUCKET";
    PlatformType[PlatformType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PlatformType || (exports.PlatformType = PlatformType = {}));
var AuthMode;
(function (AuthMode) {
    AuthMode[AuthMode["AUTH_MODE_UNSPECIFIED"] = 0] = "AUTH_MODE_UNSPECIFIED";
    AuthMode[AuthMode["AUTH_MODE_OAUTH"] = 1] = "AUTH_MODE_OAUTH";
    AuthMode[AuthMode["AUTH_MODE_TOKEN"] = 2] = "AUTH_MODE_TOKEN";
    AuthMode[AuthMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthMode || (exports.AuthMode = AuthMode = {}));
function ASTAnalyzerServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["buildEnrichedGraph"];
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