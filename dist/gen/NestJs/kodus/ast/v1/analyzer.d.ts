import { Observable } from "rxjs";
export declare enum PlatformType {
    PLATFORM_TYPE_UNSPECIFIED = 0,
    PLATFORM_TYPE_GITHUB = 1,
    PLATFORM_TYPE_GITLAB = 2,
    PLATFORM_TYPE_JIRA = 3,
    PLATFORM_TYPE_SLACK = 4,
    PLATFORM_TYPE_NOTION = 5,
    PLATFORM_TYPE_MSTEAMS = 6,
    PLATFORM_TYPE_DISCORD = 7,
    PLATFORM_TYPE_AZURE_BOARDS = 8,
    PLATFORM_TYPE_AZURE_REPOS = 9,
    PLATFORM_TYPE_KODUS_WEB = 10,
    PLATFORM_TYPE_BITBUCKET = 11,
    UNRECOGNIZED = -1
}
export declare enum AuthMode {
    AUTH_MODE_UNSPECIFIED = 0,
    AUTH_MODE_OAUTH = 1,
    AUTH_MODE_TOKEN = 2,
    UNRECOGNIZED = -1
}
export interface BuildEnrichedGraphRequest {
    baseRepo: CloneRepositoryRequest | undefined;
    headRepo: CloneRepositoryRequest | undefined;
}
export interface BuildEnrichedGraphResponse {
    chunk: string;
}
export interface Auth {
    type?: AuthMode | undefined;
    token?: string | undefined;
    org?: string | undefined;
}
export interface CloneRepositoryRequest {
    url: string;
    provider: PlatformType;
    branch?: string | undefined;
    auth?: Auth | undefined;
    organizationId: string;
    repositoryId: string;
    repositoryName: string;
}
export interface DeleteRepositoryRequest {
    organizationId: string;
    repositoryId: string;
    repositoryName: string;
    branchName: string;
}
export interface ASTAnalyzerServiceClient {
    buildEnrichedGraph(request: BuildEnrichedGraphRequest): Observable<BuildEnrichedGraphResponse>;
}
export interface ASTAnalyzerServiceController {
    buildEnrichedGraph(request: BuildEnrichedGraphRequest): Observable<BuildEnrichedGraphResponse>;
}
export declare function ASTAnalyzerServiceControllerMethods(): (constructor: Function) => void;
export declare const AST_ANALYZER_SERVICE_NAME = "ASTAnalyzerService";
