export enum ActiveStatusEnum {
    active = 'active',
    inactive = 'inactive',
    all = 'all'
}
export type ActiveStatus = ActiveStatusEnum.active | ActiveStatusEnum.inactive | ActiveStatusEnum.all

export type CrudParams = {
    page?: number
    activeStatus?: ActiveStatus,
    query?: string,
    filters?: Record<string, unknown>[]
}
