import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import socket from '../config/socket.mjs';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const [product, setProduct] = useState(null);
  const [packSize, setPackSize] = useState("2 Pack");
  const [bidAmount, setBidAmount] = useState('');
  const [email, setEmail] = useState('');

  // Fetch product details and set up socket listeners
  useEffect(() => {
    if (productId) {
      socket.emit('joinRoom', productId);
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/v1/product/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product details.');
        const data = await response.json();
        setProduct(data?.data);
      } catch (error) {
        toast.error(error.message || 'Failed to load product.');
      }
    };

    fetchProduct();

    // Listen for bid updates
    socket.on("bidUpdate", (newBid) => {
      console.log(`New bid from ${newBid}`);
      toast.success(`New bid from ${newBid.name}: $${newBid.amount}`);

      // Update highest bid in product state
      setProduct((prev) => ({
        ...prev,
        highestBid: newBid.amount,
        bids: [...(prev?.bids || []), newBid],
      }));
    });

    socket.on("bidError", (message) => {
      toast.error(`Bid error: ${message}`);
    });

    // Cleanup
    return () => {
      socket.emit('leaveRoom', productId); // Leave the room on unmount
      socket.off("bidUpdate");
      socket.off("bidError");
    };
  }, [productId]);

  // Set email if user is logged in
  useEffect(() => {
    if (isAuthenticated) setEmail(user?.email || '');
    else setEmail('');
  }, [isAuthenticated, user]);

  const handlePlaceBid = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('To place a bid, you need to log in first.');
      navigate('/login');
      return;
    }

    if (!bidAmount || parseFloat(bidAmount) <= product?.highestBid) {
      toast.error('Your bid must be higher than the current highest bid.');
      return;
    }

    socket.emit("placeBid", {
      productId,
      vendorId: user._id,
      bidAmount: parseFloat(bidAmount),
      email: user.email,
      name: user.name,
    });

    toast.success(`Bid of $${bidAmount} placed successfully!`);
    setBidAmount('');
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <ToastContainer />
        <div className="h-screen flex items-center justify-center">
          <p>Loading product details...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="bg-[#F8F4EC] text-[#4B2E1B] px-24 pt-40 pb-10 font-[one]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SIDE - IMAGES */}
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={product.images[0]}
              alt={product.title}
            />
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div>
            <h1 className="text-[3vw] mb-2">{product.title}</h1>
            <p className="text-[1vw] text-orange-600 mb-1">
              ★★★★★ <span className="text-[#59432D]">{product.star} stars</span>
            </p>
            <p className="text-[1vw] text-[#59432D] mb-4">{product.description}</p>

            <p className="font-[second] font-black mt-4 mb-1">BEST USED FOR:</p>
            <div className="text-[.9vw] font-[second] font-black flex gap-4 mb-4">
              {product.label.length > 0 ? (
                product.label.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-[#59432D] text-[#F8F4EC] flex items-center justify-center">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <span>No labels available</span>
              )}
            </div>

            {/* Pack Size */}
            <div className="mb-4">
              <p className="mb-2 font-black font-[second] text-[1vw]">
                Pack Size: <span className="text-orange-600 text-[.9vw] font-[one]">{packSize}</span>
              </p>
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
              <form onSubmit={handlePlaceBid} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="bidAmount" className="font-[second] text-[.95vw] font-semibold">
                    Bid Amount
                  </label>
                  <input
                    id="bidAmount"
                    type="number"
                    step="0.01"
                    placeholder={`Enter a bid higher than $${product.highestBid}`}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
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
            </div>

            <div className="mt-4 text-sm text-[#6C5A4E] flex flex-wrap gap-4">
              <span>Quantity: {product.quantity}</span>
              <span>Starting Price: ${product.startPrice}</span>
              <span>Current Highest Bid: ${product.highestBid}</span>
              <span>Status: {product.status}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;