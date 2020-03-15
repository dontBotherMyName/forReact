import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            inCart,
            info,
            company
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*endtitle*/}
              {/*product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="Just an image!" />
                </div>
                {/*product title*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
                    Made by: {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: Rs.{price}</strong>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Some info about the product:
                    </p>
                    <br />
                    <p className="text-muted lead">{info}</p>
                  </h4>
                  <div>
                    <Link to="/">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-lg mr-20 px-md-5"
                      >
                        Back to Shopping!
                      </button>
                    </Link>
                    <pre />
                    <Link to="/cart">
                      <button
                        type="button"
                        class="btn btn-outline-warning btn-lg mr-20 px-md-5"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {!inCart ? "Add to Cart" : "In Cart"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
