import { useState } from "react";
import UseApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import Search from "./Search";

function Body() {
  // let resArr = UseApiCalling();

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isclicked1, setIsClicked1] = useState(false);
  const [isclicked2, setIsClicked2] = useState(false);

  let apiData = UseApiCalling();

  useEffect(() => {
    if (apiData && apiData.length) {
      setListOfRestaurant(apiData);
    }
  }, [apiData]);

  function handleRating() {
    setListOfRestaurant(
      apiData.filter((n) => n.info.avgRating >= 4.4)
    );
    setIsClicked1(true);
    setIsClicked2(false);
  }

  function handleReset() {
    setListOfRestaurant(
        apiData
    )
    setIsClicked1(false);
    setIsClicked2(true);
  }

  return (
    <div className="mt-30">
      <h1 className="mx-10 font-bold text-xl">
        Restaurants with online food delivery in Patna
      </h1>
      <Search apiData={apiData}  setListOfRestaurant={setListOfRestaurant} />
      {/* // filter buttons */}
      {/* border: Adds a thin, 1-pixel solid border around the button.
            rounded-lg: Makes the corners of the button rounded. The -lg stands for "large," so it gives them a noticeable curve.
            w-1/12: This controls the width. It sets the button's width to be 1/12th (or about 8.33%) of the width of whatever container it's inside.
            ml-14: This adds margin to the left. It pushes the button away from the element to its left, creating a fixed amount of space. */}
      <button
        onClick={handleRating}
        className={isclicked1?"border rounded-lg w-1/8 m-10 text-md cursor-pointer bg-amber-200":"border rounded-lg w-1/8 m-10 text-md cursor-pointer"}
      >
        Rating 4.4+
      </button>
      <button
        onClick={handleReset}
        className={isclicked2?"border rounded-lg w-1/14 m-10 text-md cursor-pointer bg-amber-200":"border rounded-lg w-1/14 m-10 text-md cursor-pointer"}
      >
        Reset
      </button>
      {/* w-10/12: This sets the container's width to be 10/12ths (or 83.3%) of the screen or parent element's width. This is key because it makes the container narrower than the full page.
            mx-auto: This is the trick to center the container.
            m stands for margin.
            x stands for the horizontal axis (left and right).
            auto tells the browser to automatically figure out the margins. */}
      <div className="flex flex-wrap w-11/12 mx-auto justify-center">
        <RestaurantCard arr={listOfRestaurant} />
      </div>
    </div>
  );
}

export default Body;
