const jwt =  require('jsonwebtoken')

module.exports = auth = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const email = decodedToken.email;
      req.email = email;
      if (req.body.email && req.body.email !== email) {
        throw 'Invalid user ID';
      } else {
        next();
      }
    } catch(error) {
      res.status(401).json({
        message: "Unauthorized, please Log in"
      });
    }
  };