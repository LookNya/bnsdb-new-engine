export default function(str, locale){
  var str = ''+str
  var locale = locale || 'ru'
  var joiner = locale == 'ru' ? ' ' : ',' //еще уже " "
  return str.replace(/./g, function(c, i, a) {
      return i && c !== ',' && ((a.length - i) % 3 === 0) ? joiner + c : c;
  })
}