import { addProduct, toggleFollowingProgress, addProductSuccess} from "./content-reducer"
import {API} from '../api/api'
jest.mock('../api/api')
const APImock = API as jest.Mocked<typeof API>
const resultCode = 0

APImock.addProduct.mockReturnValue(Promise.resolve(resultCode))

test("Thunk addProduct - Success", async () => {

    const thunk = addProduct("1")
    const dispatchMock = jest.fn()

    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true,"1"))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleFollowingProgress(false,"1"))
})
