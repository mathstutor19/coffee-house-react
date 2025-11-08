import React, { useState, useEffect, useCallback } from "react";
import "./Menu.css";
import Modal from "../../components/Modal/Modal.jsx";

import coffee from "../../images/icons/coffee.svg";
import tea from "../../images/icons/tea.svg";
import dessert from "../../images/icons/dessert.svg";

import coffee1 from "../../images/coffee-1.png";
import coffee2 from "../../images/coffee-2.png";
import coffee3 from "../../images/coffee-3.png";
import coffee4 from "../../images/coffee-4.png";
import coffee5 from "../../images/coffee-5.png";
import coffee6 from "../../images/coffee-6.png";
import coffee7 from "../../images/coffee-7.png";
import coffee8 from "../../images/coffee-8.png";

import tea1 from "../../images/tea-1.png";
import tea2 from "../../images/tea-2.png";
import tea3 from "../../images/tea-3.png";
import tea4 from "../../images/tea-4.png";
import tea5 from "../../images/tea-5.png";
import tea6 from "../../images/tea-6.png";
import tea7 from "../../images/tea-7.png";
import tea8 from "../../images/tea-8.png";

import dessert1 from "../../images/dessert-1.png";
import dessert2 from "../../images/dessert-2.png";
import dessert3 from "../../images/dessert-3.png";
import dessert4 from "../../images/dessert-4.png";
import dessert5 from "../../images/dessert-5.png";
import dessert6 from "../../images/dessert-6.png";
import dessert7 from "../../images/dessert-7.png";
import dessert8 from "../../images/dessert-8.png";

const icons = { coffee, tea, dessert };

const images = {
  coffee: [
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    coffee8,
  ],
  tea: [tea1, tea2, tea3, tea4, tea5, tea6, tea7, tea8],
  dessert: [
    dessert1,
    dessert2,
    dessert3,
    dessert4,
    dessert5,
    dessert6,
    dessert7,
    dessert8,
  ],
};

const getBaseCount = () =>
  typeof window !== "undefined" && window.innerWidth <= 768 ? 4 : 8;

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [baseCount, setBaseCount] = useState(getBaseCount()); // responsive base (4 or 8)
  const [visibleCount, setVisibleCount] = useState(getBaseCount()); // how many shown now
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Simulate logged in user
  const [isLoggedIn] = useState(false);

  // --- Load products ---
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "http://coffee-shop-be.eu-central-1.elasticbeanstalk.com/products"
      );
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setProducts(Array.isArray(data.data) ? data.data : []);
      setError(false);
    } catch (err) {
      console.error("❌ Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // --- handle resize: update baseCount (4 / 8).
  useEffect(() => {
    const onResize = () => {
      const newBase = getBaseCount();
      setBaseCount((prevBase) => {
        if (prevBase === newBase) return prevBase;
        // update visibleCount only if user hasn't expanded beyond the old base
        setVisibleCount((prevVisible) => {
          // if prevVisible equals old base or less -> adjust to new base
          // otherwise (user already pressed Load More) keep prevVisible
          return prevVisible <= prevBase ? newBase : prevVisible;
        });
        return newBase;
      });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // When category changes, reset visibleCount to baseCount
  useEffect(() => {
    setVisibleCount(baseCount);
  }, [activeCategory, baseCount]);

  // --- filtered products for active category ---
  const filtered = products
    .filter((p) => p.category === activeCategory)
    .slice(0, 8);

  // --- Load more shows all filtered items
  const handleLoadMore = () => {
    setVisibleCount(filtered.length);
  };

  // --- open modal ---
  const openModal = async (product) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://coffee-shop-be.eu-central-1.elasticbeanstalk.com/products/${product.id}`
      );
      if (!res.ok) throw new Error("Product not found");
      const data = await res.json();
      setSelectedProduct(data.data || data);
    } catch (err) {
      console.error("❌ Modal error:", err);
      alert("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  const addToCartLocal = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = cart.findIndex((p) => p.id === product.id);
    if (existingIndex !== -1) cart[existingIndex].quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const showLoadMore = filtered.length > visibleCount;

  return (
    <section className="offer">
      <div className="offer__header">
        <h2 className="offer__title">Choose your favorite coffee</h2>

        <ul className="offer__menus">
          {["coffee", "tea", "dessert"].map((item) => (
            <li
              key={item}
              className={`offer__menu ${
                activeCategory === item ? "offer__menu-active" : ""
              }`}
              onClick={() => {
                setActiveCategory(item);
                // reset visibleCount to baseCount handled by effect, but also set here to be immediate
                setVisibleCount(baseCount);
              }}
              data-category={item}
            >
              <div className="offer__menu__button">
                <div
                  className={`offer__menu__image ${
                    activeCategory === item ? "offer__menu__image-active" : ""
                  }`}
                >
                  <img src={icons[item]} alt={item} />
                </div>
                <span
                  className={
                    activeCategory === item
                      ? "offer__menu__text-active"
                      : "offer__menu__text"
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {loading && (
        <div className="loader">
          <div className="spinner" />
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <div className="error">
          ⚠️ Something went wrong. Please, refresh the page.
        </div>
      )}

      {!loading && !error && (
        <div className="offer___card__wrapper">
          {filtered.slice(0, visibleCount).map((item, id) => {
            const imgSrc = images[item.category]?.[id] || coffee1;
            return (
              <article
                key={item.id}
                className="offer__card"
                onClick={() => openModal(item)}
              >
                <img
                  className="offer__card__image"
                  src={imgSrc}
                  alt={item.name}
                />
                <div className="offer__card__about">
                  <h3 className="offer__card__title">{item.name}</h3>
                  <p className="offer__card__text">{item.description}</p>
                  {isLoggedIn && item.discountPrice ? (
                    <p className="offer__card__price">
                      <span className="old-price">${item.price}</span>{" "}
                      <strong>${item.discountPrice}</strong>
                    </p>
                  ) : (
                    <strong className="offer__card__price">
                      ${item.price}
                    </strong>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {!loading && !error && showLoadMore && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCartLocal}
        />
      )}
    </section>
  );
};

export default Menu;
