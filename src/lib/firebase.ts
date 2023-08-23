/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQXlpBc6JWTf8n4oBV9uftWScI2FzYHwM",
  authDomain: "common-project-000.firebaseapp.com",
  databaseURL: "https://common-project-000-default-rtdb.firebaseio.com",
  projectId: "common-project-000",
  storageBucket: "common-project-000.appspot.com",
  messagingSenderId: "789278346215",
  appId: "1:789278346215:web:2d8dca718495177bdd8b42",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
