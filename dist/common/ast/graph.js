"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScopeType = exports.QueryType = void 0;
var QueryType;
(function (QueryType) {
    QueryType["IMPORT_QUERY"] = "import";
    QueryType["CLASS_QUERY"] = "class";
    QueryType["INTERFACE_QUERY"] = "interface";
    QueryType["ENUM_QUERY"] = "enum";
    QueryType["TYPE_ALIAS_QUERY"] = "type";
    QueryType["FUNCTION_QUERY"] = "function";
    QueryType["FUNCTION_CALL_QUERY"] = "function_call";
    QueryType["FUNCTION_PARAMETERS_QUERY"] = "function_parameters";
})(QueryType || (exports.QueryType = QueryType = {}));
var ScopeType;
(function (ScopeType) {
    ScopeType["FILE"] = "file";
    ScopeType["CLASS"] = "class";
    ScopeType["INTERFACE"] = "interface";
    ScopeType["ENUM"] = "enum";
    ScopeType["FUNCTION"] = "function";
    ScopeType["METHOD"] = "method";
})(ScopeType || (exports.ScopeType = ScopeType = {}));
//# sourceMappingURL=graph.js.map