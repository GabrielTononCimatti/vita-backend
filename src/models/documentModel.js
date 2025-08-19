import {db} from "../config/firebaseConfig.js";

export const validateDocument = (document) =>
{
    if(!document)
        throw new Error("Dados não recebidos. Objeto document vazio.");

    if(!document.nome_arquivo || typeof document.nome_arquivo !== 'string')
        throw new Error("Dados incompletos. 'nome_arquivo' é obrigatório.");

    if(!document.descricao || typeof document.descricao !== 'string')
        throw new Error("Dados incompletos. 'descricao' é obrigatório.");

    if(!document.firebase_url || typeof document.firebase_url !== 'string')
        throw new Error("Dados incompletos. 'firebase_url' é obrigatório.");

    if(!document.tamanho_bytes || typeof document.tamanho_bytes !== 'number')
        throw new Error("Dados incompletos. 'tamanho_bytes' é obrigatório.");

    if(!document.person_id || typeof document.person_id !== 'string')
        throw new Error("Dados incompletos. 'person_id' é obrigatório.");

    if(!document.etapa_id || typeof document.etapa_id !== 'string')
        throw new Error("Dados incompletos. 'etapa_id' é obrigatório.");
}

export const retrieveDocumentData = async (id) =>
{
    let resultado;
    try
    {
        resultado = await db.collection('documentos').doc(id).get();
    }
    catch (error)
    {
        throw error;
    }

    if (!resultado.exists)
    {
        throw new Error('Documento não encontrado na base de dados.');
    }

    return {id: resultado.id, ...resultado.data()};
}

export const saveDocument = async (document) =>
{
    if(!document)
        throw new Error("Dados não recebidos. Objeto document vazio.");

    try
    {
        await db.collection('documentos').add({...document, criadoEm: new Date().toISOString()});
    }
    catch(error)
    {
        throw error;
    }
}