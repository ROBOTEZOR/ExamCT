const checkAuth = async (req, res, next) => {
   try{
      const token = req.cookies.authToken;
      if (!decoded || !decoded.user.Id){
         return res.redirect ('/login')
      }

      const decoded = jwt.verify(token, 'secretkey');
      if (!decoded || !decoded.userId){
      return res.redirect('/login');
      }
      req.userId = decoded.userId;

      next();
   }
   catch (error) {
      console.error(error);
      return res.redirect('/login')
   }
};

module.exports = checkAuth;