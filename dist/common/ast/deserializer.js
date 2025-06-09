"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTDeserializer = void 0;
const enriched_1 = require("./enriched");
const v2_1 = require("gen/NestJs/kodus/ast/v2");
class ASTDeserializer {
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