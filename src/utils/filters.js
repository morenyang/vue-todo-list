/**
 * Created by MorenYang on 2017/3/14.
 */
export default {
  remaining(items){
    return items.filter(function (item) {
      return !item.isFinished
    }).reverse()
  },
  all(items){
    return this.active(items).concat(this.completed(items))
  },
  normal(items){
    return items.filter(function (item) {
      return !item.isFinished && !item.star
    }).reverse()
  },
  completed(items){
    return items.filter(function (item) {
      return item.isFinished
    }).reverse()
  },
  star(items){
    return items.filter(function (item) {
      return !item.isFinished && item.star
    }).reverse()
  },
  active(items){
    return this.remaining(items)
  }
}
