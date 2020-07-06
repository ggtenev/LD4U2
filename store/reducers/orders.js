import { ADD_ORDER } from "../actions/orders";
import Order from "../../model/order";

const initState = {
  orders: [],
};

export default (state = initState, action) => {
 
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.totalAmount,
        new Date()
      );
      return {
        ...state,
        orders:state.orders.concat(newOrder)
      }
  }

  return state;
};
