import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';





const firebaseConfig = {
    apiKey: "AIzaSyATbJx4_kdOGdsAwZ-RqW1D_oOXUmnyyNE",
    authDomain: "fitness-app-9f627.firebaseapp.com",
    databaseURL: "https://fitness-app-9f627-default-rtdb.firebaseio.com",
    projectId: "fitness-app-9f627",
    storageBucket: "fitness-app-9f627.appspot.com",
    messagingSenderId: "346655385071",
    appId: "1:346655385071:web:2545dc44cde686d158021a"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

  export { app, firestore, storage};

  