import contentReducer, { actionsContent, ContentState } from "./content-reducer"

let state: ContentState

beforeEach(() => {
    state = {
        content: [
            {
                id: "1",
                title: "Purple down jacket",
                price: 1650,
                summ: 1,
                added: true,
                sex: "woman",
                description: {
                    color: "Purple",
                    print: "Plain",
                    style: "Everyday",
                    season: "Autumn / Winter",
                    material: "Polyester",
                },
                photo: "photo1"

            },
            {
                id: "2",
                title: "Beige blazer",
                price: 550,
                summ: 0,
                added: false,
                sex: "woman",
                description: {
                    color: "Beige",
                    print: "Plain",
                    style: "Everyday",
                    season: "Spring / Autumn",
                    material: "Cotton",
                },
                photo: "photo2"

            },
            {
                id: "3",
                title: "Gray knitted sweater",
                price: 240,
                summ: 2,
                added: true,
                sex: "man",
                description: {
                    color: "Gray",
                    print: "Plain",
                    style: "Everyday",
                    season: "Autumn / Winter",
                    material: "Wool",
                },
                photo: "photo3"

            }
        ],
        isFetching: true,
        followingInProgress: [],
        pageSize: 10,
        totalCount: 0,
        currentPage: 1
    }
})

test("Add - Success", () => {

    const newState = contentReducer(state, actionsContent.addProductSuccess("2"))

    expect(newState.content[1].added).toBeTruthy()
    expect(newState.content[1].summ).toBe(1)
})


test("Delete - Success", () => {

    const newState = contentReducer(state, actionsContent.deleteProductSuccess("3"))

    expect(newState.content[2].added).toBeFalsy()
    expect(newState.content[2].summ).toBe(0)
    expect(newState.content[0].added).toBeTruthy()
})

test("Add one product - Success", () => {

    const newState = contentReducer(state, actionsContent.plusSuccess("2"))

    expect(newState.content[1].summ).toBe(1)
    expect(newState.content[1].added).toBeTruthy()
})

test("Remove one product - Success", () => {

    const newState = contentReducer(state, actionsContent.minusSuccess("3"))

    expect(newState.content[2].summ).toBe(1)
    expect(newState.content[2].added).toBeTruthy()
})