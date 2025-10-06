import { Link } from "react-router-dom";
import ApiCalling from "./ApiCalling";

function RestaurantCard({ arr }) {
  console.log("my array",arr);

  return  arr.map((n) => { 

    // let imageUrl ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+n.info.cloudinaryImageId;

    return (
    <Link to={`/restaurant/${n.info.id}`}>
    <div className="m-8 w-50">
      <img
        className="w-50 h-42 rounded-2xl"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+n.info.cloudinaryImageId}
      ></img>
      <div className="m-2">
        <h1 className="font-bold">{n.info.name}</h1>
        <span className="font-semibold">{n.info.avgRating}</span>
        <span className="mx-3 font-semibold">{n.info.sla.slaString}</span>
        <p className="text-slate-500">{n.info.cuisines.join(', ')}</p>
        <p className="text-slate-500">{n.info.areaName}</p>
      </div>
    </div>
    </Link>
  )})
}

//   <div className="m-8">
//     <img
//       className="w-50 h-42 rounded-2xl"
//       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/465721bd-24d0-477a-9bfc-6277a45addfa_725082.JPG"
//     ></img>
//     <div className="m-2">
//       <h1 className="font-bold">Pizza Hut</h1>
//       <span className="font-semibold">4.3</span>
//       <span className="mx-3 font-semibold">50-60 mins</span>
//       <p className="text-slate-500">Pizzas</p>
//       <p className="text-slate-500">Kankarbagh</p>
//     </div>
//   </div>
// );

export default RestaurantCard;
