import React from 'react'
import './style.css'

const Item = (props) => {
    return (
        <div class="col-sm-3">
            <div class="card">
            <img src={'http://rjtmobile.com/grocery/images/'+ props.data.catImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.data.catName}</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary btn-block">Buy Now</a>
                </div>
            </div>
        </div>
    )
}
export default Item;