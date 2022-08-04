import axios from 'axios'

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

const _getAllProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
    products
})

export const fetchProducts = () => async(dispatch) => {
    const { data } = await axios.get('/api/products')
    dispatch(_getAllProducts(data))
}

const initialState = []

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}

export default productsReducer;