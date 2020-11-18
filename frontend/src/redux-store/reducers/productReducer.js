import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESET,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_SUCCESS,
} from "../constants/productConstants.js";
const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
  pages: 0,
  page: 0,
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
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
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

const PROD_DELETE_STATE = {
  loading: false,
  error: null,
  success: false,
};

export const productDeleteReducer = (state = PROD_DELETE_STATE, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const PROD_CREATE_STATE = {
  loading: false,
  error: null,
  success: false,
  product: {},
};

export const productCreateReducer = (state = PROD_CREATE_STATE, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

const PROD_UPDATE_STATE = {
  loading: false,
  error: null,
  success: false,
  product: {},
};

export const productUpdateReducer = (state = PROD_UPDATE_STATE, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

const PROD_CREATE_REVIEW_STATE = {
  loading: false,
  error: null,
  success: false,
};

export const productReviewCreateReducer = (
  state = PROD_CREATE_REVIEW_STATE,
  action
) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

const PROD_TOP_STATE = {
  products: [],
  loading: false,
  error: null,
};
export const productTopRatedReducer = (state = PROD_TOP_STATE, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
