/**
 * Created by ddxx on 2016/7/13.
 */
export class SetTest {

  constructor() {
    this.s = 1;
    this.a = 2;
  }

  test() {
    let message = '';
    message += this.t1() + '\n';
    message += this.t2() + '\n';
    message += this.t3() + '\n';
    message += this.t4() + '\n';
    message += this.t5() + '\n';
    message += this.t6() + '\n';
    return message;
  }

  t1() {
    let set = new Set();
    let array = [1, 2, 3, 4, 5, 2, 3, 4];
    array.map(x => set.add(x));
    array = Array.from(set);
    return array.toString();
  }

  t2() {
    let set = new Set(['red', 'fff', 'dddd', 'sdsdsd']);
    let str = '';
    for (let item of set.keys()) {
      str += item + ',';
    }
    return str;
  }

  t3() {
    let set = new Set([1, 2, 3, 4, 5, 6]);
    set.forEach(x => x * 2);
    return Array.from(set).toString();
  }

  t4() {
    let set = new Set([1, 2, 'eee', 'we', 4]);
    let arr = [...set];
    return arr.toString();
  }

  t5() {
    let arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    let set = new Set([...arr]);
    return Array.from(set).toString();
  }

  t6() {
    let message = '';
    let map = new Map();
    map.set('a', 2);
    map.set('b', 2);
    map.set('c', 2);
    map.set('d', 2);
    map.set('e', 1222);
    for (let [x, y] of map.entries()) {
      message += x + ':' + y + '    ';
    }
    return message;
  }

  get t7() {
    return '123213';
  }

  set t7(value) {
    console.log(value);
  }

  static t8() {
    return '这是一个静态函数！！！！！！';
  }
}