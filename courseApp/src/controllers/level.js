const GET = async (req,res) => {
    try {
        const level = await req.models.Level.findAll()
        res.status(200).json({
            status:200,
            message: "All levels",
            data: level
        })
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
export default {
    GET
}