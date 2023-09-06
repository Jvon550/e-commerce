import React from 'react'
import './item.css'

interface ItemProps {
  img: string;
  name: string;
  price: string;
}

export default function Item({img, name, price}: ItemProps) {
    return (
        <div className="product">
          <div>
            <div className="product-img">
              <img src={img} alt="img" />
            </div>
            <div className="product-name">{name}</div>
            <div className="product-price">{price}</div>
            <div className='add-to-cart'>
                <a href="">add to cart</a>
            </div>
          </div>
        </div>
      );
}
