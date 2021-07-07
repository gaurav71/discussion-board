import { Mongo } from 'meteor/mongo';

const userCollection = new Mongo.Collection('discussUsers')

export { userCollection as UserCollection }
