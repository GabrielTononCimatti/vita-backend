import {db} from '../config/firebaseConfig.js';
import {retrievePersonData, validatePerson} from "../models/personModel.js";

export const postPerson = async (req, res) =>
{

    const person = req.body;
    const createdBy = req.user;
    try
    {
        validatePerson(person);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(400).send({message:error.message});
    }
    try
    {
        const docRef = await db.collection('pessoas').add({
            ...person,
            criadoEm: new Date().toISOString(),
            criadoPor: createdBy.id
        });
        return res.status(201).send({ message: `Pessoa criada com sucesso com o ID: ${docRef.id}`, pessoaId: docRef.id});
    }
    catch(error)
    {
        console.error("Erro ao criar pessoa: ", error);
        return res.status(500).send({ message: "Ocorreu um erro ao criar pessoa.", error });
    }
};

export const getPersonById = async (req, res) =>
{
    let person;
    try
    {
        person = await retrievePersonData(req.params.id);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(400).send({message:error.message});
    }
    return res.status(200).send(person);
}