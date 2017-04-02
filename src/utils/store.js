/**
 * Created by MorenYang on 2017/3/13.
 */
const STORAGE_KET = 'vue_todos';
let initItems = [
  {
    label: '点击左边的按钮来标记事件完成情况',
    isFinished: true,
    createDate: new Date("2017-01-05"),
    star: false,
    finishedDate: null
  }, {
    label: '点击文字可以标注为重要',
    isFinished: false,
    createDate: new Date("2017-01-03"),
    star: true,
    finishedDate: null
  }, {
    label: '在手机上向右滑可以删除',
    isFinished: false,
    createDate: new Date("2017-01-04"),
    star: false,
    finishedDate: null
  }, {
    label: '在电脑上双击文字也可以进行编辑',
    isFinished: false,
    createDate: new Date("2017-01-01"),
    star: false,
    finishedDate: null
  }, {
    label: '长按可以进行编辑',
    isFinished: false,
    createDate: new Date("2017-01-02"),
    star: false,
    finishedDate: null
  }
];

export default {
  fetch(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KET) || '[]')
  },
  save(items){
    window.localStorage.setItem(STORAGE_KET, JSON.stringify(items))
  },
  clear(){
    window.localStorage.removeItem(STORAGE_KET)
  },
  init(){
    if (this.fetch().length === 0 && (window.localStorage.getItem(STORAGE_KET + '_isNew') || true)) {
      window.localStorage.setItem(STORAGE_KET + '_isNew', false);
      this.save(initItems);
    }
  }
}
