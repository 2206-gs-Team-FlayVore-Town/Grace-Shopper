import React from "react";
import { connect } from "react-redux";

import { addingProduct } from "../store";

class AddProduct extends React.Component {
   constructor () {
    super()
    this.state = {
      name: '',
      price: '',
      quantityPerItem: '',
      specification: '',
      rating: '',
      company: '',
      stock: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleSubmit (event) {
    event.preventDefault()
    if (this.state.name === ''){
      this.setState({missingFields: 'You must include a name for the product'})
    }
    else{
      let product = {}
      let state = this.state
      for (let key in state){
        if (state[key] !== ''){
          product[key] = state[key]
        }
      }
      this.props.add(product)
      this.setState({
        name: '',
          price: '',
          quantityPerItem: '',
          specification: '',
          rating: '',
          company: '',
          stock: ''
      })
      this.props.refresh()
    }
  }
  
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render () {
    return (
      <div className="title">
        <form onSubmit={this.handleSubmit}>
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
        <p>{this.state.missingFields}</p>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  add: (product) => dispatch(addingProduct(product))
});

export default connect(null, mapDispatch)(AddProduct);
