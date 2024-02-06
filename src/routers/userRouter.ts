import { Router, } from 'express';
import { readUsers, readUserById, createUser, } from '../daos/usersDao';
import Joi, { ValidationError, } from 'joi';

const userSchema = Joi.object({
  _id: Joi.number()
    .required()
    .min(10_000_000_000,)
    .max(99_999_999_999,)
    .integer(),
  firstName: Joi.string()
    .required()
    .min(2,)
    .max(50,),
  lastName: Joi.string()
    .required()
    .min(2,)
    .max(50,),
},).messages({
  'number.integer': '{#label} must be integer',
  'number.min': '{#label} has to be least {#limit}.',
  'number.max': '{#label} has to be max {#limit}.',
  'any.required': '{#label} is required.',
},);

const router = Router();

router.get('/', async (req, res,) => {
  res.json(await readUsers(),);
},);

router.get('/:id', async (req, res,) =>{
  const user = await readUserById(parseInt(req.params.id,));
  if(user == null){
    return res.status(404).send('User with that id is not found!');
  }
  res.json(user,);
},);

// TODO: add schema validation
router.post('/', async (req, res,) => {
  const user = req.body;
  try{
    await userSchema.validateAsync(user, { abortEarly: false, },);
  } catch(err){
    if (err instanceof ValidationError) {
      const details = err.details;
      const errors = details.map(detail => detail.message,);
      return res.status(400,).json({'errors': errors,},);
    }
  }

  try{
    await createUser(user,);
    res.sendStatus(201,);
  }
  catch(err){
    res.status(400,).send('User already exists.',);
  }
},);

export default router;