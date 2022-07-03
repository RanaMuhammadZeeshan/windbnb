import React from 'react'

const LocationList = ({ city, country, setEditSelectedLocation }) => {
  return (
    <button
      onClick={() => setEditSelectedLocation({ city: city, country: country })}
      className="flex justify-start  mt-9 space-x-4"
    >
      {/* Icon */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Location Name */}

      <div>
        <h2 className="font-mulish text-sm text-black">
          {city}, {country}
        </h2>
      </div>
    </button>
  )
}

export default LocationList
