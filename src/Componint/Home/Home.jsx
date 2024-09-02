import React from "react";
import { Link } from "react-router-dom";
import HomeItems from "../HomeItems/HomeItems";
import axios from "axios";
import { useQuery } from "react-query";
import SliderCom from "../SliderCom/SliderCom";
import Navebar from "../Navebar/Navebar";

export default function Home(id) {
  function GetProduct() {
    return axios.get("https://fakestoreapi.com/products");
  }
  let { data, isError, isLoading, isFetching } = useQuery(
    "ProductApi",
    GetProduct
  );
  return (
    <>
      {/* products send as a props */}
      <Navebar/>

      <div className="mt-2"> <SliderCom/></div>

      {isLoading ? (
        <div className="loading d-flex justify-content-center align-items-center  bg-bg-body-tertiary position-fixed top-0 bottom-0 start-0 end-0">
          <span class="loader "></span>
        </div>
      ) : (
        <Link>
          <div className="container mt-5">
            <div className="row">
              {data?.data.map((product, ind) => (
                <div key={ind} className="col-md-3 ">
                  <HomeItems product={product} />
                </div>
              ))}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
