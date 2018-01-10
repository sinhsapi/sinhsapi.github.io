function gt(n) {
  var gt = 1;
  for (var i = 1; i <= n; i++) {
    gt = gt * i;
  }
  return gt;
}
// bai2
var name2 = "hello";
function bai2(name2) {
  var name1 = name2.length - 1;
  for (var i = name1; i >= 0; i--) document.write(name2[i]);
}
//  bai3
var ta = "123";
var m = "";
function bai3(ta) {
  for (var i = 1; i <= 9; i++) {
    ta + "-";
    m = m + ta + "-";
  }
  return m;
}
document.write(bai3(ta) + ta);
//bai4
var ten = ["nam", "anh", "sang", "son", "tu", "tuan", "linh"];
function bai4(ten) {
  ten.sort();
  for (var i = 0; i < ten.length; i++)
    document.write("<p>" + i + "." + ten[i] + "</p>");
}

// bai5
function bai5(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 2 * arr[i];
  return arr;
}
//bai6
function bai6(a) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b[i] = a[i] % 2;
  }
  return b;
}
