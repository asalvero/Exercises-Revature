import React from 'react'

const Product = (props: any) => {
    return (
        <div className="col-sm-4">
            <div className="card">
            <img src={'http://rjtmobile.com/grocery/images/' + props.data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.description}</h5>
                    <h6>{'\u20B9'+props.data.price} <del>{'\u20B9'+props.data.mrp}</del></h6>
                    <p className="card-text">{props.data.unit}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Product;