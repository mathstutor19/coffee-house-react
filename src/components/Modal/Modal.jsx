import React, { useState } from "react";
import closeButton from "../..//images/icons/button-close.svg";
import "./Modal.css";

const Modal = ({ image, product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedAdditives, setSelectedAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(product?.price || 7.0);

  const handleSizeChange = (e) => {
    const priceAddition = parseFloat(e.target.dataset.price || 0);
    setSelectedSize(e.target.value);
    setTotalPrice((product?.price || 7.0) + priceAddition);
  };

  const handleAdditiveChange = (additive) => {
    setSelectedAdditives((prev) =>
      prev.includes(additive)
        ? prev.filter((item) => item !== additive)
        : [...prev, additive]
    );
  };

  const handleAddToCart = () => {
    const item = {
      ...product,
      size: selectedSize,
      additives: selectedAdditives,
      price: totalPrice,
    };
    onAddToCart(item);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img id="modalImg" src={image} alt={image} className="modal-img" />

        <div>
          <h2 className="modalTitle">{product?.name || "Irish coffee"}</h2>
          <p className="modalDesc">
            {product?.description ||
              "Fragrant black coffee with Jameson Irish whiskey and whipped milk"}
          </p>

          <div className="modal-section">
            <h3 className="model-size-title">Size:</h3>
            <div className="model-size-wrapper">
              <label className="model-size-label">
                <input
                  type="radio"
                  name="size"
                  value="S"
                  data-price="0"
                  checked={selectedSize === "S"}
                  onChange={handleSizeChange}
                />
                <span>S</span> 200 ml
              </label>
              <label className="model-size-label">
                <input
                  type="radio"
                  name="size"
                  value="M"
                  data-price="0.5"
                  checked={selectedSize === "M"}
                  onChange={handleSizeChange}
                />
                <span>M</span> 300 ml
              </label>
              <label className="model-size-label">
                <input
                  type="radio"
                  name="size"
                  value="L"
                  data-price="1"
                  checked={selectedSize === "L"}
                  onChange={handleSizeChange}
                />
                <span>L</span> 400 ml
              </label>
            </div>
          </div>
          <div className="modal-section">
            <img
              className="modal__close-button"
              src={closeButton}
              alt="close"
              onClick={onClose}
            />
            <h3 className="model-size-title">Additives</h3>
            <div className="model-size-wrapper">
              {["Sugar", "Cinnamon", "Syrup"].map((add, index) => (
                <label key={add} className="model-size-label">
                  <input
                    type="checkbox"
                    checked={selectedAdditives.includes(add)}
                    onChange={() => handleAdditiveChange(add)}
                  />
                  <span>{index + 1}</span> {add}
                </label>
              ))}
            </div>
          </div>

          {/* --- Total and info --- */}
          <p className="modal-total">Total Price: ${totalPrice}</p>
          <p className="modal-note">
            The cost is not final. Download our mobile app to see the final
            price and place your order. Earn loyalty points and enjoy your
            favorite coffee with up to 20% discount.
          </p>

          <button className="close" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
