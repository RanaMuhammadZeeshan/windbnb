import React from 'react'
import StayCard from '../components/stayCard/StayCard'

import data from '../data/stays.json'

const HomePaage = () => {
  return (
    <React.Fragment>
      {/* Heading Section */}
      <section id="heading">
        <div className="flex justify-between">
          <h1 className="text-black text-lg font-bold font-montseratte">
            Stays in Finland
          </h1>

          <h3 className="text-black font-montseratte font-medium">
            {data.length > 10 ? `${data.length}+` : data.length} stays
          </h3>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((stay, index) => (
            <StayCard
              key={index}
              photo={stay.photo}
              superHost={stay.superHost}
              beds={stay.beds}
              rating={stay.rating}
              title={stay.title}
              apartmentType={stay.type}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default HomePaage
