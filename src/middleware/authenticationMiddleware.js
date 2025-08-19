import {tokenToId} from "../utils/dbUtils.js";
import {retrieveUserData} from "../models/userModel.js";

export const checkPermission = async (req, res, next) =>
{
    let id, userData, token;
    token = req.headers.authorization?.split('Bearer ')[1];
    id = tokenToId(token);

    try
    {
        userData = await retrieveUserData(id);
    }
    catch (error)
    {
        console.log(error)
        return res.status(400).send({ message: error });
    }

    if(isAdmin(userData))
        next();

    return res.status(403).send({ message: 'Forbidden. Acesso negado.' });
}


export const isAdmin = (userData) =>
{
    return userData.tipo_usuario === 'A';
};

export const isCliente = (userData) =>
{
    return userData.tipo_usuario === 'C';
};

export const isFuncionario = (userData) =>
{
    return userData.tipo_usuario === 'C';
};
