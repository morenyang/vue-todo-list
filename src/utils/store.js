/**
 * Created by MorenYang on 2017/3/13.
 */
const STORAGE_KET = 'vue_todos';

export default {
  fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KET) || '[]')
  },
  save(items){
    window.localStorage.setItem(STORAGE_KET, JSON.stringify(items))
  }
}
