import React, { useState } from "react";

function App() {
    const imageURLs = [
        "https://cdn.pixabay.com/photo/2023/01/07/07/16/houses-7702757_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/01/06/13/33/palace-7701252_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/01/10/21/31/trees-7710539_960_720.jpg",
        "https://cdn.pixabay.com/photo/2023/01/14/10/18/buildings-7717853_960_720.jpg"
    ]
    const [image, setImage] = useState(0);

    function nextImage() {
        setImage((prevValue) => (prevValue + 1) % imageURLs.length);
    };

    function prevImage() {
        setImage((prevValue) => (prevValue - 1) % imageURLs.length);
    };


    return (
        <div>
            <button className="round btn prev" onClick={prevImage}>&lt;</button>
            <div className="main">
                <img src={imageURLs[image]} className="main-image" alt="Landscape"></img>
            </div>
            <button className="round btn next" onClick={nextImage}>&gt;</button>
        </div>
    )
}

export default App