import React, { useEffect, useRef, useState } from "react";
import arrowLeft from "../../images/icons/arrow-left.svg";
import arrowRight from "../../images/icons/arrow-right.svg";
import coffeeSlider1 from "../../images/coffee-slider-1.png";
import coffeeSlider2 from "../../images/coffee-slider-2.png";
import coffeeSlider3 from "../../images/coffee-slider-3.png";

const images = [coffeeSlider1, coffeeSlider2, coffeeSlider3];
import "./Favorite.css";
import { useDarkMode } from "../../context/DarkModeContext";

const Favorite = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(null);
  const autoSlideRef = useRef(null);
  const slideInterval = 5000; // 5 soniya
  const { darkMode } = useDarkMode();
  // --- Fetch slides from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          "http://coffee-shop-be.eu-central-1.elasticbeanstalk.com/products/favorites"
        );
        if (!res.ok) throw new Error("Network error");
        const result = await res.json();
        setSlides(result.data || []);
      } catch (err) {
        console.error("❌ Error:", err);
        setError("Something went wrong. Please, refresh the page.");
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  // --- Slide switching
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  // --- Progress bar + auto-switch
  useEffect(() => {
    if (slides.length === 0 || isPaused) return;

    const startTime = Date.now();
    progressRef.current && clearInterval(progressRef.current);

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / slideInterval) * 100, 100);
      setProgress(percentage);
      if (percentage >= 100) nextSlide();
    }, 50);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, slides, isPaused]);

  // --- Hover pause / resume
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // --- Loading / Error states
  if (loading)
    return (
      <div id="loader" className="favorite__loader">
        Loading...
      </div>
    );
  if (error)
    return (
      <div id="error" className="favorite__error">
        {error}
      </div>
    );
  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="favorite"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="favorite__title">
        Choose your <span>favorite</span> coffee
      </h2>

      <div className="favorite__sliders">
        <div className="favorite__slide__center">
          <img
            className="favorite__slide__image"
            src={images[currentIndex]}
            alt={currentSlide.name}
          />
          <h3 className="farovite__slide__title">{currentSlide.name}</h3>
          <p className="farovite__slide__text">{currentSlide.description}</p>
          <strong className="farovite__slide__price">
            ${currentSlide.price}
          </strong>
        </div>

        <button
          className="favorite__icon__wrapper favorite__icon__left"
          onClick={prevSlide}
        >
          <img
            className={`favorite__icon-image ${darkMode ? "dark" : ""}`}
            src={arrowLeft}
            alt="arrow-left"
          />
        </button>

        <button
          className="favorite__icon__wrapper favorite__icon__right"
          onClick={nextSlide}
        >
          <img className={`favorite__icon-image ${darkMode ? "dark" : ""}`} src={arrowRight} alt="arrow-right" />
        </button>
      </div>

      <ul className="favorite__slide__points">
        {slides.map((_, i) => (
          <li
            key={i}
            className={`favorite__slide__point ${
              i === currentIndex ? "favorite__slide__point-active" : ""
            }`}
            style={{
              width: i === currentIndex ? `${(progress / 100) * 40}px` : "40px",
              background: i === currentIndex ? "#665f55" : "#c1b6ad",
              transition: "width 0.05s linear",
            }}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default Favorite;
