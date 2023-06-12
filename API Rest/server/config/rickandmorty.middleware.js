const characterMiddleware = (req, res, next) => {
  console.log(req)
  // console.log(res)
  if (req.method === 'POST') {
    // debugger;
    /*    req.body = {
         ...req.body,
         thumbNailUrl: '/thumbnails/new-hotel.jpg',
       }; */
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};
