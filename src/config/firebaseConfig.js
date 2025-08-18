import admin from 'firebase-admin';
import {readFileSync} from 'fs';

const serviceAccount = JSON.parse(readFileSync('./src/config/serviceAccountKey.json'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();
export const auth = admin.auth();
