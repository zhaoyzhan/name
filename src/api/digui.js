// 递归
function diGui (obj, arr, num) {
  num += 1
  for (var i = 0; i < obj.length; i++) {
    if (obj[i] instanceof Array) {
      diGui(obj[i], arr, num)
    } else {
      arr.push({'id': num, 'value': obj[i]})
    }
  }
  return arr
}
export default diGui
