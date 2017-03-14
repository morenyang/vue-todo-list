/**
 * Created by MorenYang on 2017/3/14.
 */
export default {
  remaining(items){
    return items.filter(function (item) {
      return !item.isFinished
    })
  }
}
