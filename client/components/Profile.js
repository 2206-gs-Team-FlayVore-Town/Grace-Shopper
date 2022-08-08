import React from "react";
import { connect } from "react-redux";
import { editUser, deleteUser } from "../store";

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
      this.props.edit(this.state)
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
               <label htmlFor='firstName'>First Name:</label>
               <input type='text' name='irstName' value={this.state.firstName} onChange={this.handleChange}/>
               <label htmlFor='lastName'>Last Name:</label>
               <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
               <label htmlFor='streetAddress'>Street Address:</label>
               <input type='text' name='streetAddress' value={this.state.streetAddress} onChange={this.handleChange}/>
               <label htmlFor='city'>City:</label>
               <input type='text' name='city' value={this.state.city} onChange={this.handleChange}/>
               <label htmlFor='zipCode'>Posta/Zip Code:</label>
               <input type='text' name='zipCode' value={this.state.zipCode} onChange={this.handleChange}/>
               <label htmlFor='country'>Country:</label>
               <input type='text' name='country' value={this.state.country} onChange={this.handleChange}/>
               <label htmlFor='emailAdress'>Email Address:</label>
               <input type='text' name='emailAdress' value={this.state.emailAdress} onChange={this.handleChange}/>
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

const mapState = (state) => ({
  user: state.user
});

const mapDispatch = (dispatch) => ({
  edit: (user) => dispatch(editUser(user)),
  delete: (id) => dispatch(deleteUser(id))
});

export default connect(mapState, mapDispatch)(ProductAdmin);
