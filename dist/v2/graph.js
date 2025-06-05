"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryType = exports.ScopeType = void 0;
var ScopeType;
(function (ScopeType) {
    ScopeType[ScopeType["SCOPE_TYPE_UNSPECIFIED"] = 0] = "SCOPE_TYPE_UNSPECIFIED";
    ScopeType[ScopeType["SCOPE_TYPE_FILE"] = 1] = "SCOPE_TYPE_FILE";
    ScopeType[ScopeType["SCOPE_TYPE_CLASS"] = 2] = "SCOPE_TYPE_CLASS";
    ScopeType[ScopeType["SCOPE_TYPE_INTERFACE"] = 3] = "SCOPE_TYPE_INTERFACE";
    ScopeType[ScopeType["SCOPE_TYPE_ENUM"] = 4] = "SCOPE_TYPE_ENUM";
    ScopeType[ScopeType["SCOPE_TYPE_FUNCTION"] = 5] = "SCOPE_TYPE_FUNCTION";
    ScopeType[ScopeType["SCOPE_TYPE_METHOD"] = 6] = "SCOPE_TYPE_METHOD";
    ScopeType[ScopeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScopeType || (exports.ScopeType = ScopeType = {}));
var QueryType;
(function (QueryType) {
    QueryType[QueryType["QUERY_TYPE_UNSPECIFIED"] = 0] = "QUERY_TYPE_UNSPECIFIED";
    QueryType[QueryType["QUERY_TYPE_IMPORT"] = 1] = "QUERY_TYPE_IMPORT";
    QueryType[QueryType["QUERY_TYPE_CLASS"] = 2] = "QUERY_TYPE_CLASS";
    QueryType[QueryType["QUERY_TYPE_INTERFACE"] = 3] = "QUERY_TYPE_INTERFACE";
    QueryType[QueryType["QUERY_TYPE_ENUM"] = 4] = "QUERY_TYPE_ENUM";
    QueryType[QueryType["QUERY_TYPE_TYPE_ALIAS"] = 5] = "QUERY_TYPE_TYPE_ALIAS";
    QueryType[QueryType["QUERY_TYPE_FUNCTION"] = 6] = "QUERY_TYPE_FUNCTION";
    QueryType[QueryType["QUERY_TYPE_FUNCTION_CALL"] = 7] = "QUERY_TYPE_FUNCTION_CALL";
    QueryType[QueryType["QUERY_TYPE_FUNCTION_PARAMETERS"] = 8] = "QUERY_TYPE_FUNCTION_PARAMETERS";
    QueryType[QueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(QueryType || (exports.QueryType = QueryType = {}));
//# sourceMappingURL=graph.js.map