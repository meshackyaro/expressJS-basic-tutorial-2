// Error handling middleware: good but not completely safe as it is not production ready
export const errorHandler = (err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        status: "ERROR",
        message: err.message || "Internal Server Error"
    });
};