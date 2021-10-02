// NOTE: this app/web framework is based on/inspired by Backbone.js & Marionette

import axios, { AxiosResponse } from 'axios';
import { User0 } from './models/compositionApproach/User0';
import { User1, UserProps } from './models/inheritanceApproach/User1';
import { DataCollection } from './models/inheritanceApproach/reusableClasses/DataCollection';
import { UserDetailsForm } from './views/inheritanceApproach/UserDetailsForm';
import { UserList } from './views/inheritanceApproach/UserList';

const apiUrl = 'http://localhost:3000/users';

// COMPOSITION APPROACH
// const user1 = new User0({id: 1});
// user1.set({name: 'Adam Jones', age: 23});
// user1.save();

// const user2 = new User0({name: 'Maynard Keenan', age: 24});
// user2.save();

// const user3 = new User0({});
// user3.events.on('change', () => {console.log('changed')});
// user3.events.trigger('change');

// const user4 = new User0({name: 'Justin Chancellor', age: 22});
// user4.on('change', () => {console.log('changed')});
// user4.trigger('change');
// console.log(user4.get('name'));

// const user5 = new User0({name: 'Cliff Burton', age: 22});
// user5.on('change', () => {console.log('user is changed')});
// user5.set({name: 'Jason Newsted'});

// const user6 = new User0({id: 2});
// user6.fetch();
// user6.on('change', () => {console.log(user6)});

// const user7 = new User0({id: 1, name: 'Scott Weiland', age: 37});
// user7.save();
// user7.on('save', () => {console.log(user7)});

// INHERITANCE APPROACH
// const user8 = User1.buildUser({id: 2});
// user8.fetch();
// user8.on('change', () => {console.log(user8)});

// const userCollection = User1.buildUserCollection();
// userCollection.fetch();
// userCollection.on('change', () => {console.log(userCollection)});

// RENDERING HTML
const rootElement = document.querySelector('#root-element');

// 1st try
// if (rootElement) {
//   const userInfo = new UserDetailsForm(
//     rootElement, 
//     User1.buildUserInstance({name: 'Kurt Cobain', age: 30})
//   );
//   userInfo.render();
//   console.log(userInfo);
// } else {
//   throw new Error('Root element not found');
// }

// 2nd try
const userCollection = new DataCollection(
  apiUrl,
  (json: UserProps) => {
    return User1.buildUserInstance(json);
  }
);

userCollection.fetch();

userCollection.on('change', () => {
  if(rootElement) {
    new UserList(rootElement, userCollection).renderCollection();
  }
});