"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTSerializer = void 0;
const graph_1 = require("./graph");
const enriched_1 = require("./enriched");
const v2_1 = require("gen/NestJs/kodus/ast/v2");
class ASTSerializer {
    serializeCodeGraph(graph) {
        const files = Object.fromEntries(graph.files.entries());
        const functions = Object.fromEntries(graph.functions.entries());
        const types = {};
        for (const [key, type] of graph.types.entries()) {
            types[key] = {
                ...type,
                type: this.serializeQueryType(type.type),
            };
        }
        return {
            files: files,
            functions: functions,
            types: types,
        };
    }
    serializeEnrichedGraph(graph) {
        const nodes = graph.nodes.map((n) => ({
            ...n,
            type: this.serializeNodeType(n.type),
        }));
        const relationships = graph.relationships.map((r) => ({
            ...r,
            type: this.serializeRelationshipType(r.type),
        }));
        return {
            nodes,
            relationships,
        };
    }
    serializeQueryType(type) {
        switch (type) {
            case graph_1.QueryType.CLASS_QUERY:
                return v2_1.QueryType.QUERY_TYPE_CLASS;
            case graph_1.QueryType.INTERFACE_QUERY:
                return v2_1.QueryType.QUERY_TYPE_INTERFACE;
            case graph_1.QueryType.ENUM_QUERY:
                return v2_1.QueryType.QUERY_TYPE_ENUM;
            case graph_1.QueryType.TYPE_ALIAS_QUERY:
                return v2_1.QueryType.QUERY_TYPE_TYPE_ALIAS;
            case graph_1.QueryType.FUNCTION_QUERY:
                return v2_1.QueryType.QUERY_TYPE_FUNCTION;
            case graph_1.QueryType.FUNCTION_CALL_QUERY:
                return v2_1.QueryType.QUERY_TYPE_FUNCTION_CALL;
            case graph_1.QueryType.FUNCTION_PARAMETERS_QUERY:
                return v2_1.QueryType.QUERY_TYPE_FUNCTION_PARAMETERS;
            case graph_1.QueryType.IMPORT_QUERY:
                return v2_1.QueryType.QUERY_TYPE_IMPORT;
            default:
                return v2_1.QueryType.QUERY_TYPE_UNSPECIFIED;
        }
    }
    serializeNodeType(type) {
        switch (type) {
            case enriched_1.NodeType.CLASS:
                return v2_1.NodeType.NODE_TYPE_CLASS;
            case enriched_1.NodeType.METHOD:
                return v2_1.NodeType.NODE_TYPE_METHOD;
            case enriched_1.NodeType.FUNCTION:
                return v2_1.NodeType.NODE_TYPE_FUNCTION;
            case enriched_1.NodeType.INTERFACE:
                return v2_1.NodeType.NODE_TYPE_INTERFACE;
            default:
                return v2_1.NodeType.NODE_TYPE_UNSPECIFIED;
        }
    }
    serializeRelationshipType(type) {
        switch (type) {
            case enriched_1.RelationshipType.CALLS:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS;
            case enriched_1.RelationshipType.CALLS_IMPLEMENTATION:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION;
            case enriched_1.RelationshipType.HAS_METHOD:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_HAS_METHOD;
            case enriched_1.RelationshipType.IMPORTS:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPORTS;
            case enriched_1.RelationshipType.IMPLEMENTS:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTS;
            case enriched_1.RelationshipType.IMPLEMENTED_BY:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTED_BY;
            case enriched_1.RelationshipType.EXTENDS:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_EXTENDS;
            default:
                return v2_1.RelationshipType.RELATIONSHIP_TYPE_UNSPECIFIED;
        }
    }
}
exports.ASTSerializer = ASTSerializer;
//# sourceMappingURL=serializer.js.map