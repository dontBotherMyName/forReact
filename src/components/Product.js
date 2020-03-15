import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => {
                  value.handleDetail(id);
                }}
              >
                <Link to="/details">
                  <img
                    src={img}
                    className="card-img-top"
                    alt="product"
                    height="160"
                    width="160"
                    onClick={() => {}}
                  />
                </Link>
                <button
                  className="card-btn btn-sm btn-block"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      InCart
                    </p>
                  ) : (
                    <i class="fas fa-shopping-cart" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">Rs.</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all is linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all is linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all is linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
  }
`;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
};
