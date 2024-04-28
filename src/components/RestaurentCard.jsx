import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <div>
        <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-name">
        <h3>{name}</h3>
      </div>
      <div className="res-cuisines">
        <p>{cuisines.join(" , ")}</p>
      </div>
      <div className="res-rating">
        <p>{avgRating}</p>
      </div>
      <div className="res-time">
        <p>{sla?.slaString}</p>
      </div>
      <div className="res-menu">
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
