/**
 * Created by MorenYang on 2017/3/15.
 */

let TodoBanner = [
  'Don\'t forget',
  'Remember',
  'Keep in mind that',
  'Bear in mind that'
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
  'buy tickets for Taylor Swift\'s concert',
  'give Anna a ring',
  'the time the plane took off',
  'buy the latest magazines',
  'reply to Alice',
  'give York back to SMS',
  'go to the dentist on weekends',
  'turn off the lights'
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
