import {auth, db} from '../config/firebaseConfig.js';
import {validateUser, saveUser} from "../models/userModel.js";

export const getUser = async (req, res) =>
{

};

export const getUserById = async (req, res) =>
{

}

export const postUser = async (req, res) =>
{
    const user = req.body;
    const createdBy = req.user;
    try
    {
        validateUser(user);
        saveUser(user);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(400).send({message:error.message});
    }

    return res.status(201).send({message: `Usuário criado com sucesso com o ID: ${docRef.id}`});
    try
    {

        await db.collection('pessoas').add({
            ...user,
            criadoEm: new Date().toISOString(),
            criadoPor: createdBy.id
        });

    }
    catch (error)
    {
        console.error("Erro ao criar usuário: ", error);
        return res.status(500).send({ message: "Ocorreu um erro ao criar o usuário.", error});
    }

};

export const putUser = async (req, res) =>
{

};

export const patchUser = async (req, res) =>
{

};

export const deleteUser = async (req, res) =>
{

};

export const deleteUserById = async (req, res) =>
{

};




/*export const completeRegistration = async (req, res) =>{
    const {email, password, pessoaId, tipo_usuario} = req.body;
    try {
        const pessoaDoc = await db.collection('pessoas').doc(pessoaId).get();
        if (!pessoaDoc.exists) {
            return res.status(404).send({ message: "Pessoa não encontrada ou link de convite inválido." });
        }
        const usuarioExistente = await db.collection('usuarios').where('pessoaId', '==', pessoaId).get();
        if (!usuarioExistente.empty) {
            return res.status(400).send({ message: "Esta pessoa já completou seu cadastro de usuário." });
        }

        const userRecord = await auth.createUser({
            email: email,
            password: password
        });

        await db.collection('usuarios').add({
            email: email,
            firebase_uid: userRecord.uid,
            pessoaId: pessoaId,
            tipo_usuario: tipo_usuario,
        });

        return res.status(201).send({ message: 'Usuário cadastrado com sucesso! Você já pode fazer o login.' });

    } catch (error) {
        console.error("Erro ao completar registro: ", error);
        // Códigos de erro específicos do Firebase Auth
        if (error.code === 'auth/email-already-exists') {
            return res.status(400).send({ message: "Este email já está em uso por outra conta." });
        }
        return res.status(500).send({ message: 'Ocorreu um erro no servidor.' });
    }

};*/