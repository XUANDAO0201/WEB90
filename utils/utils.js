export const ApiResponse = (code, data, message, res) => {
    res.status(code).send({
        data,
        message
    })
}