export interface GrpcError {
    message: string;
    code: number;
}
export interface GrpcResponse {
    message: string;
    success: boolean;
    errors: GrpcError[];
}
