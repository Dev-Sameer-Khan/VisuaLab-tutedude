import React from 'react'
import SellerNav from '../SellerNav'
import Shiped from './Shiped'

const Bid = () => {
  return (
    <>
    <SellerNav/>
    <div className="w-full bg-[#FDF9F2] min-h-screen p-6 md:p-10 rounded-xl text-[#59432D]">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-[1.5vw] max-[1025px]:text-[2.5vw] max-[599px]:text-[4vw]">Auction</h2>
        <span className="text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">Home</span>
      </div>

      {/* Top Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[1.2vw] max-[1025px]:text-[2.2vw] max-[599px]:text-[3.5vw]">Item Name:</span>
          <input
            value="Tomato's"
            disabled
            className="bg-[#E8DED1] px-4 py-1 rounded-full text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
          />
          <input
            value="50"
            disabled
            className="bg-[#E8DED1] px-4 py-1 rounded-full w-20 text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
          />
          <span className="text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">kg/units</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[1.2vw] max-[1025px]:text-[2.2vw] max-[599px]:text-[3.5vw]">Status:</span>
          <span className="bg-[#E8DED1] px-4 py-1 rounded-full text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">Live</span>
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          <span className="ml-4 text-[1.2vw] max-[1025px]:text-[2.2vw] max-[599px]:text-[3.5vw]">Ends In:</span>
          <input
            value="12"
            disabled
            className="bg-[#E8DED1] px-4 py-1 rounded-full w-16 text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]"
          />
          <span className="text-[1.2vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">min</span>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl overflow-hidden border">
        {/* Header Row */}
        <div className="grid grid-cols-5 bg-[#D5C6AF] p-4 text-[1.1vw] font-semibold max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw]">
          <div>Item Details</div>
          <div>Base</div>
          <div>Quantity</div>
          <div>Auto-Price</div>
          <div className="text-right">Live Bids</div>
        </div>

        {/* Item Row */}
        <div className="grid grid-cols-5 items-center p-4 bg-white text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[3.5vw] border-t">
          {/* Image & Chat */}
          <div className="flex gap-2 items-center">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="item"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="relative">
              <div className="absolute -top-1 -left-2 w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center border-2 border-white">A</div>
            </div>
          </div>

          {/* Base Price */}
          <div>₹12/kg</div>

          {/* Quantity */}
          <div>50 Kg</div>

          {/* Auto-Price */}
          <div>ON</div>

          {/* Live Bids */}
          <div className="text-right space-y-1">
            <p>
              Ramesh: ₹14.50/kg <span className="text-green-600">✔️</span>
            </p>
            <p>SitaFoods: ₹15.00/kg <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-1"></span></p>
            <p>LocalMart: ₹15.75/kg <span className="inline-block w-3 h-3 bg-green-500 rounded-full ml-1"></span></p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8 flex-wrap gap-4">
        <button className="bg-[#59432D] text-white px-6 py-2 rounded-full text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw]">
          End Auction Early
        </button>
        <button className="bg-[#F8981D] text-white px-6 py-2 rounded-full text-[1.1vw] max-[1025px]:text-[2vw] max-[599px]:text-[4vw]">
          Accept Highest Bid
        </button>
      </div>
    </div>
    </>
  )
}

export default Bid