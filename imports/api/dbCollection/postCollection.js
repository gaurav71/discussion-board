import { Mongo } from 'meteor/mongo';

const postCollection = new Mongo.Collection('posts')

export { postCollection as PostCollection }

