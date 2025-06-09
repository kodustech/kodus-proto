import { EnrichGraph, NodeType, RelationshipType } from "./enriched";
import {
    EnrichGraph as SerializedEnrichGraph,
    NodeType as SerializedNodeType,
    RelationshipType as SerializedRelationshipType,
    CodeGraph as SerializedCodeGraph,
    ScopeType as SerializedScopeType,
    QueryType as SerializedQueryType,
    AnalysisNode as SerializedAnalysisNode,
} from "../../gen/NestJs/kodus/ast/v2";
import {
    AnalysisNode,
    CodeGraph,
    FileAnalysis,
    FunctionAnalysis,
    ScopeType,
    TypeAnalysis,
    QueryType,
} from "./graph";

export class ASTDeserializer {
    static deserializeCodeGraph(serialized: SerializedCodeGraph): CodeGraph {
        const files = new Map<string, FileAnalysis>(
            Object.entries(serialized.files)
        );
        const functions = new Map<string, FunctionAnalysis>(
            Object.entries(serialized.functions)
        );
        const types = new Map<string, TypeAnalysis>(
            Object.entries(serialized.types).map(([key, type]) => [
                key,
                {
                    ...type,
                    type: this.queryTypeMap[type.type] ?? QueryType.CLASS_QUERY, // Default
                    scope: type.scope.map((scope) => ({
                        ...scope,
                        type: this.scopeTypeMap[scope.type] ?? ScopeType.FILE, // Default
                    })),
                },
            ])
        );

        const deserializeAnalysisNode = (
            node: SerializedAnalysisNode
        ): AnalysisNode => ({
            ...node,
            queryType:
                this.queryTypeMap[node.queryType] ?? QueryType.CLASS_QUERY, // Default
            children: node.children
                ? node.children.map(deserializeAnalysisNode)
                : [],
        });

        const analysisNodes = new Map<number, AnalysisNode>(
            Object.entries(serialized.analysisNodes).map(([key, node]) => [
                parseInt(key, 10),
                deserializeAnalysisNode(node),
            ])
        );

        return {
            files,
            functions,
            types,
            analysisNodes,
        };
    }

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

    private static readonly queryTypeMap: Record<
        Exclude<
            SerializedQueryType,
            | SerializedQueryType.UNRECOGNIZED
            | SerializedQueryType.QUERY_TYPE_UNSPECIFIED
        >,
        QueryType
    > = {
        [SerializedQueryType.QUERY_TYPE_CLASS]: QueryType.CLASS_QUERY,
        [SerializedQueryType.QUERY_TYPE_INTERFACE]: QueryType.INTERFACE_QUERY,
        [SerializedQueryType.QUERY_TYPE_ENUM]: QueryType.ENUM_QUERY,
        [SerializedQueryType.QUERY_TYPE_TYPE_ALIAS]: QueryType.TYPE_ALIAS_QUERY,
        [SerializedQueryType.QUERY_TYPE_FUNCTION]: QueryType.FUNCTION_QUERY,
        [SerializedQueryType.QUERY_TYPE_FUNCTION_CALL]:
            QueryType.FUNCTION_CALL_QUERY,
        [SerializedQueryType.QUERY_TYPE_FUNCTION_PARAMETERS]:
            QueryType.FUNCTION_PARAMETERS_QUERY,
        [SerializedQueryType.QUERY_TYPE_IMPORT]: QueryType.IMPORT_QUERY,
    };

    private static readonly scopeTypeMap: Record<
        Exclude<
            SerializedScopeType,
            | SerializedScopeType.UNRECOGNIZED
            | SerializedScopeType.SCOPE_TYPE_UNSPECIFIED
        >,
        ScopeType
    > = {
        [SerializedScopeType.SCOPE_TYPE_FILE]: ScopeType.FILE,
        [SerializedScopeType.SCOPE_TYPE_CLASS]: ScopeType.CLASS,
        [SerializedScopeType.SCOPE_TYPE_INTERFACE]: ScopeType.INTERFACE,
        [SerializedScopeType.SCOPE_TYPE_ENUM]: ScopeType.ENUM,
        [SerializedScopeType.SCOPE_TYPE_FUNCTION]: ScopeType.FUNCTION,
        [SerializedScopeType.SCOPE_TYPE_METHOD]: ScopeType.METHOD,
    };

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
