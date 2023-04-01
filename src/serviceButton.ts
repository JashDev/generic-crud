import {UserCrudService} from "./services/user.crud.service";
import {ActiveStatusEnum} from "./base/http.types";

export function serviceButton(element: HTMLButtonElement) {
    element.addEventListener('click',async () => {
        const userService = new UserCrudService('http://localhost:3000/api/v1/users');
        const readAllUser = await userService.readAll({activeStatus: ActiveStatusEnum.active, query: 'asdfasdf', filters: [{rolId: 1, otroId: 'asdfasdf'}]})
        const createUser = await userService.create({age: 0, email: "", name: "", numberOfChildren: 0})
        const readUser = await userService.read(1, {})
        const updateUser = await userService.update(1, {age: 0, email: "", name: "", password: ""})
        const deleteUser = await userService.delete(1)

        console.log({readAllUser, createUser, readUser, updateUser, deleteUser})
    })
}
