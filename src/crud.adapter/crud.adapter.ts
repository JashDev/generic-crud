import {ActiveStatus, ActiveStatusEnum, CrudParams} from "../base/http.types";

/**
 * Clase abstracta para definir los métodos de un servicio CRUD
 * @param T Tipo de objeto genérico
 * @param C Dto para crear un objeto genérico
 * @param U Dto para actualizar un objeto genérico
 */
export abstract class CrudAdapter<T, C, U>{
    // constructor(
    //     private baseUrl?: string,
    // private axiosInstance?: AxiosInstance
    // ) {
    //     console.log(`baseUrl ${baseUrl}`)
    // }

    async readAll({page = 1, activeStatus = ActiveStatusEnum.active, query, filters }: CrudParams): Promise<{page: number, total: number, data: T[], activeStatus: ActiveStatus}> {
        console.log(`query to search ${query}`)
        filters?.forEach((filter) => {
            console.log(filter)
        })
        const received = [
            {
                id: 1,
                name: 'Jhojhan',
                age: 30,
                email: 'lafe2@fuluj.com',
                password: '123456',
                afasdf: 'asdfasdf',
                number_document: '123456789',
                otro: 'asdfasdf'
            },
            {
                id: 2,
                name: 'Antony',
                age: 30,
                email: 'lafe3@fuluj.com',
                password: '1234sdfasdf56',
                afasdf: 'asdfasdf',
                number_document: '123456aaa789',
                otro: 'asdfasdf',
                roles: [
                    {
                        id: 1,
                        name: 'Admin'
                    }
                ]
            }
        ]
        const response = {
            data: received,
            page,
            total: 2
        }

        return {
            data: this.adaptArray(response.data),
            page: response.page,
            total: response.total,
            activeStatus
        }
    }

    async create(object: C): Promise<T> {
        const objetReceived = {
            id: 1,
            name: 'Jhojhan',
            age: 30,
            email: 'lafe2@fuluj.com',
            password: '123456',
            afasdf: 'asdfasdf',
            number_document: '123456789',
            otro: 'asdfasdf',
            ...object
        }
        const response = {
            data: objetReceived,
        }
        return this.adapt(response.data)
    }

    async read(id: number,  {activeStatus = ActiveStatusEnum.active}: CrudParams): Promise<T> {
        console.log(`active status read ${activeStatus}`)
        const received =                 {
            id,
            name: 'Jhojhan',
            age: 30,
            email: 'lafe2@fuluj.com',
            password: '123456',
            afasdf: 'asdfasdf',
            number_document: '123456789',
            otro: 'asdfasdf'
        }
        const response = {
            data: received,
        }
        return this.adapt(response.data)
    }

    async update(id: number, object: U): Promise<T> {
        const received =                 {
            id,
            name: 'Jhojhan',
            age: 30,
            email: 'lafe2@fuluj.com',
            password: '123456',
            afasdf: 'asdfasdf',
            number_document: '123456789',
            otro: 'asdfasdf',
            ...object
        }
        const response = {
            data: received,
        }
        return this.adapt(response.data)
    }

    async delete(id: number): Promise<T> {
        const received =                 {
            id,
            name: 'Jhojhan',
            age: 30,
            email: 'lafe2@fuluj.com',
            password: '123456',
            afasdf: 'asdfasdf',
            number_document: '123456789',
            otro: 'asdfasdf'
        }
        const response = {
            data: received,
        }
        return this.adapt(response.data)
    }

    abstract adapt(apiObject: any): T; // Método abstracto para adaptar la respuesta de la API a la interfaz de objeto genérico

    abstract adaptArray(apiObject: any[]): T[]; // Método abstracto para adaptar la respuesta de la API a la interfaz de objeto genérico
}
