"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTDeserializer = void 0;
class ASTDeserializer {
    static deserializeCodeGraph(serialized) {
        const files = new Map(Object.entries(serialized.files).map(([key, value]) => [
            key,
            {
                ...value,
                nodes: new Map(Object.entries(value.nodes).map(([nodeId, node]) => [
                    parseInt(nodeId, 10),
                    node,
                ])),
            },
        ]));
        const functions = new Map(Object.entries(serialized.functions));
        const types = new Map(Object.entries(serialized.types));
        return {
            files,
            functions,
            types,
        };
    }
    static deserializeGetGraphsResponseData(serialized) {
        const baseGraph = {
            graph: this.deserializeCodeGraph(serialized.baseGraph.graph),
            dir: serialized.baseGraph.dir,
        };
        const headGraph = {
            graph: this.deserializeCodeGraph(serialized.headGraph.graph),
            dir: serialized.headGraph.dir,
        };
        return {
            baseGraph,
            headGraph,
            enrichHeadGraph: serialized.enrichHeadGraph,
        };
    }
}
exports.ASTDeserializer = ASTDeserializer;
//# sourceMappingURL=deserializer.js.map