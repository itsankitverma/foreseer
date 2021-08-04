import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="w-screen bg-gray-100 h-20 flex justify-around items-center">
               
                    <p className="text-3xl">Foreseer</p>
                    <div className="flex gap-10">
                        <p>About Us</p>
                        <p>Why Foreseer</p>
                        <p>Talks</p>
                        <p>Community</p>
                    </div>
                    <button className="border-4 border-yellow-600 border-opacity-100 p-1 text-yellow-600 w-36 h-12 hover:bg-yellow-600 hover:text-white transition delay-150 duration-300 ease-in-out">
                        Contact Us
                    </button>
            
            </div>
        </div>
    )
}

export default Navbar
