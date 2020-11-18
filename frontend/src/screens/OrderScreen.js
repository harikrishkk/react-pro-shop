import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../redux-store/actions/orderActions";
import Loader from "../components/Loader.js";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../redux-store/constants/orderConstants";

const OrderScreen = ({ match, history }) => {
  const [sdkReady, setSdkReady] = useState(false);
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { success: successDeliver, loading: loadingDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let itemsPrice = 0;
  if (order && order.orderItems) {
    itemsPrice = order.orderItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || order._id !== orderId || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successPay, sdkReady, successDeliver]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger"> {error}</Message>
  ) : (
    <>
      <h1> Order {order._id} </h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> Shipping </h2>
              <p>
                <strong>
                  <b>Name:</b> {order.user.name}
                </strong>
              </p>
              <p>
                <strong>
                  <b>Email:</b> {order.user.email}
                </strong>
              </p>

              <p>
                <strong>
                  <b>Address:</b>
                </strong>
                {order && order.shippingAddress && (
                  <span>
                    {order.shippingAddress.address},{order.shippingAddress.city}
                    ,{order.shippingAddress.postalCode},
                    {order.shippingAddress.country}
                  </span>
                )}
              </p>
              <p>
                <strong>
                  <b>Delivery Status:</b>
                </strong>
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger"> Not delivered </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2> Payment Method </h2>
              <p>
                <strong>
                  <b>Payment Method:</b>
                </strong>
                {order.paymentMethod}
              </p>
              <p>
                <strong>
                  <b>Payment Status:</b>
                </strong>
              </p>
              {order.isPaid ? (
                <Message variant="success"> Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger"> Not paid </Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2> Order Items </h2>
              {order.orderItems.length === 0 ? (
                "Order is empty"
              ) : (
                <ListGroup variant="flush">
                  {order &&
                    order.orderItems &&
                    order.orderItems.map((item, index) => {
                      return (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              ({item.qty}) x ${item.price} = $
                              {item.qty * item.price}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2> Order Summary </h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${itemsPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}

              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
