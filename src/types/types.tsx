export interface IGeo {
    lat: number,
    lng: number
}

export interface IAddress {
    street?: string,
    suite?: string,
    city: string,
    zipcode?: string,
    geo?: IGeo
}

export interface ICompany {
    name: string,
    catchPhrase?: string,
    bs?: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website?: string,
    company: ICompany
}

export interface IToDo {
    userId?: number,
    id: number,
    title: string,
    completed: boolean
}