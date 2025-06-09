"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTSerializer = void 0;
const graph_1 = require("./graph");
const enriched_1 = require("./enriched");
const v2_1 = require("../../gen/NestJs/kodus/ast/v2");
class ASTSerializer {
    static serializeCodeGraph(graph) {
        const files = Object.fromEntries(graph.files.entries());
        const functions = Object.fromEntries(graph.functions.entries());
        const types = {};
        for (const [key, type] of graph.types.entries()) {
            types[key] = {
                ...type,
                type: this.queryTypeMap[type.type] ??
                    v2_1.QueryType.QUERY_TYPE_UNSPECIFIED,
            };
        }
        return {
            files: files,
            functions: functions,
            types: types,
        };
    }
    static serializeEnrichedGraph(graph) {
        const nodes = graph.nodes.map((n) => ({
            ...n,
            type: this.nodeTypeMap[n.type] ??
                v2_1.NodeType.NODE_TYPE_UNSPECIFIED,
        }));
        const relationships = graph.relationships.map((r) => ({
            ...r,
            type: this.relationshipTypeMap[r.type] ??
                v2_1.RelationshipType.RELATIONSHIP_TYPE_UNSPECIFIED,
        }));
        return {
            nodes,
            relationships,
        };
    }
    static queryTypeMap = {
        [graph_1.QueryType.CLASS_QUERY]: v2_1.QueryType.QUERY_TYPE_CLASS,
        [graph_1.QueryType.INTERFACE_QUERY]: v2_1.QueryType.QUERY_TYPE_INTERFACE,
        [graph_1.QueryType.ENUM_QUERY]: v2_1.QueryType.QUERY_TYPE_ENUM,
        [graph_1.QueryType.TYPE_ALIAS_QUERY]: v2_1.QueryType.QUERY_TYPE_TYPE_ALIAS,
        [graph_1.QueryType.FUNCTION_QUERY]: v2_1.QueryType.QUERY_TYPE_FUNCTION,
        [graph_1.QueryType.FUNCTION_CALL_QUERY]: v2_1.QueryType.QUERY_TYPE_FUNCTION_CALL,
        [graph_1.QueryType.FUNCTION_PARAMETERS_QUERY]: v2_1.QueryType.QUERY_TYPE_FUNCTION_PARAMETERS,
        [graph_1.QueryType.IMPORT_QUERY]: v2_1.QueryType.QUERY_TYPE_IMPORT,
    };
    static nodeTypeMap = {
        [enriched_1.NodeType.CLASS]: v2_1.NodeType.NODE_TYPE_CLASS,
        [enriched_1.NodeType.METHOD]: v2_1.NodeType.NODE_TYPE_METHOD,
        [enriched_1.NodeType.FUNCTION]: v2_1.NodeType.NODE_TYPE_FUNCTION,
        [enriched_1.NodeType.INTERFACE]: v2_1.NodeType.NODE_TYPE_INTERFACE,
    };
    static relationshipTypeMap = {
        [enriched_1.RelationshipType.CALLS]: v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS,
        [enriched_1.RelationshipType.CALLS_IMPLEMENTATION]: v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION,
        [enriched_1.RelationshipType.HAS_METHOD]: v2_1.RelationshipType.RELATIONSHIP_TYPE_HAS_METHOD,
        [enriched_1.RelationshipType.IMPORTS]: v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPORTS,
        [enriched_1.RelationshipType.IMPLEMENTS]: v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTS,
        [enriched_1.RelationshipType.IMPLEMENTED_BY]: v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTED_BY,
        [enriched_1.RelationshipType.EXTENDS]: v2_1.RelationshipType.RELATIONSHIP_TYPE_EXTENDS,
    };
}
exports.ASTSerializer = ASTSerializer;
//# sourceMappingURL=serializer.js.map