import { SerializedCodeGraph, SerializedGetGraphsResponseData } from "./graph";
import { CodeGraph, GetGraphsResponseData } from "../../gen/NestJs/kodus/ast/v2";
export declare class ASTDeserializer {
    static deserializeCodeGraph(serialized: SerializedCodeGraph): CodeGraph;
    static deserializeGetGraphsResponseData(serialized: SerializedGetGraphsResponseData): GetGraphsResponseData;
}
