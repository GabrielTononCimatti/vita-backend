import {db} from "../config/firebaseConfig.js";

export const validateUser = (user) =>
{
    if(!user)
        throw new Error("Dados não recebidos. Objeto user vazio.");

    if (!user.email || !user.firebase_uid || !user.tipo_usuario || !user.pessoa_id)
        throw new Error("Dados incompletos. 'email', 'firebase_uid', 'tipo_usuario' e 'pessoa_id' são obrigatórios.");

    if (typeof user.tipo_usuario !== 'string' || !['C', 'F', 'A'].includes(user.tipo_usuario))
        throw new Error("Valor inválido para 'tipo_usuario'. Deve ser 'C', 'F' ou 'A'.");
}

export const retrieveUser = async (id) =>
{
    let resultado;
    try
    {
        resultado = await db.collection('usuarios').doc(id).get();
    }
    catch (error)
    {
        throw error;
    }

    if (!resultado.exists)
    {
        throw new Error('Usuário não encontrado na base de dados.');
    }

    return {id: resultado.id, ...resultado.data()};
}

export const saveUser = async (user) =>
{
    if(!user)
        throw new Error("Dados não recebidos. Objeto user vazio.");

    try
    {
        await db.collection('usuarios').add({...user, criadoEm: new Date().toISOString()});
    }
    catch(error)
    {
        throw error;
    }
export const editUser = async (user) =>
{
    try
    {
        let oldUser = await retrieveUserById(user.id);
        let {id, ...newUser} = {...oldUser, ...user};
        validateUser(newUser);
        await db.collection('users').doc(id).set(newUser);
    }
    catch(error)
    {
        throw error;
    }
}