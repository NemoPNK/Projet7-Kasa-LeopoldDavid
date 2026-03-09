import { useState } from "react"

function Carousel({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const MoreImage = pictures.length > 1

    function goPrev() {
        setCurrentIndex((prev) => (prev - 1 + pictures.length) % pictures.length)
    }

    function goNext() {
        setCurrentIndex((prev) => (prev + 1) % pictures.length)
    }

    return (
        <div className="carrousel">
            <img
                src={pictures[currentIndex]}
                alt={title}
            />

            {MoreImage && (
                <>
                    <button onClick={goPrev} className="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <button onClick={goNext} className="next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    <p>
                        {currentIndex + 1}/{pictures.length}
                    </p>
                </>
            )}
        </div>
    )
}

export default Carousel