import React, { useState } from 'react';

const itemsinmyCart = [
    { key: "1", value: "book1", qty: "2" },
    { key: "2", value: "book2", qty: "2" },
    { key: "3", value: "book3", qty: "2" },
    { key: "4", value: "book4", qty: "2" }
]

const AddToCart = () => {
    const [cart, setCart] = useState([]);
    const [displaycartitems, setdisplaycartitems] = useState(false);

    const displayCart = () => {
        setdisplaycartitems(true);
    }

    const additemtocart = (item) => {
        if (item.qty !== 0) {
            item.qty = item.qty - 1;
            setCart([...cart, { value: item.value, qty: item.qty }]);
        }
    }
    return (
        <div className="addToCart-div" >
            <ul>
                {
                    itemsinmyCart.map((item) =>
                        <div key={item.key} style={{ display: "flex" }}>
                            <li>{item.value}</li>
                            <button onClick={() => additemtocart(item)} disabled={item.qty === 0 ? true : false}>Add</button>
                        </div>)
                }
            </ul>
            <button onClick={displayCart}><i className="fas fa-cart-plus"></i>{cart.length}</button>
            <div>
                {
                    displaycartitems === true ?
                        (
                            <ul>
                                {
                                    cart && cart.map((item, index) => {
                                        return <li key={index}>{item.value}</li>
                                    })
                                }
                            </ul>
                        ) : (<div> </div>)
                }
            </div>
        </div>
    )
}

export default AddToCart;
