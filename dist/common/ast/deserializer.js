"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTDeserializer = void 0;
const enriched_1 = require("./enriched");
const v2_1 = require("../../gen/NestJs/kodus/ast/v2");
const graph_1 = require("./graph");
class ASTDeserializer {
    static deserializeCodeGraph(serialized) {
        const files = new Map(Object.entries(serialized.files));
        const functions = new Map(Object.entries(serialized.functions));
        const types = new Map(Object.entries(serialized.types).map(([key, type]) => [
            key,
            {
                ...type,
                type: this.queryTypeMap[type.type] ?? graph_1.QueryType.CLASS_QUERY, // Default
                scope: type.scope.map((scope) => ({
                    ...scope,
                    type: this.scopeTypeMap[scope.type] ?? graph_1.ScopeType.FILE, // Default
                })),
            },
        ]));
        const deserializeAnalysisNode = (node) => ({
            ...node,
            queryType: this.queryTypeMap[node.queryType] ?? graph_1.QueryType.CLASS_QUERY, // Default
            children: node.children
                ? node.children.map(deserializeAnalysisNode)
                : [],
        });
        const analysisNodes = new Map(Object.entries(serialized.analysisNodes).map(([key, node]) => [
            parseInt(key, 10),
            deserializeAnalysisNode(node),
        ]));
        return {
            files,
            functions,
            types,
            analysisNodes,
        };
    }
    static deserializeEnrichedGraph(serialized) {
        const nodes = serialized.nodes.map((node) => ({
            ...node,
            type: this.nodeTypeMap[node.type] ?? enriched_1.NodeType.CLASS, // Default
        }));
        const relationships = serialized.relationships.map((relationship) => ({
            ...relationship,
            type: this.relationshipTypeMap[relationship.type] ??
                enriched_1.RelationshipType.CALLS, // Default
        }));
        return {
            nodes,
            relationships,
        };
    }
    static queryTypeMap = {
        [v2_1.QueryType.QUERY_TYPE_CLASS]: graph_1.QueryType.CLASS_QUERY,
        [v2_1.QueryType.QUERY_TYPE_INTERFACE]: graph_1.QueryType.INTERFACE_QUERY,
        [v2_1.QueryType.QUERY_TYPE_ENUM]: graph_1.QueryType.ENUM_QUERY,
        [v2_1.QueryType.QUERY_TYPE_TYPE_ALIAS]: graph_1.QueryType.TYPE_ALIAS_QUERY,
        [v2_1.QueryType.QUERY_TYPE_FUNCTION]: graph_1.QueryType.FUNCTION_QUERY,
        [v2_1.QueryType.QUERY_TYPE_FUNCTION_CALL]: graph_1.QueryType.FUNCTION_CALL_QUERY,
        [v2_1.QueryType.QUERY_TYPE_FUNCTION_PARAMETERS]: graph_1.QueryType.FUNCTION_PARAMETERS_QUERY,
        [v2_1.QueryType.QUERY_TYPE_IMPORT]: graph_1.QueryType.IMPORT_QUERY,
    };
    static scopeTypeMap = {
        [v2_1.ScopeType.SCOPE_TYPE_FILE]: graph_1.ScopeType.FILE,
        [v2_1.ScopeType.SCOPE_TYPE_CLASS]: graph_1.ScopeType.CLASS,
        [v2_1.ScopeType.SCOPE_TYPE_INTERFACE]: graph_1.ScopeType.INTERFACE,
        [v2_1.ScopeType.SCOPE_TYPE_ENUM]: graph_1.ScopeType.ENUM,
        [v2_1.ScopeType.SCOPE_TYPE_FUNCTION]: graph_1.ScopeType.FUNCTION,
        [v2_1.ScopeType.SCOPE_TYPE_METHOD]: graph_1.ScopeType.METHOD,
    };
    static nodeTypeMap = {
        [v2_1.NodeType.NODE_TYPE_CLASS]: enriched_1.NodeType.CLASS,
        [v2_1.NodeType.NODE_TYPE_FUNCTION]: enriched_1.NodeType.FUNCTION,
        [v2_1.NodeType.NODE_TYPE_INTERFACE]: enriched_1.NodeType.INTERFACE,
        [v2_1.NodeType.NODE_TYPE_METHOD]: enriched_1.NodeType.METHOD,
    };
    static relationshipTypeMap = {
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS]: enriched_1.RelationshipType.CALLS,
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION]: enriched_1.RelationshipType.CALLS_IMPLEMENTATION,
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_HAS_METHOD]: enriched_1.RelationshipType.HAS_METHOD,
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPORTS]: enriched_1.RelationshipType.IMPORTS,
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTS]: enriched_1.RelationshipType.IMPLEMENTS,
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTED_BY]: enriched_1.RelationshipType.IMPLEMENTED_BY,
        [v2_1.RelationshipType.RELATIONSHIP_TYPE_EXTENDS]: enriched_1.RelationshipType.EXTENDS,
    };
}
exports.ASTDeserializer = ASTDeserializer;
//# sourceMappingURL=deserializer.js.map