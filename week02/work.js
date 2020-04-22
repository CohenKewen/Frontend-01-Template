/** 
 * 1.写一个正则表达式 匹配所有 Number 直接量
 * */ 
var numberRegex = /^-?(0|[1-9]\d*)?\.?\d*([eE]-?([1-9]\d*)|0)?$|^0[bB][0-1]+$|^-?0[oO]?[0-7]+$|^-?0[xX][0-9A-Fa-f]+$/

/** 
 * 2.写一个 UTF-8 Encoding 的函数
 * */ 
function UTF8_Encoding(string){
  let utf8_code = '', code_num = 0;
  const str_unicode = string.charCodeAt();
  const binary_unicode = str_unicode.toString(2);
  //缺位补0
  const formatZero = (code, leng) => {
    return (Array(leng).join(0) + code).slice(-leng);
  }
  if(str_unicode <= 0x007F) {
    utf8_code = '0' + formatZero(binary_unicode , 7);
  }
  if(str_unicode > 0x007F &&  str_unicode <= 0x07FF) {
    code_num = 2;
  }
  if(str_unicode > 0x07FF &&  str_unicode <= 0xFFFF ) {
    code_num = 3;
  }
  if(str_unicode > 0xFFFF  &&  str_unicode <= 0x10FFFF) {
    code_num = 4;
  }
  if(code_num > 0){
    let arry = [];
    for(let i = 1; i < code_num + 1; i++){
      if( i === code_num){
        const str = binary_unicode.slice(-i*6,-(i-1)*6);
        arry.push(Array(code_num + 1).join(1) + '0' + formatZero(str, 7 - code_num));
      }else{
        arry.push('10' + (i === 1 ? binary_unicode.slice(-6) : binary_unicode.slice(-i*6,-(i-1)*6)));
      }
    }
    utf8_code = arry.reverse().join(' ');
  }
  console.log(utf8_code);
  return utf8_code
}

/** 
 * 3.写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
 * */ 
var stringRegex = /^'[\n.]*'|"[\n.]*"$/;
