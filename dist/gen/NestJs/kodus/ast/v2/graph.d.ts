import { Range } from "./tree_sitter";
/** Enum for scope types */
export declare enum ScopeType {
    SCOPE_TYPE_UNSPECIFIED = 0,
    SCOPE_TYPE_FILE = 1,
    SCOPE_TYPE_CLASS = 2,
    SCOPE_TYPE_INTERFACE = 3,
    SCOPE_TYPE_ENUM = 4,
    SCOPE_TYPE_FUNCTION = 5,
    SCOPE_TYPE_METHOD = 6,
    UNRECOGNIZED = -1
}
/** Enum for type kind */
export declare enum QueryType {
    QUERY_TYPE_UNSPECIFIED = 0,
    QUERY_TYPE_IMPORT = 1,
    QUERY_TYPE_CLASS = 2,
    QUERY_TYPE_INTERFACE = 3,
    QUERY_TYPE_ENUM = 4,
    QUERY_TYPE_TYPE_ALIAS = 5,
    QUERY_TYPE_FUNCTION = 6,
    QUERY_TYPE_FUNCTION_CALL = 7,
    QUERY_TYPE_FUNCTION_PARAMETERS = 8,
    UNRECOGNIZED = -1
}
/** Represents a scope */
export interface Scope {
    type: ScopeType;
    name: string;
}
/** Represents a function call */
export interface Call {
    nodeId: number;
    function: string;
    file: string;
    caller?: string | undefined;
}
/** Represents file analysis information */
export interface FileAnalysis {
    defines: string[];
    calls: Call[];
    imports: string[];
    className: string[];
    usedBy?: FileAnalysis_UsedBy | undefined;
    dependencies?: FileAnalysis_Dependencies | undefined;
}
export interface FileAnalysis_UsedBy {
    files: string[];
    functions: string[];
    types: string[];
}
export interface FileAnalysis_Dependencies {
    direct: string[];
    transitive: string[];
}
/** Represents detailed function analysis */
export interface FunctionAnalysis {
    nodeId: number;
    position: Range | undefined;
    file: string;
    name: string;
    params: string[];
    lines: number;
    returnType: string;
    calls: Call[];
    className?: string | undefined;
    startLine: number;
    endLine: number;
    functionHash: string;
    signatureHash: string;
    fullText?: string | undefined;
}
/** Represents detailed type analysis */
export interface TypeAnalysis {
    nodeId: number;
    position: Range | undefined;
    file: string;
    type: QueryType;
    name: string;
    fields: {
        [key: string]: string;
    };
    implements: string[];
    implementedBy: string[];
    extends: string[];
    extendedBy: string[];
    scope: Scope[];
}
export interface TypeAnalysis_FieldsEntry {
    key: string;
    value: string;
}
/** Represents a node in the analysis tree */
export interface AnalysisNode {
    text: string;
    type: string;
    queryType: QueryType;
    id: number;
    children: AnalysisNode[];
    position: Range | undefined;
}
/** Represents the complete code graph */
export interface CodeGraph {
    files: {
        [key: string]: FileAnalysis;
    };
    functions: {
        [key: string]: FunctionAnalysis;
    };
    types: {
        [key: string]: TypeAnalysis;
    };
    analysisNodes: {
        [key: number]: AnalysisNode;
    };
}
export interface CodeGraph_FilesEntry {
    key: string;
    value: FileAnalysis | undefined;
}
export interface CodeGraph_FunctionsEntry {
    key: string;
    value: FunctionAnalysis | undefined;
}
export interface CodeGraph_TypesEntry {
    key: string;
    value: TypeAnalysis | undefined;
}
export interface CodeGraph_AnalysisNodesEntry {
    key: number;
    value: AnalysisNode | undefined;
}
