import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./serviceAccount.js";

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const newMovie = {
  title: "Avatar: The Way of Water",
  rating: null,
  genre: "SciFi/Adventure",
  released: ("December " + 2022),
  boxOffice: null,
  director: "James Cameron",
};

db.collection('Movies').add(newMovie)
  .then(doc => console.log('Movie logged:', doc.id))
  .catch(console.error);

db.collection('Movies').get()
  .then(collection => {
    collection.docs.forEach(doc => {
      console.log(doc.id, doc.data())
    })
  })
  .catch(console.error);