import {auth, db} from "../config/firebaseConfig.js";

export const getUserData = async (idToken) =>
{
    try
    {
        const firebase_uid = (await auth.verifyIdToken(idToken)).uid;
        const resultado = await db.collection('usuarios').where('firebase_uid', '==', firebase_uid).limit(1).get();

        if (resultado.empty) {
            throw new Error('Usuário não encontrado na base de dados.');
        }
        let userData;
        resultado.forEach(doc =>
        {
            userData = { id: doc.id, ...doc.data() };
        });

        return userData;
    }
    catch (error)
    {
        throw error;
    }
};

