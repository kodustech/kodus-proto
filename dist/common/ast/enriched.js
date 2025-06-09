"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipType = exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType["CLASS"] = "CLASS";
    NodeType["METHOD"] = "METHOD";
    NodeType["FUNCTION"] = "FUNCTION";
    NodeType["INTERFACE"] = "INTERFACE";
})(NodeType || (exports.NodeType = NodeType = {}));
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["CALLS"] = "CALLS";
    RelationshipType["CALLS_IMPLEMENTATION"] = "CALLS_IMPLEMENTATION";
    RelationshipType["HAS_METHOD"] = "HAS_METHOD";
    RelationshipType["IMPORTS"] = "IMPORTS";
    RelationshipType["IMPLEMENTS"] = "IMPLEMENTS";
    RelationshipType["IMPLEMENTED_BY"] = "IMPLEMENTED_BY";
    RelationshipType["EXTENDS"] = "EXTENDS";
})(RelationshipType || (exports.RelationshipType = RelationshipType = {}));
//# sourceMappingURL=enriched.js.map