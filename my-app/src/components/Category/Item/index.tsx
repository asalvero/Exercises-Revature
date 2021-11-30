import React from 'react'

interface ICategory {
    catImage: string;
    catDescription: string;
    position: number;
    status: boolean;
    _id: string;
    catId: number;
    catName: string;
    slug: string;
    __v: number;
}

const Item = (props: any) => {
    const data: ICategory = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
            <img src={'http://rjtmobile.com/grocery/images/'+ props.data.catImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.catName}</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    )
}
export default Item;