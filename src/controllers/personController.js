import {db} from '../config/firebaseConfig.js';
import {retrievePersonData, validatePerson} from "../models/personModel.js";
import {snapshotToArray} from '../utils/dbUtils.js';

export const getPerson = async (req, res) =>
{
    try {
        const {name, companyName, tradeName, cpf, cnpj, type, limit = 10, sortBy = 'nome', sortDirection = 'asc', cursor} = req.query;

        let query = db.collection('pessoas');

        if (type)
            query = query.where('tipo', '==', type);


        if (name) {
            query = query.where('nome', '>=', name).where('nome', '<=', name + '\uf8ff');
        }

        query = query.orderBy(sortBy, sortDirection);

        if (cursor)
            query = query.startAfter(cursor);

        query = query.limit(Number(limit));

        const snapshot = await query.get();

        if (snapshot.empty)
            return res.status(200).json({ data: [], nextCursor: null });

        const pessoas = snapshotToArray(snapshot);

        // 4. Determine the next cursor from the last document in the results
        const lastDoc = snapshot.docs[snapshot.docs.length - 1];
        const nextCursor = lastDoc ? lastDoc.data()[sortBy] : null;

        res.status(200).json({
            data: pessoas,
            nextCursor: nextCursor // Send the next cursor value to the frontend
        });

    } catch (error) {
        console.error("Erro ao buscar pessoas: ", error);
        res.status(500).send({ message: "Ocorreu um erro ao buscar as pessoas." });
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


export const postPerson = async (req, res) =>
{

    const person = req.body;
    //const createdBy = req.user;
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
            //criadoPor: createdBy.id
        });
    }
    catch(error)
    {
        console.error("Erro ao criar pessoa: ", error);
        return res.status(500).send({ message: "Ocorreu um erro ao criar pessoa.", error });
    }
    let tipo_usuario;

    if(person.tipo_pessoa==='PF' || person.tipo_pessoa==='PJ')
        tipo_usuario='C';
    else
        tipo_usuario=person.tipo_pessoa;

    let docRef

    try
    {
        docRef = await db.collection('usuarios').add({
            email: "",
            firebase_uid: "",
            tipo_usuario: tipo_usuario,
            ativo: false
        });
    }
    catch(error)
    {
        console.error("Erro ao criar pessoa: ", error);
        return res.status(500).send({ message: "Ocorreu um erro ao criar pessoa.", error });
    }

    return res.status(201).send({ message: `Pessoa criada com sucesso, use POST localhost:5000/user/${docRef.id}`, pessoaId: docRef.id});

};

export const putPerson = async (req, res) =>
{

};

export const patchPerson = async (req, res) =>
{

};

export const deletePerson = async (req, res) =>
{

};

export const deletePersonById = async (req, res) =>
{

};
