import React from 'react'

const StayCard = ({ photo, superHost, apartmentType, beds, rating, title }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col space-y-5">
        {/* Image */}

        <div>
          <img
            src={photo}
            alt={title}
            className="w-full h-80 rounded-3xl object-center md:object-cover"
            loading="lazy"
            onLoad={() => (
              <img
                src={''}
                alt={''}
                className="w-full h-80 rounded-3xl bg-slate-400/50"
              />
            )}
          />
        </div>

        {/* Place Details */}
        <div className="flex justify-between">
          {/* IF Super Host */}
          {superHost && (
            <span className="inline-block border-2 px-2 py-1 text-xs font-montseratte font-bold border-black rounded-xl">
              super host
            </span>
          )}

          {/* Apartment type and beds */}
          <div>
            <span className="inline-block font-montseratte font-medium text-sm text-[#828282]">
              {apartmentType}. {beds}
            </span>
          </div>

          {/* Ratings */}
          <div className="flex space-x-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>

        {/* Place Title */}
        <div>
          <h1 className="text-black font-montseratte text-lg font-semibold">
            {title}
          </h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StayCard
