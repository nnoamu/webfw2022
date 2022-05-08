export interface Concert {
    id: string
    artist : string,
    city: string,
    location: {
        city: string,
        place: string
    },
    date: number,
    gateOpen: number,
    price: number,
    quantity: number
}