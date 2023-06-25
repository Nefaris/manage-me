export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  next();
};
