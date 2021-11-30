import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item';

const Category = () => {
    const [categories, setCategories] =  useState([])

    useEffect( () => {
        axios.get('https://apolis-grocery.herokuapp.com/api/category')
        .then(response => {
            setCategories(response.data.data);
        })
        .catch(error => {
            console.error(error);
        })
    });

    return(
        <div className="wrapper">
            <div className="row">
                {
                    categories.map(item => <Item data={ item }/>)
                }
            </div>
        </div>
    )
}
export default Category;