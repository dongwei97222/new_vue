export function validatePass(rule, value, callback) {
  var self = this;
  //城市编码
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };

  var sId = value.replace(/X$/, "a");
  //获取身份证出生日期
  var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
  var d = new Date(sBirthday.replace(/-/g, "/"));
  var iSum = 0;
  //获得iSum的值
  for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);

  //判断X是否为大写
  if (/^\d{17}(x)$/.test(value)) {
    callback();
  }
  //判断身份证号格式
  if (!/^\d{17}(\d|X)$/.test(value)) {
    callback(new Error(''));
  }
  //判断城市编码是否为空
  if (aCity[parseInt(sId.substr(0, 2))] == null) {
    callback(new Error(''));
  }
  //判断出生日期是否正确
  else if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
    callback(new Error(''));
  }
  //用iSum的值取模 校验身份证号的正确性
  else if (iSum % 11 != 1) {
    callback(new Error(''));
  } else {
    callback();
  }
}


//姓名
export function nameValidate(rule, value, callback) {
  let name = /^([\u4E00-\u9FA5]|[\uF900-\uFA2D]|[\u258C]|[\u2022]|[\u2E80-\uFE4F])+$/;

  if (!name.test(value)) {
    callback(new Error(''));
  } else {
    callback();
  }
}
//手机号码
export function telValidate(rule, value, callback) {
  // let tel = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  let tel = /^1\d{10}$/;

  if (!tel.test(value)) {
    callback(new Error(''));
  } else {
    callback();
  }
}
//密码
export function passwordValidate(rule, value, callback) {
  let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
  if (!password.test(value)) {
    callback(new Error(''));
  } else {
    callback();
  }
}
//身份证号
export function idcardValidate(rule, value, callback) {
  var self = this;
  //城市编码
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  var sId = value.replace(/X$/, "a");

  //获取身份证出生日期
  var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
  var sBirthday15 = '19' + sId.substr(6, 2) + "-" + Number(sId.substr(8, 2)) + "-" + Number(sId.substr(10, 2));
  var d = new Date(sBirthday.replace(/-/g, "/"));
  var d15 = new Date(sBirthday15.replace(/-/g, "/"));
  var iSum = 0;
  //15位和18位身份证号码的基本校验
  let check = /^\d{15}|(\d{17}(\d|x|X))$/.test(value);
  if (!check) {
    callback(new Error(''));
  } //判断长度为15位或18位 
  else if (value.length == 15) {
    //15位身份证号码的基本校验
    let check15 = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(value);
    if (!check15) {
      callback(new Error(''));
    } else if (aCity[parseInt(value.substr(0, 2))] == null) {
      callback(new Error(''));
    } else if (sBirthday15 != (d15.getFullYear() + "-" + (d15.getMonth() + 1) + "-" + d15.getDate())) {
      callback(new Error(''));
    } else {
      callback();
    }

  } else if (value.length == 18) {
    //获得iSum的值
    for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    //判断X是否为大写
    if (/^\d{17}(x)$/.test(value)) {
      callback();
    }
    //判断身份证号格式
    else if (!/^\d{17}(\d|x|X)$/.test(value)) {
      callback(new Error(''));
    }
    //判断城市编码是否为空
    else if (aCity[parseInt(sId.substr(0, 2))] == null) {
      callback(new Error(''));
    } //判断出生日期是否正确
    else if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
      callback(new Error(''));
    }
    //用iSum的值取模 校验身份证号的正确性
    else if (iSum % 11 != 1) {
      callback(new Error(''));
    } else {
      callback();
    }
  } else {
    callback(new Error(''));
  }


}
//校验方法(12-20位，应至少包含数字、大小写字母及特殊字符的三种)
export function passwordValidate(str) {
  var rC = {
    lW: '[a-z]', //小写字母
    uW: '[A-Z]', //大写字母
    nW: '[0-9]', //汉字
    sW: '[\\u0020-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E]' //特殊字符
  };

  function Reg(str, rStr) {
    var reg = new RegExp(rStr);
    if (reg.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  if (str.length < 12 || str.length > 20) {
    callback(new Error(''))
    // return false;
  } else {
    var tR = {
      l: Reg(str, rC.lW),
      u: Reg(str, rC.uW),
      n: Reg(str, rC.nW),
      s: Reg(str, rC.sW)
    };
    if ((tR.l && tR.u && tR.n) || (tR.l && tR.u && tR.s) || (tR.s && tR.u && tR.n) || (tR.s && tR.l && tR.n)) {
      //密码符合要求
      return true;
    } else {
      callback(new Error(''))
      // return false;
    }
  }
}
