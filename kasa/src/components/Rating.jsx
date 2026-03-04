function Rating({ value }) {
    const rating = Number(value)

    return (
        <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => {
                const starNumber = index + 1
                const isActive = starNumber <= rating

                return (
                    <i
                        key={starNumber}
                        className={`fa-solid fa-star ${isActive ? "star-active" : "star-inactive"}`}
                        aria-hidden="true"
                    />
                )
            })}
        </div>
    )
}

export default Rating