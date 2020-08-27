import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/courses';
import './CourseName.css';
import Item from '../Item/Item';
import Total from '../Total/Total';

const CourseName = () => {
 
const first15 = fakeData.slice(0,15);
const [data, setData] = useState(first15);
const [cart, setCart] = useState([]); 

const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart); 
}

    return (
       
        <div className="course-container">
           <div>
                <h1 className="university">University Of Toronto</h1>
            </div>
            <div className="item-container">
                
                {
                data.map(datas => <Item 
                    handleAddCourse = {handleAddCourse}
                    item={datas}
                    ></Item>)  
                }
                
            </div>
            <div className="cart-container">
                {/* <h3>This is cart</h3>
                <h5>Course Added: {cart.length}</h5> */}
                <Total cart={cart}></Total>
            </div>
        </div>
    );
};

export default CourseName;