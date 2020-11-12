import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from "../constants/productConstants.js";
const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const PROD_DETAIL_INIT_STATE = {
  product: {
    reviews: [],
  },
  loading: false,
  error: null,
};

export const productDetailReducer = (
  state = PROD_DETAIL_INIT_STATE,
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
