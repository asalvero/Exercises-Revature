import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SubCategory = () => {
    const [subCategory, setSubCategory] = useState([]);
    
    useEffect(async () => {
        axios.get('http://apolis-grocery.herokuapp.com/api/subcategory/3')
        .then(response => {
            setSubCategory(response.data.data)
        })
        .catch((error) => console.error(error))
    })

    return(
        <ul class="list-group">
            {
                subCategory.map(item => <li className="list-group-item">{ item.subName }</li>)
            }
        </ul>
    )       
}
export default SubCategory;