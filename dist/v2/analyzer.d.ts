import { Observable } from "rxjs";
export declare enum ProtoPlatformType {
    PROTO_PLATFORM_TYPE_UNSPECIFIED = 0,
    PROTO_PLATFORM_TYPE_GITHUB = 1,
    PROTO_PLATFORM_TYPE_GITLAB = 2,
    PROTO_PLATFORM_TYPE_JIRA = 3,
    PROTO_PLATFORM_TYPE_SLACK = 4,
    PROTO_PLATFORM_TYPE_NOTION = 5,
    PROTO_PLATFORM_TYPE_MSTEAMS = 6,
    PROTO_PLATFORM_TYPE_DISCORD = 7,
    PROTO_PLATFORM_TYPE_AZURE_BOARDS = 8,
    PROTO_PLATFORM_TYPE_AZURE_REPOS = 9,
    PROTO_PLATFORM_TYPE_KODUS_WEB = 10,
    PROTO_PLATFORM_TYPE_BITBUCKET = 11,
    UNRECOGNIZED = -1
}
export declare enum ProtoAuthMode {
    PROTO_AUTH_MODE_UNSPECIFIED = 0,
    PROTO_AUTH_MODE_OAUTH = 1,
    PROTO_AUTH_MODE_TOKEN = 2,
    UNRECOGNIZED = -1
}
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
    data: string;
}
export interface GetDiffRequest {
    baseRepo: RepositoryData | undefined;
    headRepo: RepositoryData | undefined;
}
export interface GetDiffResponse {
    data: string;
}
export interface Auth {
    type?: ProtoAuthMode | undefined;
    token?: string | undefined;
    org?: string | undefined;
}
export interface RepositoryData {
    url: string;
    provider: ProtoPlatformType;
    branch?: string | undefined;
    auth?: Auth | undefined;
    organizationId: string;
    repositoryId: string;
    repositoryName: string;
}
export interface ASTAnalyzerServiceClient {
    initializeRepository(request: InitializeRepositoryRequest): Observable<InitializeRepositoryResponse>;
    deleteRepository(request: DeleteRepositoryRequest): Observable<DeleteRepositoryResponse>;
    getGraphs(request: GetGraphsRequest): Observable<GetGraphsResponse>;
    getDiff(request: GetDiffRequest): Observable<GetDiffResponse>;
}
export interface ASTAnalyzerServiceController {
    initializeRepository(request: InitializeRepositoryRequest): Promise<InitializeRepositoryResponse> | Observable<InitializeRepositoryResponse> | InitializeRepositoryResponse;
    deleteRepository(request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> | Observable<DeleteRepositoryResponse> | DeleteRepositoryResponse;
    getGraphs(request: GetGraphsRequest): Observable<GetGraphsResponse>;
    getDiff(request: GetDiffRequest): Observable<GetDiffResponse>;
}
export declare function ASTAnalyzerServiceControllerMethods(): (constructor: Function) => void;
export declare const AST_ANALYZER_SERVICE_NAME = "ASTAnalyzerService";
