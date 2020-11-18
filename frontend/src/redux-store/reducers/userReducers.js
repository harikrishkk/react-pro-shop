import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_RESET,
  USER_DETAIL_RESET,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_RESET,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_RESET,
} from "../constants/userConstants";

const INIT_STATE = {
  loading: false,
  error: null,
  userInfo: {},
};

export const userLoginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const INIT_REGISTER_STATE = {
  loading: false,
  error: null,
  userInfo: {},
};

export const userRegisterReducer = (state = INIT_REGISTER_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const INIT_DETAIL_STATE = {
  loading: false,
  error: null,
  user: {},
};

export const userDetailReducer = (state = INIT_DETAIL_STATE, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_DETAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_DETAIL_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};

const INIT_PROFILE_UPDATE = {
  loading: false,
  error: null,
  userInfo: {},
  success: false,
};

export const userUpdateProfileReducer = (
  state = INIT_PROFILE_UPDATE,
  action
) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        success: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

const INIT_USER_LIST = {
  loading: false,
  error: null,
  users: [],
};

export const userListReducer = (state = INIT_USER_LIST, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LIST_RESET:
      return { ...state, users: [] };
    default:
      return state;
  }
};

const INIT_USER_DELETE = {
  loading: false,
  success: false,
};

export const userDeleteReducer = (state = INIT_USER_DELETE, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const INIT_USER_UPDATE = {
  loading: false,
  success: false,
  user: {},
};

export const userUpdateReducer = (state = INIT_USER_UPDATE, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_RESET:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};
