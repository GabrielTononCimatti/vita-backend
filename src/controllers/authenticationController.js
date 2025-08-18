import {getUserData} from "../utils/dbUtils.js";

export const login = async (req, res) =>
{
    const idToken = req.headers.authorization?.split('Bearer ')[1];

    if(!idToken)
        return res.status(401).send({message: 'Acesso não autorizado. Token não fornecido.'});

    let userData;

    try
    {
        userData = await getUserData(idToken);
    }
    catch (error)
    {
        return res.status(400).send({ message: error });
    }

    return res.status(200).send({ message: 'Login bem-sucedido!', user: userData });
};