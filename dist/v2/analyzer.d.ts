import { Observable } from "rxjs";
import { EnrichGraph } from "./enriched";
import { CodeGraph } from "./graph";
import { RepositoryData } from "./repo";
export interface InitializeRepositoryRequest {
    baseRepo: RepositoryData | undefined;
    headRepo: RepositoryData | undefined;
}
export interface InitializeRepositoryResponse {
}
export interface DeleteRepositoryRequest {
    baseRepo: RepositoryData | undefined;
    headRepo: RepositoryData | undefined;
}
export interface DeleteRepositoryResponse {
}
export interface GetGraphsRequest {
    baseRepo: RepositoryData | undefined;
    headRepo: RepositoryData | undefined;
}
export interface GetGraphsResponse {
    data: Uint8Array;
    isLast: boolean;
}
export interface GetGraphsResponseData {
    baseGraph: CodeGraph | undefined;
    headGraph: CodeGraph | undefined;
    enrichHeadGraph: EnrichGraph | undefined;
}
export interface GetContentFromDiffRequest {
    headRepo: RepositoryData | undefined;
    baseRepo: RepositoryData | undefined;
    diff: string;
    filePath: string;
}
export interface GetContentFromDiffResponse {
    data: Uint8Array;
    isLast: boolean;
}
export interface StreamedResponse {
    data: Uint8Array;
    isLast: boolean;
}
export interface ASTAnalyzerServiceClient {
    initializeRepository(request: InitializeRepositoryRequest): Observable<InitializeRepositoryResponse>;
    deleteRepository(request: DeleteRepositoryRequest): Observable<DeleteRepositoryResponse>;
    getGraphs(request: GetGraphsRequest): Observable<GetGraphsResponse>;
    getContentFromDiff(request: GetContentFromDiffRequest): Observable<GetContentFromDiffResponse>;
}
export interface ASTAnalyzerServiceController {
    initializeRepository(request: InitializeRepositoryRequest): Promise<InitializeRepositoryResponse> | Observable<InitializeRepositoryResponse> | InitializeRepositoryResponse;
    deleteRepository(request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> | Observable<DeleteRepositoryResponse> | DeleteRepositoryResponse;
    getGraphs(request: GetGraphsRequest): Observable<GetGraphsResponse>;
    getContentFromDiff(request: GetContentFromDiffRequest): Observable<GetContentFromDiffResponse>;
}
export declare function ASTAnalyzerServiceControllerMethods(): (constructor: Function) => void;
export declare const AST_ANALYZER_SERVICE_NAME = "ASTAnalyzerService";
