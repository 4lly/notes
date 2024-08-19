
function query (name, url) {
  const search = url || location.search.substring(1);
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const res = search.match(reg);
  if (res === null) {
    return null;
  }
  return res[2];
}


function query2 (name) {

  const search = location.search;
  const params = new URLSearchParams(search);
  // const params = Object.fromEntries(params.entries())
  return params.get(name);
}

function query3 (name, url) {
  const res = {};
  const search = url || location.search.substring(1);
  const arr = search.splite('&');
  arr.forEach(item => {
    const key = item.splite('=')[0];
    const value = item.splite('=')[1];
    res[key] = decodeURIComponent(value);
  });
  return Reflect.get(res, name);
}
//功能测试
const url = 'a=10&b=20&c=30';
query('a');