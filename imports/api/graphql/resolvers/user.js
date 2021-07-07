import { createUserController, loginUserController } from '../../controllers/user'

export const createUser = (parent, args, context, info) => {
  return createUserController(args.input, context)
}

export const login = (parent, args, context, info) => {  
  return loginUserController(args.input, context)
}