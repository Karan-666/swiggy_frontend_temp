import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  // console.log(cartItems);
  const dispatch = useDispatch();

  function handClearCart() {
    dispatch(clearCart());
  }

  function handleDelete(itemIndex){
    dispatch(removeItem(itemIndex));
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">
        List of items in your cart:{" "}
      </h1>
      <button className="border mx-auto" onClick={handClearCart}>
        Clear Cart
      </button>
      {cartItems.map((foodItem, index) => {
        return (
          <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
            <div className="flex flex-col w-3/4">
              <h1>{foodItem.card.info.name}</h1>
              <h1>{foodItem.card.info.price / 100}</h1>
              <h1>{foodItem.card.info.category}</h1>
            </div>
            <img
              className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
              alt=""
            />

            <button
              className="border bg-green-300 h-8 relative top-16 right-5"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
