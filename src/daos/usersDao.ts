import { UserI, } from '../models/user';
import client from './connector';

const userDB = client.db('application',).collection<UserI>('users',);

export function readUserById(queryId: string,) {
  return userDB.findOne({_id: queryId,},);
}

export function readUsers() {
  return userDB.find({},);
}

export function createUser(user: UserI,) { 
  userDB.insertOne(user,);
}