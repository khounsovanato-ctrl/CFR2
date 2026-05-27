import React, { useEffect, useState } from "react";
import { getData } from "../api/data";
import { ChevronDown, Heart, ShoppingCart, X } from "lucide-react";

export default function Market() {
  const [data, setData] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  // ADD TO CART
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // TOGGLE WISHLIST
  const toggleWishlist = (item) => {
    setWishlist((prev) =>
      prev.find((p) => p.id === item.id)
        ? prev.filter((p) => p.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-red-500">
          MotoGP Market
        </h1>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-red-500" />
            <span>{cart.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <Heart className="text-red-500" />
            <span>{wishlist.length}</span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {data.map((item) => {
          const isWish = wishlist.find((w) => w.id === item.id);

          return (
            <div
              key={item.id}
              className="
                group bg-gradient-to-b from-[#111] to-[#0a0a0a]
                border border-red-700/20 rounded-2xl
                overflow-hidden shadow-lg shadow-red-900/10
                hover:scale-[1.03] transition duration-500
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* WISHLIST */}
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-3 right-3 bg-black/60 p-2 rounded-full"
                >
                  <Heart
                    size={18}
                    className={isWish ? "text-red-500 fill-red-500" : "text-white"}
                  />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-gray-400 text-sm">{item.category}</p>
                <p className="text-red-500 font-bold">${item.price}</p>

                {/* BUTTONS */}
                <div className="flex gap-2 mt-4">

                  {/* BUY */}
                  <button
                    onClick={() => addToCart(item)}
                    className="
                      flex-1 bg-gradient-to-r from-red-600 to-red-800
                      py-2 rounded-lg font-semibold
                      hover:scale-105 active:scale-95
                      transition
                    "
                  >
                    Add Cart
                  </button>

                  {/* DETAIL */}
                  <button
                    onClick={() => setModalItem(item)}
                    className="
                      px-3 border border-red-600 rounded-lg
                      hover:bg-red-600/20 transition
                    "
                  >
                    <ChevronDown />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL DETAIL */}
      {modalItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-red-700/30 p-6 rounded-2xl w-[90%] sm:w-[400px] relative">

            {/* CLOSE */}
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <img
              src={modalItem.image}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-bold">{modalItem.name}</h2>
            <p className="text-gray-400">{modalItem.category}</p>
            <p className="text-red-500 font-bold mt-2">
              ${modalItem.price}
            </p>

            <p className="text-gray-300 mt-3 text-sm">
              {modalItem.description}
            </p>

            <button
              onClick={() => addToCart(modalItem)}
              className="
                w-full mt-4 bg-red-600 py-2 rounded-lg
                hover:bg-red-700 transition
              "
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}