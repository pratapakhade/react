
import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Product extends React.Component {
    state = {
        products: [],

    };




    // componentDidUpdate() {
    //     axios
    //     .put(
    //         `http://localhost:8080/onlinesportshopee/products/updateproduct/{productId}/${this.props.match.params.productId}`,
    //         this.state.products
    //       )
    //       .then((res) => {
    //         console.log(res.data);
    //         alert(
    //           "Updated products " + this.state.products.productName + " successfully!"
    //         );
    //         this.props.history.push("/products");
    //       })
    //       .catch((err) => console.log(err));
    //     console.log("componentDidUpdate.....");
    // }


    componentWillUnmount() {
        console.log("componentwillUpdate.......");
    }

    componentDidMount() {
        axios
         .get("http://localhost:8080/onlinesportshopee/products/getallproduct")
         .then(res=>{console.log(res);
            this.setState({products:res.data});
         })
         .catch((err)=>console.log(err));
       
    }
                   
    handleDelete = (productId) => {
        axios
            .delete(`http://localhost:8080/onlinesportshopee/products/removeproduct/product/${productId}`)
            .then(res => {
                console.log(res);
                const products = this.state.products.filter((p) => p.id != productId);
                this.setState({ products: products });
                alert(res.data.productName + "deleted successfully!");
            })
            .catch((err) => console.log(err));
    }

    render() {
        console.log(this.state.products);

        return (<div className="" style={{  
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div><h1>Product Details</h1></div>
            <table className="table table-dark table-hover  ">
                <thead>
                    <tr>
                        <td>id</td>
                        <td> productName</td>
                        <td>category</td>
                        <td>description</td>
                        <td>brand</td>
                        <td>colour</td>
                        <td>size</td>
                        <td>mrp</td>
                        <td>priceAfterDiscount</td>
                        <td>inStock</td>
                        <td>product image</td>
                        <td>Action</td>
                        

                    </tr>
                </thead>
                <tbody>

                    {this.state.products.map((p) => (
                        <tr key ={p.id}>
                            <td>{p.id}</td>
                            <td>{p.productName}</td>
                            <td>{p.category}</td>
                            <td>{p.description}</td>
                            <td>{p.brand}</td>
                            <td>{p.colour}</td>
                            <td>{p.size}</td>
                            <td>{p.mrp}</td>
                            <td>{p.priceAfterDiscount}</td>
                            <td>{p.inStock}</td>
                           {/* <td> <img src={p.image} alt="sport image"/></td> */}
                           {/* <td> <img src={`http://localhost:8080/${p.image}`} width = "50px" alt={p.image} /></td> */}
                             <td> <img src={p.image}  width = "100px" alt={p.image}/></td>

                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(p.id)}>Delete</button>
                              <Link to={`/updateproduct/${p.id}`} className="btn btn-success">  Update</Link></td>
                        </tr>
                    ))

                    }


                </tbody>
            </table>

        </div>
        );
    }
}

export default Product;