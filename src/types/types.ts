export type ProductType = {
    id: string
    title: string
    price: number
    summ: number
    added: boolean
    sex: string
    description: DescriptionType
    photo: string
}

export type DescriptionType = {
    color: string
    print: string
    style: string
    season: string
    material: string
}

export type ReviewsType = {
    id?: number
    review: string
    rating: number
}