//建立选区
// export function selectTextareaRange(textarea, start, end) {
//   if (typeof textarea.createTextRange != 'undefined') {
//     console.log('我是ie浏览器')
//     var range = textarea.createTextRange();
//     // 先把相对起点移动到0处
//     range.moveStart("character", 0)
//     range.moveEnd("character", 0);
//     range.collapse(true); // 移动插入光标到start处
//     range.moveEnd("character", end);
//     range.moveStart("character", start);
//     range.select();
//   } else if (typeof textarea.setSelectionRange != 'undefined') {
//     textarea.setSelectionRange(start, end);
//     textarea.focus();
//   }
// }

// //防抖函数
// export function debounce(func, delay) {
//   let delays = delay || 500,
//     timer = null;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delays)
//   }
// }

//格式化时间
export default function ({ app }) {
  //date, fmt
  let date = new Date()
  //格式化的时间格式
  let valid_fmt_str = ["yyyy-MM-dd hh:mm:ss", "MM/dd/yyyy", "yyyyMMdd", "yyyy年MM月dd日", "yyyy年MM月dd日hh小时mm分ss秒", "MM月dd日"]
  // let fmt = valid_fmt_str[Math.floor(Math.random(1) * valid_fmt_str.length)]
  let fmt = valid_fmt_str[0]
  //从str.length位置开始提取字符
  function padleftZero(str) {
    return ('00' + str).substr(str.length);
  }

  //如果有一个多个y
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds()             //毫秒
  };


  //格式化后的值
  for (let k in o) {
    // console.log(`(${k})`);
    // (M+)
    // (d+)
    // (h+)
    // (m+)
    // (s+)
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      //yyyy-MM-dd  如果只传入一个字母  比如h:m:s  那么直接直接用o[k]
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padleftZero(str));
    }
  }
  //将格式化后的时间赋给app实例
  app.data.systemNowDate = fmt

  console.log(app)

}

