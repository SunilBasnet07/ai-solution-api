const logger = (req, res, next) => {
    const method = req.method;
    const originalUrl = req.originalUrl;
    console.log(`Method:${method} originalUrl:${originalUrl}`);
    next();
}
export default logger