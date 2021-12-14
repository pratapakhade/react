import React, { Component } from "react";
import axios from "axios";

class UpdateProduct extends React.Component {
    state = {
        products: {
            "brand": "",
            "category": "",
            "colour": "",
            "description": "",
            "id": 0,
            "image": "",
            "inStock": true,
            "mrp": 0,
            "priceAfterDiscount": 0,
            "productName": "",
            "size": ""

            // image:"",
           // expectedDelivery: " ",

        },
    };
    componentDidMount() {
        axios
            .get(
                `http://localhost:8080/onlinesportshopee/products/getproduct/${this.props.match.params.productId}`,
            )
            .then((res) => {
                console.log(res.data);
                this.setState({ products: res.data });
            })
            .catch((err) => console.log(err));
    }



    handleChange = (event) => {
        //logic to update state object
        // console.log(products);
        // console.log(event.target.name); // name of field - fullName
        // console.log(event.target.value); // value entered in the field -a
        // student[fullName] = a;
        // student.fullName = a;

        // copy state student object to local variable student
        const products = { ...this.state.products };

        // update local student object with values entered by user
        products[event.target.name] = event.target.value;

        // update state object using setState method
        this.setState({ products: products });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        axios
            .put(
                `http://localhost:8080/onlinesportshopee/products/updateproduct/${this.props.match.params.productId}`,
                this.state.products
            )
            .then((res) => {
                console.log(res.data);
                alert(
                    "Updated products " + this.state.products.productName + " successfully!"
                );
                this.props.history.push("/products");
            })
            .catch((err) => console.log(err));


    };

//     componentDidUpdate() {
//         axios
//             `http://localhost:8080/onlinesportshopee/products/updateproduct/{productId}/${this.props.match.params.productId}`,
           
//    )
//    .then((res) => {
//                 console.log(res.data);
//                 alert(
//                     "Updated products " + this.state.products.productName + " successfully!"
//                 );
//                 this.props.history.push("/products");
//             })
//             .catch((err) => console.log(err));

//     };



    render() {
        // Object Destructuring
        const { id, productName, category, description, brand, colour, size, mrp, priceAfterDiscount, inStock, image} = this.state.products;

        return (<div>
            <form
                // onSubmit={this.handleSubmit}
                className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
            >

                <div className="mb-3">
                 <label htmlFor="id" className="form-label">
                     id
                 </label>
                 <input
                     type="number"
                     className="form-control"
                     id="id"
                     aria-describedby="emailHelp"
                     value={id}
                     name="id"
                     onChange={this.handleChange}
                 />
             </div>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                        ProductName
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        aria-describedby="emailHelp"
                        value={productName}
                        name="productName"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        category
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        aria-describedby="emailHelp"
                        value={category}
                        name="category"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        name="description"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">
                        brand
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="brand"
                        aria-describedby="emailHelp"
                        value={brand}
                        name="brand"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="colour" className="form-label">
                        colour
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="colour"
                        aria-describedby="emailHelp"
                        value={colour}
                        name="colour"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">
                        size
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="size"
                        aria-describedby="emailHelp"
                        value={size}
                        name="size"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mrp" className="form-label">
                        mrp
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="mrp"
                        aria-describedby="emailHelp"
                        value={mrp}
                        name="mrp"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="priceAfterDiscount" className="form-label">
                        priceAfterDiscount
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="priceAfterDiscount"
                        aria-describedby="emailHelp"
                        value={priceAfterDiscount}
                        name="priceAfterDiscount"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inStock" className="form-label">
                        inStock
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inStock"
                        aria-describedby="emailHelp"
                        value={inStock}
                        name="inStock"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label" >
                        product image
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        aria-describedby="emailHelp"
                        value={image}
                        name="image"
                        accept=".jpg"
                        onChange={this.handleChange}
                    />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        );
    }

}


export default UpdateProduct;