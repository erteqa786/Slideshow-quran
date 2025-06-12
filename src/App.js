
import React from "react";
import Slideshow from "./Slideshow";

// Importing local images
import image1 from "./assets/images/image1.jpeg"
import image2 from "./assets/images/image2.jpeg"
import image3 from "./assets/images/image3.jpeg"
import image4 from "./assets/images/image4.jpeg"
import image5 from "./assets/images/image5.jpeg"
import image6 from "./assets/images/image6.jpeg"
import image7 from "./assets/images/image7.jpeg"
import image8 from "./assets/images/image8.jpeg"
import image9 from "./assets/images/image9.jpeg"
import image10 from "./assets/images/image10.jpeg"
import image11 from "./assets/images/image11.jpeg"
import image12 from "./assets/images/image12.jpeg"
import image13 from "./assets/images/image13.jpeg"
import image14 from "./assets/images/image14.jpeg"
import image15 from "./assets/images/image15.jpeg"
import image16 from "./assets/images/image16.jpeg"
import image17 from "./assets/images/image17.jpeg"
import image18 from "./assets/images/image18.jpeg"
import image19 from "./assets/images/image19.jpeg"
import image20 from "./assets/images/image20.jpeg"

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20 ];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Slideshow Quran</h1>
      <Slideshow images={images} />
    </div>
  );
}

export default App;