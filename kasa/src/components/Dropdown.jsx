import { useState } from "react"

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? "dropdown is-open" : "dropdown"}>
      <button
        type="button"
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="dropdown-icon">
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </button>

      <div className="dropdown-content">
        {children}
      </div>
    </div>
  )
}

export default Dropdown