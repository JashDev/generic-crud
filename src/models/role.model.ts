import BaseModel from "../base/base.model";

export interface Role {
    id: number
    name: string
}

export class RoleClass extends BaseModel implements Role {
    constructor(
        public id: number = 0,
        public name: string = ''
    ) {
        super()
    }

    static fromDto(dto: any) {
        const c = new RoleClass();
        return BaseModel.fromJson(dto, c);
    }

    static fromArray(array: any[]) {
        return array.map((dto) => RoleClass.fromDto(dto));
    }
}
