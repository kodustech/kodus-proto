import { CodeGraph } from "./graph";
import { EnrichGraph } from "./enriched";
import { CodeGraph as SerializedCodeGraph, EnrichGraph as SerializedEnrichGraph } from "@@g/kodus/ast/v2";
export declare class ASTSerializer {
    serializeCodeGraph(graph: CodeGraph): SerializedCodeGraph;
    serializeEnrichedGraph(graph: EnrichGraph): SerializedEnrichGraph;
    private serializeQueryType;
    private serializeNodeType;
    private serializeRelationshipType;
}
