export interface Point {
    row: number;
    column: number;
}
export interface Range {
    startIndex: number;
    endIndex: number;
    startPosition: Point | undefined;
    endPosition: Point | undefined;
}
