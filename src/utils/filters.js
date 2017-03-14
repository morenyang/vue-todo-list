/**
 * Created by MorenYang on 2017/3/14.
 */
export default {
  remaining(items){
    return items.filter(function (item) {
      return !item.isFinished
    })
  },
  all(items){
    return items
  },
  completed(items){
    return items.filter(function (item) {
      return item.isFinished
    })
  },
  star(items){
    return items.filter(function (item) {
      return !item.isFinished && item.star
    })
  },
  active(items){
    return this.remaining(items)
  }
}
