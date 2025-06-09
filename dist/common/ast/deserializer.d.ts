import { EnrichGraph } from "./enriched";
import { EnrichGraph as SerializedEnrichGraph } from "@@g/kodus/ast/v2";
export declare class ASTDeserializer {
    static deserializeEnrichedGraph(serialized: SerializedEnrichGraph): EnrichGraph;
    private static readonly nodeTypeMap;
    private static readonly relationshipTypeMap;
}
