export interface Record {
    id: number,
    operationId: number,
    userId: number,
    amount: number,
    userBalance: number,
    operationResponse: string,
    date: Date,
    deletedAt?: Date
}