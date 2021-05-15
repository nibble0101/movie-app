export const SET_DATA = "SET_DATA";
export const SET_SEARCH_DATA = "SET_SEARCH_DATA";
export const SET_PAGE = "SET_PAGE";
export const SET_TOTAL_PAGE = "SET_TOTAL_PAGE";
export const SET_LOADING_INDICATOR = "SET_LOADING_INDICATOR";
export const SET_VALUE = "SET_VALUE";
export const SET_QUERY = "SET_QUERY";
export const SET_ERROR = "SET_ERROR";

export const initialState = {
  data: [],
  searchData: [],
  page: 1,
  totalPage: 0,
  isLoading: false,
  value: "",
  query: "",
  error: { hasError: false, message: "" },
};

export function tvReducer(state, action) {
  const { type } = action;
  switch (type) {
    case SET_DATA:
      return { ...state, data: [...action.data] };
    case SET_SEARCH_DATA:
      return { ...state, searchData: [...action.searchData] };
    case SET_PAGE:
      return { ...state, page: action.page };
    case SET_TOTAL_PAGE:
      return { ...state, totalPage: action.totalPage };
    case SET_LOADING_INDICATOR:
      return { ...state, isLoading: action.isLoading };
    case SET_VALUE:
      return { ...state, value: action.value };
    case SET_QUERY:
      return { ...state, query: action.query };
    case SET_ERROR:
      return { ...state, error: { ...action.error } };
    default:
      return state;
  }
}
