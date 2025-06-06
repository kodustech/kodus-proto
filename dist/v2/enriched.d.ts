import { Range } from "./tree_sitter";
/** Node types */
export declare enum NodeType {
    NODE_TYPE_UNSPECIFIED = 0,
    NODE_TYPE_CLASS = 1,
    NODE_TYPE_METHOD = 2,
    NODE_TYPE_FUNCTION = 3,
    NODE_TYPE_INTERFACE = 4,
    UNRECOGNIZED = -1
}
/** Relationship types */
export declare enum RelationshipType {
    RELATIONSHIP_TYPE_UNSPECIFIED = 0,
    RELATIONSHIP_TYPE_CALLS = 1,
    RELATIONSHIP_TYPE_CALLS_IMPLEMENTATION = 2,
    RELATIONSHIP_TYPE_HAS_METHOD = 3,
    RELATIONSHIP_TYPE_IMPORTS = 4,
    RELATIONSHIP_TYPE_IMPLEMENTS = 5,
    RELATIONSHIP_TYPE_IMPLEMENTED_BY = 6,
    RELATIONSHIP_TYPE_EXTENDS = 7,
    UNRECOGNIZED = -1
}
/** Node in the enriched graph */
export interface EnrichGraphNode {
    id: string;
    position: Range | undefined;
    type: NodeType;
    file: string;
    filePath: string;
}
/** Edge/relationship in the enriched graph */
export interface EnrichGraphEdge {
    from: string;
    to: string;
    type: RelationshipType;
    fromPath: string;
    toPath: string;
}
/** Impacted node (with optional fields) */
export interface ImpactedNode {
    id: string;
    type: string;
    severity: string;
    level: number;
    filePath: string;
    calledBy: string[];
    importedBy: string[];
}
/** The enriched graph itself */
export interface EnrichGraph {
    nodes: EnrichGraphNode[];
    relationships: EnrichGraphEdge[];
}
