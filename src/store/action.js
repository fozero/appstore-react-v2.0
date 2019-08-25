import * as types from "./action-types";
import { createActions } from "redux-actions";

/**
 * 使用redux-actions之前
 */
// export const saveSearchList = (searchList) => {
//   console.log('searchList',searchList)
//   return {
//     type: types.SAVE_SERACH_LIST,
//     searchList
//   }
// }

// export const removeSearchList = () => {
//   return {
//     type: types.REMOVE_SERACH_LIST
//   }
// }

/**
 * 使用redux-actions之后
 */
// 使用createAction创建单个动作
// export const saveSearchList = createAction(types.SAVE_SERACH_LIST,searchList=>searchList);
// export const removeSearchList = createAction(types.REMOVE_SERACH_LIST);

// 使用createActions创建多个动作
export const actionCreators = createActions({
  [types.GET_APP_INFO]: id => {
    return id;
  },
  [types.GET_APP_INFO_SUCCEED]: res => {
    return res;
  },
  [types.GET_RECOMMEND_LIST]: () => null,
  [types.GET_RECOMMEND_LIST_SUCCEEDED]: recommendList => {
    return recommendList;
  },
  [types.APP_LIST_DATE]: () => null,
  [types.APP_SEARCH]: keyword => {
    return keyword;
  },
  [types.SAVE_SEARCH_LIST]: searchList => searchList,
  [types.REMOVE_SEARCH_LIST]: () => null
});
