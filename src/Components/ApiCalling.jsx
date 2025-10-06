import axios from "axios";
import { useEffect, useState } from "react";

function UseApiCalling() {
  const [RestaurantArr, setRestaurantArr] = useState([]);

  // calling swiggy api //
  /*
  const api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5937003&lng=85.1546589&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  useEffect(() => {
    axios.get(api).then((res) => {
      //    console.log(res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      return setRestaurantArr(
        res.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    });
  }, []);
  */

  // calling our own api
  const api = "https://swiggy-backend-temp.onrender.com/api/restaurants";
  useEffect(() => {
    axios
      .get(api, {
        headers: { authorization: `JWT ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        return setRestaurantArr(res.data);
      });
  }, []);

  return RestaurantArr;
}

export default UseApiCalling;

// can be also done using async await

//  useEffect(() => {
//     async function calling() {
//       const API = "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&";
//       const resp = await axios.get(API);

//       // The path to the data might change, this is based on your teacher's screenshot
//       const restaurantData = resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
//       setAllRestaurantArr(restaurantData);
//     }
//     calling();
//   }, []); // Empty array means this runs only once
