import React, { useState } from "react";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div style={styles.container}>
      <img src={images[current]} alt={`slide-${current}`} style={styles.image} />

      <button onClick={goPrev} style={{ ...styles.button, left: 10 }}>
        &#8592; 
        {/* arrow design               */}
      </button>
      <button onClick={goNext} style={{ ...styles.button, right: 10 }}>
        &#8594; 
        {/* arrow design */}
      </button>

      <div style={styles.counter}>
        {current + 1} / {total}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "90%",
    maxWidth: "700px",
    height: "500px",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(243, 4, 179, 0.2)",
    backgroundColor: "lavender",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(230, 13, 194, 0.5)",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "24px",
    borderRadius: "5px",
    zIndex: 1,
  },
  counter: {
    position: "absolute",
    bottom: 10,
    right: 10,
    background: "rgba(192, 81, 181, 0.6)",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "14px",
  },
};

export default Slideshow;