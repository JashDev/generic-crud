import {CrudAdapter} from "../crud.adapter/crud.adapter";
import {CreateUser, UpdateUser, UserClass} from "../models/user.model";

export class UserCrudService extends CrudAdapter<UserClass, CreateUser, UpdateUser> {

    adapt(apiObject: any): UserClass {
        return UserClass.fromDto(apiObject)
    }

    adaptArray(apiObject: any[]): UserClass[] {
        return UserClass.fromArray(apiObject)
    }
}
