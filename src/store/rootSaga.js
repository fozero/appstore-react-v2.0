
import { put, call,takeLatest,all } from 'redux-saga/effects';
import { actionCreators } from './action'
import $api from '../api/index.js';


/**
 * app搜索获取结果列表
 */
export function* appSearch(action) {
  // 在saga中这里通过action.payload获取到前台传过来的keyword内容   
  const p = function(){
    return $api.lookUp({
      keyword:action.payload
    })
    .then(res => res.results)
    .then(res =>{
      return res
    })
  }
  const res = yield call(p); // 执行p函数，返回值赋值给res
  yield put(actionCreators.saveSearchList(res));// 通过put触发dispatch ，将返回数据传过去
}


/**
 * 请求获取推荐列表
 * @param {*} action 
 */
export function* getRecommendList(action) { 
  const p = function(){
    return $api.recommendData({})
    .then(res => res.feed)
    .then(res =>{
      return res
    })
  }
  const res = yield call(p); // 执行p函数，返回值赋值给res
  yield put(actionCreators.getRecommendListSucceeded(res.entry));
}



/**
 * 监控Action的函数
 */
// takeLatest 和 takeEvery 不同，在任何时刻 takeLatest 只允许一个 fetchData 任务在执行。
// 并且这个任务是最后被启动的那个。 如果已经有一个任务在执行的时候启动另一个 fetchData ，那之前的这个任务会被自动取消。
// function* watchAppSearch() {
//   yield takeEvery(actionCreators.appSearch, appSearch);
// }


// 同时启动多个Sagas  监听action动作
export default function* rootSaga() {
  yield all([
    takeLatest(actionCreators.appSearch, appSearch),
    takeLatest(actionCreators.getRecommendList, getRecommendList)
  ])
}