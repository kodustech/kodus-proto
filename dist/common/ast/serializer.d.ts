import { CodeGraph } from "./graph";
import { EnrichGraph } from "./enriched";
import { CodeGraph as SerializedCodeGraph, EnrichGraph as SerializedEnrichGraph } from "gen/NestJs/kodus/ast/v2";
export declare class ASTSerializer {
    static serializeCodeGraph(graph: CodeGraph): SerializedCodeGraph;
    static serializeEnrichedGraph(graph: EnrichGraph): SerializedEnrichGraph;
    private static readonly queryTypeMap;
    private static readonly nodeTypeMap;
    private static readonly relationshipTypeMap;
}
