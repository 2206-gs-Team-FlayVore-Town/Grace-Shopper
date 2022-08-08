import axios from 'axios'

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

export const editingProduct = (product, id) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    await axios.put("/api/products/" + id, {
      token, product
    });
  }
}

export const deletingProduct = (id) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    await axios.delete("/api/products/" + id, {
      headers: {
        authorization: token,
      }
    });
  }
}

export const addingProduct = (product) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    await axios.post("/api/products", {
      token, product
    });
  }
}