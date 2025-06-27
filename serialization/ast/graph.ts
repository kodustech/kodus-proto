import {
    AnalysisNode,
    EnrichedGraph,
    FileAnalysis,
    FunctionAnalysis,
    TypeAnalysis,
} from "../../gen/NestJs/kodus/ast/v2";

export type SerializedCodeGraph = {
    files: Record<string, SerializedFileAnalysis>;
    functions: Record<string, FunctionAnalysis>;
    types: Record<string, TypeAnalysis>;
};

export type SerializedFileAnalysis = Omit<FileAnalysis, "nodes"> & {
    nodes: Record<number, AnalysisNode>;
};

export type SerializedGetGraphsResponseData = {
    baseGraph: {
        graph: SerializedCodeGraph;
        dir: string;
    };
    headGraph: {
        graph: SerializedCodeGraph;
        dir: string;
    };
    enrichHeadGraph: EnrichedGraph;
};
