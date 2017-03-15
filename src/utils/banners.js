/**
 * Created by MorenYang on 2017/3/15.
 */

let TodoBanner = [
  'Don\'t forget to',
  'Remember to'
];

let StarBanner = [
  'You stared'
];

let CompletedBanner = [
  'You have done',
  'You finished'
];

let Things = [
  'your homework',
  'eating',
  'the date this weekend',
  'bring the keys',
  'charge your phone',
  'missing me',
  'buy tickets for Taylor Swift\'s concert'
];

export default {
  banner: function (card) {
    let banner = {
      all: TodoBanner,
      active: TodoBanner,
      star: TodoBanner.concat(StarBanner),
      completed: CompletedBanner
    };
    return banner[card][Math.floor(Math.random() * banner[card].length)];
  },
  things: function () {
    return Things[Math.floor(Math.random() * Things.length)]
  }
}
