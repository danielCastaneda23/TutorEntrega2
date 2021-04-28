import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = () => {
    let min = 1;
    let max = 10;

    const [isAdd, setAdd] = useState(min)

    function addition() {
        const newValue = isAdd + 1;

        if (newValue <= max) {
            setAdd(newValue);
        }
    }

    function substraction() {
        const newValue = isAdd - 1;

        if (newValue >= min) {
            setAdd(newValue);
        }
    }

    function onAdd() {
        alert("Compraste " + isAdd + " items")
    }
    return (
        <>
            <div className="itm-count-container">
                <p>Camisa Tiger</p>
                <button
                    className="itm-count-btn"
                    onClick={substraction}
                >
                    -
            </button>
                <span>{isAdd}</span>
                <button
                    className="itm-count-btn"
                    onClick={addition}
                >
                    +
            </button>
                <div>
                    <button onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )

}

export default ItemCount;