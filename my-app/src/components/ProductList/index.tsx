import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://apolis-grocery.herokuapp.com/api/products/cat/3')
            .then(response => {
                setProducts(response.data.data)
            })
            .catch((error) => console.error(error))
    })

    return (
        <div className="row">
            {
                products.map(product => <Product data={product}/>)
            }
        </div>
    )
}
export default ProductList;