// import "./styles.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Payment() {
    const [price, setPrice] = useState(0);
    const [opcion, setOpcion] = useState(5)


    useEffect(() => {
        if (opcion !== "other") {
            setPrice(opcion);
        }
    }, [opcion]);

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
        return actions.order.capture(console.log("The payment has been successful"));
    };

    const handleChange = (e) => {
        setPrice(e.target.value);
    }
    const handleCambio = (e) => {
        setOpcion(e.target.value)
    };

    return (
        <div>
            <div className="Payment">
                <h1 className="money">The price is {price} $</h1>

                <select value={opcion} onChange={handleCambio}>
                    <option value="5">Five Dollars</option>
                    <option value="10">Ten Dollars</option>
                    <option value="20">Twenty Dollars</option>
                    <option value="other">Another amount</option>
                </select>

                {opcion === "other" && (
                    <input type="text" onChange={handleChange} value={price} style={{ margin: 20 }}></input>
                )}
                <br />


                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>

            <Link to="/" className="back-home">
                <button className="info-buton">Back home</button>
            </Link>

        </div>
    );
};

