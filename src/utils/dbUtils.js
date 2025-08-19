import {auth, db} from "../config/firebaseConfig.js";

export const tokenToId = (token) =>
{
    let firebase_uid, resultado;

    if(!token)
        throw new Error('Unauthorized. Nenhum token fornecido.', {cause: {status: 401}});

    try
    {
        firebase_uid = (await auth.verifyIdToken(idToken)).uid;
        resultado = await db.collection('usuarios').where('firebase_uid', '==', firebase_uid).limit(1).get();
    }
    catch(error)
    {
        throw error;
    }

    if (resultado.empty)
        throw new Error('Usuário não encontrado na base de dados.', {cause: {status: 404}});

    return resultado.docs[0].id;
}


export const docToObject = (doc) =>
{
    if (!doc.exists) {
        return null;
    }
    return {id: doc.id, ...doc.data()};
};

export const snapshotToArray = (snapshot) =>
{
    const results = [];
    snapshot.forEach(doc => {
        results.push(docToObject(doc));
    });
    return results;
};
