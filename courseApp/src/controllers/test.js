const GET = async (req,res) => {
    try {
        const test = await req.models.Test.findAll()
        res.status(200).json({
            status:200,
            message: "All tests",
            data: test
        })
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
export default {
    GET
}