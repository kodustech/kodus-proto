import { Timestamp } from "../gen/NestJs/google/protobuf/timestamp";

export function SerializeDateToTimeStamp(date: Date): Timestamp {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1_000_000;

    return {
        seconds,
        nanos,
    };
}

export function DeserializeTimeStampToDate(timestamp: Timestamp): Date {
    const milliseconds =
        timestamp.seconds * 1000 + Math.floor(timestamp.nanos / 1_000_000);
    return new Date(milliseconds);
}
