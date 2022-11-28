const GET = async (req,res) => {
    try {
        const sub_tense = await req.models.Sub_tense.findAll()
        res.status(200).json({
            status:200,
            message: "All sub_tense",
            data: sub_tense
        })
    } catch (error) {
        return next(new InternalServerError(500,error.message))
    }
}
export default {
    GET
}