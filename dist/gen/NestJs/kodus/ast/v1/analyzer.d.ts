import { Observable } from "rxjs";
import { GrpcError } from "../../common/v1/error";
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
export interface BuildEnrichedGraphRequest {
    baseRepo: CloneRepositoryRequest | undefined;
    headRepo: CloneRepositoryRequest | undefined;
}
export interface BuildEnrichedGraphResponse {
    data: string;
    success: boolean;
    errors: GrpcError[];
}
export interface Auth {
    type?: ProtoAuthMode | undefined;
    token?: string | undefined;
    org?: string | undefined;
}
export interface CloneRepositoryRequest {
    url: string;
    provider: ProtoPlatformType;
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
