import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) res.status(401).json({message: "Unauthorized"});

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({
            status: "ERROR",
            message: "Token Invalid or Expired"
        });        
    }
};