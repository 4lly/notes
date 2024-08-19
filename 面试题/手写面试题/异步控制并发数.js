function limitRequest (urls = [], limit = 3) {
  return new Promise((resolve, reject) => {
    const len = urls.length;
    let count = 0;
    while (limit > 0) {
      start();
      limit -= 1;
    }
    function start () {
      const url = urls.shift();
      if (url) {
        fetch(url).then(res => {
          // todo
        }).catch(err => {
          // todo
        }).finally(() => {
          if (count == len - 1) {
            resolve();
          } else {
            count++;
            start();
          }
        });
      }
    }
  });
}

// 测试
limitRequest(['url1', 'url2', 'url3']);