import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (

      <div className="product-grid">
      <section className="product-card">
        <img className="card-img" src={img} alt={title} />
        <div className="card-details">
          <h3 className="card-title">{title} </h3>
          <section className="card-reviews">
            {star} {star} {star}  {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <div className="card-price">
            <del>{prevPrice} </del>
            {newPrice}
          </div>
          <div className="bag-icon">
            <BsFillBagHeartFill />
          </div>
        </div>
      </section>
      </div>
  );
};

export default Card;
