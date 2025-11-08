import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ product, onClose, onAddToCart }) => {
  const [finalPrice, setFinalPrice] = useState(parseFloat(product.price));
  const [size, setSize] = useState(0);
  const [additives, setAdditives] = useState([]);

  useEffect(() => {
    let additivesPrice = additives.length * 0.5;
    setFinalPrice(parseFloat(product.price) + size + additivesPrice);
  }, [size, additives, product.price]);

  const toggleAdditive = (add) => {
    setAdditives((prev) =>
      prev.includes(add) ? prev.filter((a) => a !== add) : [...prev, add]
    );
  };

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-button" onClick={onClose}>
          ✖
        </button>
        <h2 id="modalTitle">{product.name}</h2>
        <p id="modalDesc">{product.description}</p>
        <img id="modalImg" src={`./images/${product.category}-1.png`} alt="" />
        <p className="modal__price">Price: ${finalPrice.toFixed(2)}</p>

        <div className="modal__controls">
          <h4>Choose size:</h4>
          <div className="modal__sizes">
            <label>
              <input
                type="radio"
                name="size"
                onChange={() => setSize(0)}
                defaultChecked
              />
              Small
            </label>
            <label>
              <input type="radio" name="size" onChange={() => setSize(0.5)} />
              Medium (+$0.5)
            </label>
            <label>
              <input type="radio" name="size" onChange={() => setSize(1)} />
              Large (+$1)
            </label>
          </div>

          <h4>Additives:</h4>
          <div className="modal__additives">
            {["Milk", "Syrup", "Cream"].map((add) => (
              <label key={add}>
                <input
                  type="checkbox"
                  onChange={() => toggleAdditive(add)}
                  checked={additives.includes(add)}
                />
                {add} (+$0.5)
              </label>
            ))}
          </div>
        </div>

        <button
          className="modal__add-button"
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
