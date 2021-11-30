import React from 'react'

const Product = (props) => {
    return (
        <div class="col-sm-4">
            <div class="card">
            <img src={'http://rjtmobile.com/grocery/images/' + props.data.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.data.description}</h5>
                    <h6>{'\u20B9'+props.data.price} <del>{'\u20B9'+props.data.mrp}</del></h6>
                    <p class="card-text">{props.data.unit}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Product;