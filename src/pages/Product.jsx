import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const productData = {
  protein: {
    name: "Plant-Based Protein",
    images: [
      "/images/protein-1.png",
      "/images/protein-2.png",
      "/images/protein-lifestyle-1.png",
      "/images/protein-lifestyle-2.png",
      "/images/protein-packaging.png",
    ],
    flavors: ["Vanilla", "Chocolate", "Peanut Butter", "Unflavored"],
    bestUsedFor: ["PROTEIN", "GUT HEALTH"],
    reviews: 1234,
    cupsSold: "+200M Cups of Four Sigmatic Sold",
  },
  coffee: {
    name: "Mushroom Coffee",
    images: [
      "/images/coffee-1.png",
      "/images/coffee-2.png",
      "/images/coffee-lifestyle-1.png",
      "/images/coffee-lifestyle-2.png",
      "/images/coffee-packaging.png",
    ],
    flavors: ["Classic", "Dark Roast", "Hazelnut", "Unflavored"],
    bestUsedFor: ["ENERGY", "FOCUS"],
    reviews: 567,
    cupsSold: "+100M Cups of Mushroom Coffee Sold",
  },
  // Add more products as needed
};

const Product = () => {
  const { productName } = useParams();

  // Fallback to 'protein' if route param is missing or not found
  const product =
    productData[productName?.toLowerCase()] || productData["protein"];

  // const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [packSize, setPackSize] = useState("2 Pack");
  // const [subscribe, setSubscribe] = useState(true);

  return (
    <>
      <Navbar />
      <div className="bg-[#F8F4EC] text-[#4B2E1B] px-24 max-[1025px]:px-12 max-[599px]:px-4 pt-40 max-[599px]:pt-26 pb-10 font-[one]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-[599px]:gap-6">
          {/* LEFT SIDE - IMAGE */}
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://us.foursigmatic.com/cdn/shop/files/vanilla-protein-benefits.jpg?crop=center&height=626&v=1735898320&width=626"
              alt="product"
            />
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div>
            <h1 className="text-[3vw] max-[1025px]:text-[4vw] max-[599px]:text-[6vw] mb-2">
              {product.name}
            </h1>

            <p className="text-[1vw] max-[1025px]:text-[1.5vw] max-[599px]:text-[3.5vw] text-orange-600 mb-1">
              ★★★★★{" "}
              <span className="text-[#59432D]">{product.reviews} reviews</span>
            </p>

            <p className="font-[second] font-black mt-4 mb-1 text-[1vw] max-[1025px]:text-[1.3vw] max-[599px]:text-[3.5vw]">
              BEST USED FOR:
            </p>
            <div className="text-[.9vw] max-[1025px]:text-[1.2vw] max-[599px]:text-[3vw] font-[second] font-black flex flex-wrap gap-4 mb-4">
              {product.bestUsedFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-[#59432D] text-[#F8F4EC] flex items-center justify-center">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Pack Size */}
            <div className="mb-4">
              <p className="mb-2 font-black font-[second] text-[1vw] max-[1025px]:text-[1.3vw] max-[599px]:text-[3.5vw]">
                Pack Size:{" "}
                <span className="text-orange-600 text-[.9vw] max-[599px]:text-[3vw] font-[one]">
                  {packSize}
                </span>
              </p>
              <div className="flex gap-2 flex-wrap">
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
              <h2 className="font-[second] font-black text-[1.2vw] max-[1025px]:text-[1.6vw] max-[599px]:text-[4vw] mb-2">
                Place Your Bid
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                {/* Bid Amount */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="bidAmount"
                    className="font-[second] text-[.95vw] max-[599px]:text-[3.5vw] font-semibold"
                  >
                    Bid Amount
                  </label>
                  <input
                    id="bidAmount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Enter your bid"
                    className="border border-[#4B2E1B] rounded-lg px-4 py-2 text-[1vw] max-[599px]:text-[3.5vw] focus:outline-none focus:ring-2 focus:ring-orange-300"
                    required
                  />
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="bidderName"
                    className="font-[second] text-[.95vw] max-[599px]:text-[3.5vw] font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    id="bidderName"
                    type="text"
                    placeholder="Enter your name"
                    className="border border-[#4B2E1B] rounded-lg px-4 py-2 text-[1vw] max-[599px]:text-[3.5vw] focus:outline-none focus:ring-2 focus:ring-orange-300"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="bidderEmail"
                    className="font-[second] text-[.95vw] max-[599px]:text-[3.5vw] font-semibold"
                  >
                    Your Email
                  </label>
                  <input
                    id="bidderEmail"
                    type="email"
                    placeholder="Enter your email"
                    className="border border-[#4B2E1B] rounded-lg px-4 py-2 text-[1vw] max-[599px]:text-[3.5vw] focus:outline-none focus:ring-2 focus:ring-orange-300"
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

              {/* Bid Summary */}
              <div className="w-full flex flex-col md:flex-row justify-between mt-4 gap-4">
                {/* Highest */}
                <div>
                  <p className="font-[second] font-semibold text-[.95vw] max-[599px]:text-[3.5vw] mb-1">
                    Current Highest Bid:
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[1.1vw] max-[599px]:text-[4vw] font-bold text-[#4B2E1B]">
                      $123.45
                    </span>
                    <span className="text-xs max-[599px]:text-[2.5vw] text-[#6C5A4E]">
                      (by Abhisekh)
                    </span>
                  </div>
                </div>

                {/* Seller */}
                <div>
                  <p className="font-[second] font-semibold text-[.95vw] max-[599px]:text-[3.5vw] mb-1">
                    Sellers Bid:
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[1.1vw] max-[599px]:text-[4vw] font-bold text-[#4B2E1B]">
                      $123.45
                    </span>
                    <span className="text-xs max-[599px]:text-[2.5vw] text-[#6C5A4E]">
                      (by Sameer)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-4 text-sm text-[#6C5A4E] flex flex-wrap gap-4 text-[.8vw] max-[599px]:text-[3vw]">
              <span>{product.cupsSold}</span>
              <span>60-day Money Back Guarantee</span>
              <span>Ships within 24 Hours Mon-Fri</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
