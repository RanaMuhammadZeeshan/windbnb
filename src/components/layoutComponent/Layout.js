import React from 'react'
import Navbar from '../headerComponent/Navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="min-h-screen max-w-full bg-white rounded-lg">
        <header>
          <Navbar />
        </header>

        <main className="mt-9 mx-3">{children}</main>

        <footer className="flex justify-center items-center mt-28">
          <h2 className="text-[#828282] text-sm font-medium font-montseratte text-center">
            created by Rana Muhamnmad Zeeshan - devChallenges.io
          </h2>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
