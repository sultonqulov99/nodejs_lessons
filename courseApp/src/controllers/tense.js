const GET = async (req,res) => {
    try {
        const tense = await req.models.Tense.findAll()
        res.status(200).json({
            status:200,
            message: "All tenses",
            data: tense
        })
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
export default {
    GET
}