import { EnrichGraph, NodeType, RelationshipType } from "./enriched";
import {
    EnrichGraph as SerializedEnrichGraph,
    NodeType as SerializedNodeType,
    RelationshipType as SerializedRelationshipType,
} from "gen/NestJs/kodus/ast/v2";

export class ASTDeserializer {
    static deserializeEnrichedGraph(
        serialized: SerializedEnrichGraph
    ): EnrichGraph {
        const nodes = serialized.nodes.map((node) => ({
            ...node,
            type: this.nodeTypeMap[node.type] ?? NodeType.CLASS, // Default
        }));

        const relationships = serialized.relationships.map((relationship) => ({
            ...relationship,
            type:
                this.relationshipTypeMap[relationship.type] ??
                RelationshipType.CALLS, // Default
        }));

        return {
            nodes,
            relationships,
        };
    }

    private static readonly nodeTypeMap: Record<
        Exclude<
            SerializedNodeType,
            | SerializedNodeType.UNRECOGNIZED
            | SerializedNodeType.NODE_TYPE_UNSPECIFIED
        >,
        NodeType
    > = {
        [SerializedNodeType.NODE_TYPE_CLASS]: NodeType.CLASS,
        [SerializedNodeType.NODE_TYPE_FUNCTION]: NodeType.FUNCTION,
        [SerializedNodeType.NODE_TYPE_INTERFACE]: NodeType.INTERFACE,
        [SerializedNodeType.NODE_TYPE_METHOD]: NodeType.METHOD,
    };

    private static readonly relationshipTypeMap: Record<
        Exclude<
            SerializedRelationshipType,
            | SerializedRelationshipType.UNRECOGNIZED
            | SerializedRelationshipType.RELATIONSHIP_TYPE_UNSPECIFIED
        >,
        RelationshipType
    > = {
        [SerializedRelationshipType.RELATIONSHIP_TYPE_CALLS]:
            RelationshipType.CALLS,
        [SerializedRelationshipType.RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION]:
            RelationshipType.CALLS_IMPLEMENTATION,
        [SerializedRelationshipType.RELATIONSHIP_TYPE_HAS_METHOD]:
            RelationshipType.HAS_METHOD,
        [SerializedRelationshipType.RELATIONSHIP_TYPE_IMPORTS]:
            RelationshipType.IMPORTS,
        [SerializedRelationshipType.RELATIONSHIP_TYPE_IMPLEMENTS]:
            RelationshipType.IMPLEMENTS,
        [SerializedRelationshipType.RELATIONSHIP_TYPE_IMPLEMENTED_BY]:
            RelationshipType.IMPLEMENTED_BY,
        [SerializedRelationshipType.RELATIONSHIP_TYPE_EXTENDS]:
            RelationshipType.EXTENDS,
    };
}
