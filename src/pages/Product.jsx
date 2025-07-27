import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const productData = {
  protein: {
    name: "Plant-Based Protein",
    images: [
      "/images/protein-1.png",
      "/images/protein-2.png",
      "/images/protein-lifestyle-1.png",
      "/images/protein-lifestyle-2.png",
      "/images/protein-packaging.png"
    ],
    flavors: ["Vanilla", "Chocolate", "Peanut Butter", "Unflavored"],
    bestUsedFor: ["PROTEIN", "GUT HEALTH"],
    reviews: 1234,
    cupsSold: "+200M Cups of Four Sigmatic Sold"
  },
  coffee: {
    name: "Mushroom Coffee",
    images: [
      "/images/coffee-1.png",
      "/images/coffee-2.png",
      "/images/coffee-lifestyle-1.png",
      "/images/coffee-lifestyle-2.png",
      "/images/coffee-packaging.png"
    ],
    flavors: ["Classic", "Dark Roast", "Hazelnut", "Unflavored"],
    bestUsedFor: [ "ENERGY", "FOCUS"],
    reviews: 567,
    cupsSold: "+100M Cups of Mushroom Coffee Sold"
  }
  // Add more products as needed
};

const Product = () => {
  const { productName } = useParams();

  // Fallback to 'protein' if route param is missing or not found
  const product = productData[productName?.toLowerCase()] || productData['protein'];

  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [packSize, setPackSize] = useState("2 Pack");
  // const [subscribe, setSubscribe] = useState(true);

  return (
    <>
    <Navbar/>
    <div className="bg-[#F8F4EC] text-[#4B2E1B] px-24 pt-40 pb-10 font-[one]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE - IMAGES */}
        <div className="w-full h-full rounded-2xl overflow-hidden">
        <img className="w-full h-full object-cover" src="https://us.foursigmatic.com/cdn/shop/files/vanilla-protein-benefits.jpg?crop=center&height=626&v=1735898320&width=626" />
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div>
          <h1 className="text-[3vw] mb-2">{product.name} – {selectedFlavor}</h1>
          <p className="text-[1vw] text-orange-600 mb-1">★★★★★ <span className='text-[#59432D]'>{product.reviews} reviews</span></p>

          <p className="font-[second] font-black mt-4 mb-1">BEST USED FOR:</p>
          <div className="text-[.9vw] font-[second] font-black flex gap-4 mb-4">
            {product.bestUsedFor.map((item, idx) => (
              <div className='flex items-center gap-1'>
              <span className='w-4 h-4 rounded-full bg-[#59432D] text-[#F8F4EC] flex items-center justify-center'>✓</span> <span key={idx}>{item}</span>
              </div>
            ))}
          </div>

          {/* Flavor Picker */}
          <div className="mb-4">
            <p className="mb-2 text-[1vw] font-[second] font-black">Pick your product: <span className='text-orange-600 font-[one] text-[.9vw]'>{selectedFlavor}</span></p>
            <div className="flex gap-2">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor}
                  className={`border px-4 py-2 rounded-xl text-sm transition ${
                    selectedFlavor === flavor
                      ? "bg-[#4B2E1B] text-white"
                      : "bg-white text-[#4B2E1B] border-[#4B2E1B]"
                  }`}
                  onClick={() => setSelectedFlavor(flavor)}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Pack Size */}
          <div className="mb-4">
            <p className="mb-2 font-black font-[second] text-[1vw]">Pack Size: <span className='text-orange-600 text-[.9vw] font-[one]'>{packSize}</span></p>
            <div className="flex gap-2">
              {["1 Pack", "2 Pack", "4 Pack"].map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 rounded-xl text-sm transition ${
                    packSize === size
                      ? "bg-[#4B2E1B] text-white"
                      : "bg-white text-[#4B2E1B] border-[#4B2E1B]"
                  }`}
                  onClick={() => setPackSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Bidding Section */}
          <div className="bg-[#FFF2D6] border border-orange-200 p-6 rounded-xl mb-6">
            <h2 className="font-[second] font-black text-[1.2vw] mb-2">Place Your Bid</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                // handle bid submission here
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="bidAmount" className="font-[second] text-[.95vw] font-semibold">
                  Bid Amount
                </label>
                <input
                  id="bidAmount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter your bid"
                  className="border border-[#4B2E1B] rounded-lg px-4 py-2 text-[1vw] focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="bidderName" className="font-[second] text-[.95vw] font-semibold">
                  Your Name
                </label>
                <input
                  id="bidderName"
                  type="text"
                  placeholder="Enter your name"
                  className="border border-[#4B2E1B] rounded-lg px-4 py-2 text-[1vw] focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6A00] text-white font-bold py-3 rounded-xl text-lg mt-2 hover:bg-[#e65c00] transition"
              >
                Place Bid
              </button>
            </form>
            <div className="mt-4">
              <p className="font-[second] font-semibold text-[.95vw] mb-1">Current Highest Bid:</p>
              <div className="flex items-center gap-2">
                <span className="text-[1.1vw] font-bold text-[#4B2E1B]">$123.45</span>
                <span className="text-xs text-[#6C5A4E]">(by John Doe)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#6C5A4E] flex flex-wrap gap-4">
            <span>{product.cupsSold}</span>
            <span>60-day Money Back Guarantee</span>
            <span>Ships within 24 Hours Mon-Fri</span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Product