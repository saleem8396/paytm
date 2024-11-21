const Zod=require("zod")

const userBodySchema=Zod.object({
    userName:Zod.string().email(),
    firstName:Zod.string(),
    lastName:Zod.string(),
    password:Zod.string()
})
const userBodysigninSchema=Zod.object({
    userName:Zod.string().email(),
    password:Zod.string()
})

const userDataChangeSchema=Zod.object({
    firstName:Zod.string().optional(),
    lastName:Zod.string().optional(),
    password:Zod.string().optional()
})

const transferBodySchema=Zod.object({
    to:Zod.string(),
    amount:Zod.number().gt(0)
})
const stringSchema=Zod.string();

module.exports={
    userBodySchema,
    userBodysigninSchema,
    stringSchema,
    userDataChangeSchema,
    transferBodySchema
}