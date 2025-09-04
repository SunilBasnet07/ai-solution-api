const roleBaseAuth = (role)=>
(req, res, next) => {
    const user = req.user;
    if (!user?.user.roles.includes(role)) {
       if (!user.roles.includes(role)) return res.status(403).send("Access denied");
    }
    next()
}

export default roleBaseAuth