export interface RecordView {
    recordId: RecordId,
    operationType: string,
    username: string,
    userBalance: number,
    operationResponse: string,
    date: Date
}

export interface RecordId {
    value: number;
}