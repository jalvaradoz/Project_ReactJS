import { object, string, number } from 'yup';

let userSchema = object({
    email: string().email().required(),
    phone: number().typeError('phone must container a number').required().positive().integer(),
    name: string().required(),
})

export const validateForm = async(orderForm)=>{
    try {
        await userSchema.validate(orderForm)
        return { status: 'Success' }
    } catch (error) {
        return{ status: 'Error', error: error.message }
    }
}


let signUpSchema = object({
    userName: string().required().lowercase().trim(),
    password: string().required().min(8, 'password must be at least 8 characters long').max(16, 'password can`t be larger than 16 characters').trim(),
    confirmedPassword: string().required().min(8, 'password must be at least 8 characters long').max(16, 'password can`t be larger than 16 characters'),
    email: string().required(),
    confirmedEmail: string().required(),
})

export const validateSignUpForm = async(signForm)=>{
    try {
        await signUpSchema.validate(signForm)
        return { status: 'Success' }
    } catch (error) {
        return{ status: 'Error', error: error.message }
    }
}