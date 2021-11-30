import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface ISubCat {
    subImage: string;
    subDescription: string;
    status: boolean;
    position: number;
    _id: string;
    catId: number;
    subId: number;
    subName: string;
    __v: number;
}

const SubCategory = (props: any) => {
    const data: ISubCat = props.data;
    const [subCategory, setSubCategory] = useState<ISubCat[]>([] as ISubCat[]);
    
    useEffect( () => {
        axios.get('http://apolis-grocery.herokuapp.com/api/subcategory/3')
        .then(response => {
            setSubCategory(response.data.data)
        })
        .catch((error) => console.error(error))
    })

    return(
        <ul className="list-group">
            {
                subCategory.map((item: ISubCat) => <li className="list-group-item">{ item.subName }</li>)
            }
        </ul>
    )       
}
export default SubCategory;