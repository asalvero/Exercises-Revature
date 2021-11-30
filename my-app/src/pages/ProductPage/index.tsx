import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/ProductList'
import SubCategory from '../../components/SubCategory'

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <SubCategory />
                    </div>
                    <div className="col-sm-9">
                        <ProductList />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage;