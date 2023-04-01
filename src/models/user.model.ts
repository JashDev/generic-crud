import BaseModel from "../base/base.model";
import {Role, RoleClass} from "./role.model";

export interface User  {
    id: number
    name: string
    age: number
    email: string
    password: string
    numberDocument: string
    otro: string
    roles: Role[]
}

export class UserClass extends BaseModel implements User {
    constructor(
        public id: number = 0,
        public name: string = '',
        public age: number = 0,
        public email: string = '',
        public password: string = '',
        public numberDocument: string = '',
        public otro: string = '',
        public roles: RoleClass[] = []
    ) {
        super()
    }

    static fromDto(dto: any) {
        return BaseModel.fromJson(dto, new UserClass());
    }

    static fromArray(array: any[]) {
        return array.map((dto) => {
            const user = UserClass.fromDto(dto);
            if (dto.roles?.length) user.roles = RoleClass.fromArray(dto.roles);
            return user;
        });
    }
}

export type CreateUser = {
    name: string
    age: number
    email: string
    numberOfChildren: number
}

export type UpdateUser = {
    name: string
    age: number
    email: string
    password: string
}

