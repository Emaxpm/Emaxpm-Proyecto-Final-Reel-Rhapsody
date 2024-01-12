// import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Payment() {
    const [price, setPrice] = useState(0);
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: price
                    }
                }
            ]
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    function handleChange(e) {
        setPrice(e.target.value);
    }
    return (
        <div className="container">
            <div className="Payment">
                <h1>The price is {price}</h1>
                <input type="text" onChange={handleChange} value={price}></input>
                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
        </div>
    );
};

