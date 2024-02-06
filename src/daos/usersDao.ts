import { UserI, } from '../models/user';
import client from './connector';


const userDB = client.db('application',).collection<UserI>('users',);

export function readUserById(queryId: number,) {
  return userDB.findOne({_id: queryId,},);
}

export function readUsers() {
  return userDB.find({},).toArray();
}

export function createUser(user: UserI,) { 
  return userDB.insertOne(user,);
}