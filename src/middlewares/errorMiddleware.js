const errorMiddleware = (err, req, res, next) => {
    // Todo error mapping
    console.error(err);
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ messsage: 'Error del servidor' });
};

module.exports = errorMiddleware;
