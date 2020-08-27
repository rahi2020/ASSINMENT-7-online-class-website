import React from 'react';
import './Item.css';

const Item = (props) => {
    // console.log(props);
    const {name, price} = props.item;
    return (
        <div className="show">
            <h4>{name}</h4>
            <br/>
            <p>${price}</p>
            <button 
                className="btn btn-success"
                onClick={() => props.handleAddCourse(props.item)}
                >Enroll Now
            </button>
        </div>
    );
};

export default Item;