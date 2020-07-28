import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('user').doc('gFqRstU6gITPRYBBhzjw').collection('cartItems').doc('GQkqWRkVkhsasw1simtl');
firestore.doc('/users/gFqRstU6gITPRYBBhzjw/cartItems/GQkqWRkVkhsasw1simtl');
firestore.collection('/users/gFqRstU6gITPRYBBhzjw/cartItems');