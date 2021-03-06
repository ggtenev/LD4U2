
//ACTION CONSTANTS
export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDERS = "SET_ORDERS";
import Order from "../../model/order";

//Getting all orders save in the DB
export const fetchOrders = () => {
  return async (dispatch, getState) => {

    //Getting authentication token and user ID to confirm that the correct orders are being fetched
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://ld4u-860ba.firebaseio.com/orders/${userId}.json`
    );

    const resData = await response.json();
    console.log("action");

    //Converting orders to an array that can be stored 
    const loadedOrders = [];
    for (let key in resData) {
      loadedOrders.push(
        new Order(
          key,
          "u1",
          resData[key].cartItems,
          resData[key].totalAmount,
          resData[key].date
        )
      );
    }

    //DISPATCHING TE ACTION TO THE REDUCER
    dispatch({ type: SET_ORDERS, orders: loadedOrders });
  };
};

//Adding order method
export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const userId = getState().auth.userId;

    //ASYNC POSTING THE ORDER TO THE DB
    try {
      const response = await fetch(
        `https://ld4u-860ba.firebaseio.com/orders/${userId}.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartItems,
            totalAmount,
          }),
        }
      );

      //CHECKING THE RESPONSE
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const resData = await response.json();

      //IF RESPONSE IS OK DISPATCHING THE ACTION
      dispatch({
        type: ADD_ORDER,
        orderData: { items: cartItems, totalAmount, id: resData.name },
      });

      //HANDLING ERRORS
    } catch (err) {
      console.log(err);
    }
  };
};
