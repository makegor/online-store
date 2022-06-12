import productReducer, { actionsProduct } from "./product-reducer";

it('after deleting length of messages should be decrement', () => {

    let action = actionsProduct.deleteReviewsAC(1);
    let state = {
        reviews: [
            { id: 1, message: "cardigan grosse maille ajourée très joli au porté", rating: 5 },
            { id: 2, message: "vraiment très joli.", rating: 3},
        ]
    };

    let newState = productReducer(state, action)

    expect(newState.reviews.length).toBe(1);
});