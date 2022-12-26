interface User extends Omit<Address, 'phone'> {
    id: number | string,
    firstName: string,
    lastName: string,

}

interface Address extends Country {
    city: string,
    phone: string & number
}

interface Country {
    country?: string
}

export type { User, Address }