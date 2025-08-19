import {db} from "../config/firebaseConfig.js";

export const validatePerson = (person) =>
{
    if(!person)
        throw new Error("Dados não recebidos. Objeto person vazio.");

    if (typeof person.tipo_pessoa !== 'string' || !['PF', 'PJ', 'F'].includes(person.tipo_pessoa))
        throw new Error("Valor inválido para 'tipo_pessoa'. Deve ser 'PF', 'PJ' ou 'F'.");

    if(person.tipo_pessoa === 'PF')
    {
        if (!person.cpf || !person.nome)
            throw new Error("Dados incompletos. 'cpf' e 'nome' são obrigatórios para pessoas físicas.");
    }
    if(person.tipo_pessoa === 'PJ')
    {
        if (!person.cnpj || !person.nome_fantasia || !person.razao_social)
            throw new Error("Dados incompletos. 'cnpj', 'nome_fantasia', 'razao_social' são obrigatórios para pessoas jurídicas.");
    }
    if(person.tipo_pessoa === 'F')
    {
        if (!person.nome)
            throw new Error("Dados incompletos. 'nome' é obrigatório para funcionários." );
    }
}

export const retrievePerson = async (id) =>
{
    let resultado;
    try
    {
        resultado = await db.collection('pessoas').doc(id).get();
    }
    catch (error)
    {
        throw error;
    }

    if (!resultado.exists)
    {
        throw new Error('Pessoa não encontrada na base de dados.');
    }

    return {id: resultado.id, ...resultado.data()};
}

export const savePerson = async (person) =>
{
    if(!person)
        throw new Error("Dados não recebidos. Objeto person vazio.");

    try
    {
        await db.collection('pessoas').add({...person, criadoEm: new Date().toISOString()});
    }
    catch(error)
    {
        throw error;
    }
}