import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navebar from "../Navebar/Navebar";

export default function ProductDetails() {
  let { id } = useParams();
  let productD = async (id) => {
    return await axios.get(`https://fakestoreapi.com/products/${id}`);
  };
  let { isLoading, data } = useQuery("ProductDetails", () => {
    console.log(products);

    return productD(id);
  });
  let products = data?.data;

  return (
    <>
      <Navebar/>

      {isLoading ? (
        <div className="loading d-flex justify-content-center align-items-center  bg-bg-body-tertiary position-fixed top-0 bottom-0 start-0 end-0">
          <span class="loader "></span>
        </div>
      ) : (
        <div className="container py-3 mt-5  ">
          <div className="row g-5 details align-items-center  rounded-3  ">
            <div className="col-md-3">
              <div>
                <img src={products?.image} className="w-100" alt="" />
              </div>
            </div>

            <div className="col-md-9">
              <div>
                <h2>{products?.title}</h2>
                <h6 class="">{products?.category}</h6>
                <hr />
                <p className="text-muted my-3">{products?.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <i class="fa-solid fa-star fa-2x mt-3">
                    <span class="text-dark fs-3">{products?.rating.rate}</span>
                  </i>
                  <p className="fw-bold"> Price : {products?.price}-$</p>
                </div>
              </div>
            </div>
            <button className="btn bg-main text-white w-25 m-auto">
              Add to Cart{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
