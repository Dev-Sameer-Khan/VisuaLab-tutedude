import React from 'react'

const SellerDashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-[#FBF5EA] text-[#3C2A1E] font-sans">
    {/* Header */}
    <header className="flex justify-between items-center p-4 border-b border-[#e0d7c6]">
      <div className="flex items-center gap-4">
        <span className="text-lg font-semibold">Seller Central ⓘ</span>
        <img src="/logo.svg" alt="Mundy Express" className="h-6" />
      </div>
      <div className="relative w-72">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full border border-[#ccc] bg-[#f6f1e7]"
        />
        <span className="absolute right-4 top-2.5 text-[#666]">🔍</span>
      </div>
    </header>

    {/* Navigation */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-[#e0d7c6]">
      <div>
        <h2 className="text-xl font-bold text-[#D06C00]">Manage Orders</h2>
        <nav className="flex gap-4 text-sm mt-1">
          <a href="#" className="hover:underline">All orders</a>
          <a href="#" className="hover:underline">Pending</a>
          <a href="#" className="hover:underline">Canceled</a>
          <a href="#" className="hover:underline">Bid</a>
          <a href="#" className="border-b-2 border-black">Shipped</a>
        </nav>
      </div>
      <div className="text-[#D06C00] font-semibold text-lg">
        Dashboard ➝
      </div>
    </div>

    {/* Main Content */}
    <main className="flex p-6 gap-6">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-[#fdf9f0] rounded-2xl p-4 border border-[#e0d7c6]">
        <h3 className="font-bold mb-2">Refine by:</h3>
        <div className="mb-4">
          <p className="text-xs font-semibold mb-1">Ship by date</p>
          <div className="space-y-2 bg-[#ece5d9] h-16 rounded-md" />
        </div>
        <div className="mb-4">
          <p className="text-xs font-semibold mb-1">Sales</p>
          <div className="space-y-2 bg-[#ece5d9] h-16 rounded-md" />
        </div>
        <div>
          <p className="text-xs font-semibold mb-1">Shipping Service</p>
          <div className="space-y-2 bg-[#ece5d9] h-8 rounded-md" />
        </div>
      </aside>

      {/* Orders Table */}
      <section className="flex-1 bg-[#fdf9f0] rounded-2xl border border-[#e0d7c6]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f6e7c5] text-[#3C2A1E]">
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3">Name of Item</th>
              <th className="px-4 py-3">Bid</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item, idx) => (
              <tr key={idx} className="border-t border-[#e0d7c6]">
                <td className="px-4 py-3">
                  <div className="w-12 h-12 bg-[#fbeac6] rounded-md"></div>
                </td>
                <td className="px-4 py-3">Item Name</td>
                <td className="px-4 py-3">₹--</td>
                <td className="px-4 py-3">--</td>
                <td className="px-4 py-3">₹--</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  </div>
  </>
  )
}

export default SellerDashboard