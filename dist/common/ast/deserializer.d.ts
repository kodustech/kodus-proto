import { EnrichGraph } from "./enriched";
import { EnrichGraph as SerializedEnrichGraph, CodeGraph as SerializedCodeGraph } from "../../gen/NestJs/kodus/ast/v2";
import { CodeGraph } from "./graph";
export declare class ASTDeserializer {
    static deserializeCodeGraph(serialized: SerializedCodeGraph): CodeGraph;
    static deserializeEnrichedGraph(serialized: SerializedEnrichGraph): EnrichGraph;
    private static readonly queryTypeMap;
    private static readonly scopeTypeMap;
    private static readonly nodeTypeMap;
    private static readonly relationshipTypeMap;
}
