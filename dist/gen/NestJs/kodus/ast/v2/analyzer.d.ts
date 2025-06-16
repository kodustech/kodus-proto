import { Observable } from "rxjs";
import { EnrichedGraph } from "./enriched";
import { CodeGraph } from "./graph";
import { RepositoryData } from "./repo";
/** Request for initializing a repository pair */
export interface InitializeRepositoryRequest {
    /** The base repository to initialize */
    baseRepo: RepositoryData | undefined;
    /** The head repository to initialize */
    headRepo: RepositoryData | undefined;
}
/** Response for initializing a repository pair */
export interface InitializeRepositoryResponse {
}
/** Request for deleting a repository pair */
export interface DeleteRepositoryRequest {
    /** The base repository to delete */
    baseRepo: RepositoryData | undefined;
    /** The head repository to delete */
    headRepo: RepositoryData | undefined;
}
/** Response for deleting a repository pair */
export interface DeleteRepositoryResponse {
}
/** Request for getting graphs for a repository pair */
export interface GetGraphsRequest {
    baseRepo: RepositoryData | undefined;
    headRepo: RepositoryData | undefined;
}
/** Response for getting graphs for a repository pair */
export interface GetGraphsResponse {
    /** Serialized graph data */
    data: Uint8Array;
    /** Indicates if this is the last chunk of data */
    isLast: boolean;
}
/** Deserialized response data for GetGraphs */
export interface GetGraphsResponseData {
    /** Graph for the base repository */
    baseGraph: GetGraphsResponseData_Graph | undefined;
    /** Graph for the head repository */
    headGraph: GetGraphsResponseData_Graph | undefined;
    /** Enriched graph for the head repository */
    enrichHeadGraph: EnrichedGraph | undefined;
}
export interface GetGraphsResponseData_Graph {
    graph: CodeGraph | undefined;
    dir: string;
}
/** Request for getting relevant file content based on a diff */
export interface GetContentFromDiffRequest {
    /** The head repository to compare against */
    headRepo: RepositoryData | undefined;
    /** The base repository to compare against */
    baseRepo: RepositoryData | undefined;
    /** Diff in unified diff format */
    diff: string;
    /** Relative path to the file in the head repository */
    filePath: string;
}
/** Response for getting relevant file content based on a diff */
export interface GetContentFromDiffResponse {
    /** Serialized diff data */
    data: Uint8Array;
    /** Indicates if this is the last chunk of data */
    isLast: boolean;
}
/** Generic streamed response for large data transfers */
export interface StreamedResponse {
    /** Serialized data for the response */
    data: Uint8Array;
    /** Indicates if this is the last chunk of data */
    isLast: boolean;
}
/** The ASTAnalyzerService provides methods for analyzing code repositories */
export interface ASTAnalyzerServiceClient {
    /** Initializes a repository pair for analysis */
    initializeRepository(request: InitializeRepositoryRequest): Observable<InitializeRepositoryResponse>;
    /** Deletes a repository pair from analysis */
    deleteRepository(request: DeleteRepositoryRequest): Observable<DeleteRepositoryResponse>;
    /** Retrieves graphs for an initialized repository pair */
    getGraphs(request: GetGraphsRequest): Observable<GetGraphsResponse>;
    /** Retrieves relevant file content based on a diff */
    getContentFromDiff(request: GetContentFromDiffRequest): Observable<GetContentFromDiffResponse>;
}
/** The ASTAnalyzerService provides methods for analyzing code repositories */
export interface ASTAnalyzerServiceController {
    /** Initializes a repository pair for analysis */
    initializeRepository(request: InitializeRepositoryRequest): Promise<InitializeRepositoryResponse> | Observable<InitializeRepositoryResponse> | InitializeRepositoryResponse;
    /** Deletes a repository pair from analysis */
    deleteRepository(request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> | Observable<DeleteRepositoryResponse> | DeleteRepositoryResponse;
    /** Retrieves graphs for an initialized repository pair */
    getGraphs(request: GetGraphsRequest): Observable<GetGraphsResponse>;
    /** Retrieves relevant file content based on a diff */
    getContentFromDiff(request: GetContentFromDiffRequest): Observable<GetContentFromDiffResponse>;
}
export declare function ASTAnalyzerServiceControllerMethods(): (constructor: Function) => void;
export declare const AST_ANALYZER_SERVICE_NAME = "ASTAnalyzerService";
