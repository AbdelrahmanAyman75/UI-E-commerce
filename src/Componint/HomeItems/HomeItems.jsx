// Home data
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function HomeItems({ product }) {
  return (
    <>
      <Zoom cascade damping={0.1}>
        <Link to={`/productDetails/${product.id}`}>
          <div className="container">
            <div className="product g-3 text-center w-75 ">
              <img className="w-75 mt-3" src={product.image} alt="jpg" />
              <h2 className="text-center"> {product.category} </h2>
              <p className="text-body-tertiary">{product.title}</p>
              <button className=" btn bg-main text-white w-100">
                Add to Cart{""}
              </button>
            </div>
          </div>
        </Link>
      </Zoom>
    </>
  );
}
