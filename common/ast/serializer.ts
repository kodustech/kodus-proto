import { AnalysisNode, CodeGraph, QueryType } from "./graph";
import { EnrichGraph, NodeType, RelationshipType } from "./enriched";
import {
    CodeGraph as SerializedCodeGraph,
    EnrichGraph as SerializedEnrichGraph,
    EnrichGraphNode as SerializedEnrichGraphNode,
    EnrichGraphEdge as SerializedEnrichGraphEdge,
    QueryType as SerializedQueryType,
    NodeType as SerializedNodeType,
    RelationshipType as SerializedRelationshipType,
    AnalysisNode as SerializedAnalysisNode,
} from "../../gen/NestJs/kodus/ast/v2";
export class ASTSerializer {
    static serializeCodeGraph(graph: CodeGraph): SerializedCodeGraph {
        const files = Object.fromEntries(graph.files.entries());
        const functions = Object.fromEntries(graph.functions.entries());
        const types = {};
        const analysisNodes = {};

        for (const [key, type] of graph.types.entries()) {
            types[key] = {
                ...type,
                type:
                    this.queryTypeMap[type.type] ??
                    SerializedQueryType.QUERY_TYPE_UNSPECIFIED,
            };
        }

        const serializeAnalysisNode = (
            node: AnalysisNode
        ): SerializedAnalysisNode => ({
            ...node,
            queryType:
                this.queryTypeMap[node.queryType] ??
                SerializedQueryType.QUERY_TYPE_UNSPECIFIED,
            children: node.children
                ? node.children.map(serializeAnalysisNode)
                : [],
        });

        for (const [key, node] of graph.analysisNodes.entries()) {
            analysisNodes[key] = serializeAnalysisNode(node);
        }

        return {
            files,
            functions,
            types,
            analysisNodes,
        };
    }

    static serializeEnrichedGraph(graph: EnrichGraph): SerializedEnrichGraph {
        const nodes = graph.nodes.map(
            (n) =>
                ({
                    ...n,
                    type:
                        this.nodeTypeMap[n.type] ??
                        SerializedNodeType.NODE_TYPE_UNSPECIFIED,
                } as SerializedEnrichGraphNode)
        );

        const relationships = graph.relationships.map(
            (r) =>
                ({
                    ...r,
                    type:
                        this.relationshipTypeMap[r.type] ??
                        SerializedRelationshipType.RELATIONSHIP_TYPE_UNSPECIFIED,
                } as SerializedEnrichGraphEdge)
        );

        return {
            nodes,
            relationships,
        };
    }

    private static readonly queryTypeMap: Record<
        QueryType,
        SerializedQueryType
    > = {
        [QueryType.CLASS_QUERY]: SerializedQueryType.QUERY_TYPE_CLASS,
        [QueryType.INTERFACE_QUERY]: SerializedQueryType.QUERY_TYPE_INTERFACE,
        [QueryType.ENUM_QUERY]: SerializedQueryType.QUERY_TYPE_ENUM,
        [QueryType.TYPE_ALIAS_QUERY]: SerializedQueryType.QUERY_TYPE_TYPE_ALIAS,
        [QueryType.FUNCTION_QUERY]: SerializedQueryType.QUERY_TYPE_FUNCTION,
        [QueryType.FUNCTION_CALL_QUERY]:
            SerializedQueryType.QUERY_TYPE_FUNCTION_CALL,
        [QueryType.FUNCTION_PARAMETERS_QUERY]:
            SerializedQueryType.QUERY_TYPE_FUNCTION_PARAMETERS,
        [QueryType.IMPORT_QUERY]: SerializedQueryType.QUERY_TYPE_IMPORT,
    };

    private static readonly nodeTypeMap: Record<NodeType, SerializedNodeType> =
        {
            [NodeType.CLASS]: SerializedNodeType.NODE_TYPE_CLASS,
            [NodeType.METHOD]: SerializedNodeType.NODE_TYPE_METHOD,
            [NodeType.FUNCTION]: SerializedNodeType.NODE_TYPE_FUNCTION,
            [NodeType.INTERFACE]: SerializedNodeType.NODE_TYPE_INTERFACE,
        };

    private static readonly relationshipTypeMap: Record<
        RelationshipType,
        SerializedRelationshipType
    > = {
        [RelationshipType.CALLS]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_CALLS,
        [RelationshipType.CALLS_IMPLEMENTATION]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION,
        [RelationshipType.HAS_METHOD]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_HAS_METHOD,
        [RelationshipType.IMPORTS]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_IMPORTS,
        [RelationshipType.IMPLEMENTS]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_IMPLEMENTS,
        [RelationshipType.IMPLEMENTED_BY]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_IMPLEMENTED_BY,
        [RelationshipType.EXTENDS]:
            SerializedRelationshipType.RELATIONSHIP_TYPE_EXTENDS,
    };
}
