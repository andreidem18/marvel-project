export interface EndpointParams {
    offset?: number,
    limit?: number,
    name?: string,
    orderBy?: 'name' | 'modified',
    reset?: boolean
}
