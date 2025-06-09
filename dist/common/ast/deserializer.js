"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTDeserializer = void 0;
const enriched_1 = require("./enriched");
const v2_1 = require("@@g/kodus/ast/v2");
class ASTDeserializer {
    deserializeEnrichedGraph(serialized) {
        const nodes = serialized.nodes.map((node) => ({
            ...node,
            type: this.deserializeNodeType(node.type),
        }));
        const relationships = serialized.relationships.map((relationship) => ({
            ...relationship,
            type: this.deserializeRelationshipType(relationship.type),
        }));
        return {
            nodes,
            relationships,
        };
    }
    deserializeNodeType(serializedType) {
        switch (serializedType) {
            case v2_1.NodeType.NODE_TYPE_CLASS:
                return enriched_1.NodeType.CLASS;
            case v2_1.NodeType.NODE_TYPE_FUNCTION:
                return enriched_1.NodeType.FUNCTION;
            case v2_1.NodeType.NODE_TYPE_INTERFACE:
                return enriched_1.NodeType.INTERFACE;
            case v2_1.NodeType.NODE_TYPE_METHOD:
                return enriched_1.NodeType.METHOD;
            default:
                throw new Error(`Unknown node type: ${serializedType}`);
        }
    }
    deserializeRelationshipType(serializedType) {
        switch (serializedType) {
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS:
                return enriched_1.RelationshipType.CALLS;
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION:
                return enriched_1.RelationshipType.CALLS_IMPLEMENTATION;
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_HAS_METHOD:
                return enriched_1.RelationshipType.HAS_METHOD;
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPORTS:
                return enriched_1.RelationshipType.IMPORTS;
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTS:
                return enriched_1.RelationshipType.IMPLEMENTS;
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_IMPLEMENTED_BY:
                return enriched_1.RelationshipType.IMPLEMENTED_BY;
            case v2_1.RelationshipType.RELATIONSHIP_TYPE_EXTENDS:
                return enriched_1.RelationshipType.EXTENDS;
            default:
                throw new Error(`Unknown relationship type: ${serializedType}`);
        }
    }
}
exports.ASTDeserializer = ASTDeserializer;
//# sourceMappingURL=deserializer.js.map