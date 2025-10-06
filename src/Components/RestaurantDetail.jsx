import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";

function RestaurantDetail() {
  const { idd } = useParams(); // while routing we use idd, had we used id, we will de-structuring same here
  console.log("id from useParam " + idd);

  const api = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5937003&lng=85.1546589&restaurantId=${idd}&catalog_qa=undefined&submitAction=ENTER`;
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await axios.get(api);
      console.log(
        data.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
          .card.itemCards,
        "data from api"
      );
      setFoodItems(
        data.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
          .card.itemCards
      );
    }
    getData();
  }, [idd]);


  const dispatch = useDispatch() // this is like useNavigate
  function handleCartItem(foodItem){
    dispatch(addItem(foodItem))
  }

   return (
    <div>
        <h1 className='text-center font-bold text-2xl'>List of item's avaialable at restaurant</h1>
        {
            foodItems.map((foodItem)=>{
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
                        onClick={()=>handleCartItem(foodItem)}
                        >
                        Add +
                        </button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default RestaurantDetail;
