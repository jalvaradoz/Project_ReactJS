import { object, string, number, date } from 'yup';

let userSchema = object({
    email: string().email().required(),
    phone: number().typeError('phone must container a number').required().positive().integer(),
    name: string().required(),
})

const validateForm = async(orderForm)=>{
    try {
        await userSchema.validate(orderForm)
        return { status: 'Success' }
    } catch (error) {
        return{ status: 'Error', error: error.message }
    }
}

export default validateForm