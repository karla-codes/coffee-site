import React from "react"

const Header = () => {
  return (
    <header>
      <svg
        width="79"
        height="79"
        viewBox="0 0 79 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="39.5" cy="39.5" r="39.5" fill="#FDE87D" />
        <ellipse cx="26.5" cy="31.5" rx="4.5" ry="7.5" fill="#252525" />
        <ellipse cx="52.5" cy="31.5" rx="4.5" ry="7.5" fill="#252525" />
        <path
          d="M55 48.5C55 52.6109 53.367 56.5533 50.4602 59.4602C47.5533 62.367 43.6109 64 39.5 64C35.3891 64 31.4467 62.367 28.5398 59.4602C25.633 56.5533 24 52.6109 24 48.5L39.5 48.5H55Z"
          fill="#252525"
        />
      </svg>

      <nav>
        <ul>
          <li>Coffee Drinks</li>
          <li>Brewing Methods</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
