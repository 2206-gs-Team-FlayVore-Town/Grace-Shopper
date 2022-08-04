import axios from 'axios'
import fetchProducts from './multipleProducts'

const TOKEN = "token";

const EDIT_PRODUCT = "EDIT_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const ADD_PRODUCT = "ADD_PRODUCT"

const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    product
})

const deleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    product
})

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

export const editingProduct = (product) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    await axios.put("/api/products", {
      headers: {
        authorization: token,
      }, product
    });
    return dispatch(fetchProducts);
  }
}

export const deletingProduct = (product) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    await axios.delete("/api/products", {
      headers: {
        authorization: token,
      }, product
    });
    return dispatch(fetchProducts);
  }
}

export const addingProduct = (product) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    await axios.post("/api/products", {
      headers: {
        authorization: token,
      }, product
    });
    return dispatch(fetchProducts);
  }
}