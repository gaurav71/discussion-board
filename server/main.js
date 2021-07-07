import { Meteor } from 'meteor/meteor';
import { PostCollection } from '../imports/api/dbCollection/postCollection';
import { UserCollection } from '../imports/api/dbCollection/userCollection';
import '/imports/api/graphql/index';

Meteor.startup(() => {
	// UserCollection.remove({})
	// PostCollection.remove({})
});
