const rickAndMortyMiddleware = (req, res, next) => {
  if (req.method === 'GET') {
    console.log(req)
    console.log(req.body)
  }

  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/new-hotel.jpg',
    };
  }
  next();
};
