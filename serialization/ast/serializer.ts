import {
    CodeGraph,
    GetGraphsResponseData,
} from "../../gen/NestJs/kodus/ast/v2";
import { SerializedCodeGraph, SerializedGetGraphsResponseData } from "./graph";

export class ASTSerializer {
    static serializeCodeGraph(graph: CodeGraph): SerializedCodeGraph {
        const files = Object.fromEntries(
            Array.from(graph.files.entries()).map(([key, value]) => [
                key,
                {
                    ...value,
                    nodes: Object.fromEntries(value.nodes.entries()),
                },
            ])
        );

        const functions = Object.fromEntries(graph.functions.entries());
        const types = Object.fromEntries(graph.types.entries());

        return {
            files,
            functions,
            types,
        };
    }

    static serializeGetGraphsResponseData(
        data: GetGraphsResponseData
    ): SerializedGetGraphsResponseData {
        const baseGraph = {
            graph: this.serializeCodeGraph(data.baseGraph.graph),
            dir: data.baseGraph.dir,
        };

        const headGraph = {
            graph: this.serializeCodeGraph(data.headGraph.graph),
            dir: data.headGraph.dir,
        };

        return {
            baseGraph,
            headGraph,
            enrichHeadGraph: data.enrichHeadGraph,
        };
    }
}
