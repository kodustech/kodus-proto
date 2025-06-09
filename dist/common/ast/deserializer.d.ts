import { EnrichGraph } from "./enriched";
import { EnrichGraph as SerializedEnrichGraph } from "gen/NestJs/kodus/ast/v2";
export declare class ASTDeserializer {
    deserializeEnrichedGraph(serialized: SerializedEnrichGraph): EnrichGraph;
    private deserializeNodeType;
    private deserializeRelationshipType;
}
