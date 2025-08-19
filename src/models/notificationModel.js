import {db} from "../config/firebaseConfig.js";

export const validateNotification = (notification) =>
{

}

export const retrieveNotificationData = async (id) =>
{
    let resultado;
    try
    {
        resultado = await db.collection('notificacoes').doc(id).get();
    }
    catch (error)
    {
        throw error;
    }

    if (!resultado.exists)
    {
        throw new Error('Notificação não encontrada na base de dados.');
    }

    return {id: resultado.id, ...resultado.data()};
}

export const saveNotification = async (notification) =>
{
    if(!notification)
        throw new Error("Dados não recebidos. Objeto notification vazio.");

    try
    {
        await db.collection('notificacoes').add({...notification, criadoEm: new Date().toISOString()});
    }
    catch(error)
    {
        throw error;
    }
}