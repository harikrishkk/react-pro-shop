import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants.js";

const INIT_ORDER_CREATE_STATE = {
  loading: false,
  success: false,
  order: {},
  error: null,
};

export const orderCreateReducer = (state = INIT_ORDER_CREATE_STATE, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const INIT_ORDER_DETAILS_STATE = {
  order: {},
  loading: true,
  error: null,
};

export const orderDetailsReducer = (
  state = INIT_ORDER_DETAILS_STATE,
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const INIT_ORDER_PAY_STATE = {
  loading: true,
  error: null,
  success: false,
};

export const orderPayReducer = (state = INIT_ORDER_PAY_STATE, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

const INIT_ORDER_LIST_MY_STATE = {
  loading: false,
  error: null,
  orders: [],
};

export const orderListMyReducer = (
  state = INIT_ORDER_LIST_MY_STATE,
  action
) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_LIST_MY_RESET:
      return {
        orders: [],
      };
    default:
      return state;
  }
};

const INIT_ORDER_LIST_STATE = {
  loading: false,
  error: null,
  orders: [],
};

export const orderListReducer = (state = INIT_ORDER_LIST_STATE, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const INIT_ORDER_DELIVER_STATE = {
  loading: true,
  error: null,
  success: false,
};

export const orderDeliverReducer = (
  state = INIT_ORDER_DELIVER_STATE,
  action
) => {
  switch (action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DELIVER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ORDER_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_DELIVER_RESET:
      return {};
    default:
      return state;
  }
};
