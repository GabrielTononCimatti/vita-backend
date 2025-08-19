import {db} from "../config/firebaseConfig.js";

export const validateStage = (stage) =>
{

}

export const retrieveStage = async (id) =>
{
    let resultado;
    try
    {
        resultado = await db.collection('etapas').doc(id).get();
    }
    catch (error)
    {
        throw error;
    }

    if (!resultado.exists)
    {
        throw new Error('Etapa não encontrada na base de dados.');
    }

    return {id: resultado.id, ...resultado.data()};
}

export const saveStage = async (stage) =>
{
    if(!stage)
        throw new Error("Dados não recebidos. Objeto stage vazio.");

    try
    {
        await db.collection('etapas').add({...stage, criadoEm: new Date().toISOString()});
    }
    catch(error)
    {
        throw error;
    }
}