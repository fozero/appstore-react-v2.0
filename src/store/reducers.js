
import * as types from './action-types'
import { handleActions } from 'redux-actions';

let defaultState = {
  searchList: []//搜索结果列表
}

/**
 * 使用redux-actions之前
 */
// 修改state
// export default(state = defaultState, action={})=>{
//   switch (action.type) {
//     case types.SAVE_SERACH_LIST:
//       return {
//         ...state,
//         searchList: action.searchList
//       }
//     case types.REMOVE_SERACH_LIST:
//       return{
//         ...state,
//         searchList:[]
//       }
//     default:
//       return state
//   }
// }

/**
 * 使用redux-actions之后
 */
// handleAction单个action处理
// const reducer = handleAction(types.SAVE_SERACH_LIST,(state, action)=>{
//   return {
//     ...state,
//     searchList: action.searchList
//   }
// },defaultState);


// 使用handleActions处理多个actions  ,这里需要注意的是  通过action.payload获取传过来的数据
const reducerCreators = handleActions({
  [types.GET_RECOMMEND_LIST_SUCCEEDED]:(state, action)=>{
    return {
      ...state,
      recommendList: action.payload
    }
  },
  [types.SAVE_SEARCH_LIST]:(state, action)=>{
    return {
      ...state,
      searchList: action.payload
    }
  },
  [types.REMOVE_SEARCH_LIST]:(state, action)=>{
    return{
      ...state,
      searchList:[]
    }
  }
},defaultState);

export default reducerCreators;