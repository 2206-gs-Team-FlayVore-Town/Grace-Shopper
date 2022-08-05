import React from "react";
import { connect } from "react-redux";
import { editingProduct, deletingProduct } from "../store";

class ProductAdmin extends React.Component {
   constructor () {
    super()
    this.stateChange = this.stateChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  stateChange () {
    let product = this.props.product
    this.setState({
        name: product.name,
        price: product.price,
        quantityPerItem: product.quantityPerItem,
        specification: product.specification,
        rating: product.rating,
        company: product.company,
        stock: product.stock
      })
  }
  
  handleEdit (event) {
    event.preventDefault()
    if (this.state.name === ''){
      this.setState({missingFields: 'You must include a name for the product'})
    }
    else{
      this.props.edit(this.state, this.props.product.id)
      this.props.refresh()
    }
  }
  
  handleDelete (event) {
    event.preventDefault()
    this.props.delete(this.props.product.id)
    this.setState({
        name: "",
        price: "",
        quantityPerItem: "",
        specification: "",
        rating: "",
        company: "",
        stock: "",
      })
    this.props.refresh()
  }
  
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render () {
    if (this.state){
        return (
          <div>
            <form onSubmit={this.handleEdit}>
               <label htmlFor='name'>Name:</label>
               <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
               <label htmlFor='price'>Price:</label>
               <input type='text' name='price' value={this.state.price} onChange={this.handleChange}/>
               <label htmlFor='quantityPerItem'>QuantityPerItem:</label>
               <input type='text' name='quantityPerItem' value={this.state.quantityPerItem} onChange={this.handleChange}/>
               <label htmlFor='specifications'>Specifications:</label>
               <input type='text' name='specifications' value={this.state.specifications} onChange={this.handleChange}/>
               <label htmlFor='rating'>Rating:</label>
               <input type='text' name='rating' value={this.state.rating} onChange={this.handleChange}/>
               <label htmlFor='company'>Company:</label>
               <input type='text' name='company' value={this.state.company} onChange={this.handleChange}/>
               <label htmlFor='stock'>Stock:</label>
               <input type='text' name='stock' value={this.state.stock} onChange={this.handleChange}/>
               <button type='submit'>Submit</button>
            </form>
            <button onClick={this.handleDelete}>Delete {this.state.name}</button>
            <p>{this.state.missingFields}</p>
          </div>
        )
    }
    else if (this.props){
      this.stateChange()
    }
    return <div></div>
  }
}

const mapDispatch = (dispatch) => ({
  edit: (product,id) => dispatch(editingProduct(product,id)),
  delete: (id) => dispatch(deletingProduct(id))
});

export default connect(null, mapDispatch)(ProductAdmin);
