import { CodeGraph, GetGraphsResponseData } from "../../gen/NestJs/kodus/ast/v2";
import { SerializedCodeGraph, SerializedGetGraphsResponseData } from "./graph";
export declare class ASTSerializer {
    static serializeCodeGraph(graph: CodeGraph): SerializedCodeGraph;
    static serializeGetGraphsResponseData(data: GetGraphsResponseData): SerializedGetGraphsResponseData;
}
