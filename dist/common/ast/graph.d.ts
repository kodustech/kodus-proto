import { Range } from "tree-sitter";
export declare enum QueryType {
    IMPORT_QUERY = "import",
    CLASS_QUERY = "class",
    INTERFACE_QUERY = "interface",
    ENUM_QUERY = "enum",
    TYPE_ALIAS_QUERY = "type",
    FUNCTION_QUERY = "function",
    FUNCTION_CALL_QUERY = "function_call",
    FUNCTION_PARAMETERS_QUERY = "function_parameters"
}
export declare enum ScopeType {
    FILE = "file",
    CLASS = "class",
    INTERFACE = "interface",
    ENUM = "enum",
    FUNCTION = "function",
    METHOD = "method"
}
export type Scope = {
    type: ScopeType;
    name: string;
};
export type Call = {
    nodeId: number;
    function: string;
    file: string;
    caller?: string;
};
export type AnalysisNode = {
    text: string;
    type: string;
    queryType: QueryType;
    id: number;
    children?: AnalysisNode[];
    position: Range;
};
/**
 * Analysis of a file with its definitions and calls
 */
export type FileAnalysis = {
    defines: string[];
    calls: Call[];
    imports: string[];
    className: string[];
    usedBy?: {
        files: string[];
        functions: string[];
        types: string[];
    };
    dependencies?: {
        direct: string[];
        transitive: string[];
    };
};
/**
 * Complete details of a defined function
 */
export type FunctionAnalysis = {
    nodeId: number;
    position: Range;
    file: string;
    name: string;
    params: string[];
    lines: number;
    returnType: string;
    calls: Call[];
    className?: string;
    startLine: number;
    endLine: number;
    functionHash: string;
    signatureHash: string;
    bodyNode?: any;
    fullText?: string;
};
/**
 * Details of a type (interface, type alias, or enum)
 */
export type TypeAnalysis = {
    nodeId: number;
    position: Range;
    file: string;
    type: QueryType;
    name: string;
    fields: Record<string, string>;
    implements: string[];
    implementedBy: string[];
    extends: string[];
    extendedBy: string[];
    scope: Scope[];
};
/**
 * Complete code graph
 */
export type CodeGraph = {
    files: Map<string, FileAnalysis>;
    functions: Map<string, FunctionAnalysis>;
    types: Map<string, TypeAnalysis>;
    analysisNodes: Map<number, AnalysisNode>;
};
