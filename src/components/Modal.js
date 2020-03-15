import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import "./Modal.css";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="just_for_modal">
                <div className="container">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5>Item added to Cart</h5>
                    <img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">Price: Rs.{price}</h5>
                    <Link to="/">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-lg mr-20 px-md-5"
                        onClick={() => closeModal()}
                      >
                        Back to Shopping!
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        type="button"
                        class="btn btn-outline-warning btn-lg mr-20 px-md-5"
                        onClick={() => closeModal()}
                      >
                        Go to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
