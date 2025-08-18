import {getUserData} from "../utils/dbUtils.js";

export const isAdmin = async (req, res, next) =>
{
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    if (!idToken)
        return res.status(401).send({ message: 'Unauthorized. Nenhum token fornecido.' });
    let userData;
    try
    {
        userData = await getUserData(idToken);
    }
    catch (error)
    {
        console.log(error)
        return res.status(400).send({ message: error });
    }


    if (userData.tipo_usuario !== 'A')
        return res.status(403).send({ message: 'Forbidden. Acesso negado.' });

    req.admin = userData;
    next();
};

export const isCliente = async (req, res, next) =>
{
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    if (!idToken)
        return res.status(401).send({ message: 'Unauthorized. Nenhum token fornecido.' });

    let userData;
    try
    {
        userData = await getUserData(idToken);
    }
    catch (error)
    {
        return res.status(400).send({ message: error });
    }

    if (userData.tipo_usuario !== 'C')
        return res.status(403).send({ message: 'Forbidden. Acesso negado.' });

    req.cliente = userData;
    next();
};

export const isFuncionario = async (req, res, next) =>
{
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    if (!idToken)
        return res.status(401).send({ message: 'Unauthorized. Nenhum token fornecido.' });

    let userData;
    try
    {
        userData = await getUserData(idToken);
    }
    catch (error)
    {
        return res.status(400).send({ message: error });
    }

    if (userData.tipo_usuario !== 'F')
        return res.status(403).send({ message: 'Forbidden. Acesso negado.' });

    req.funcionario = userData;
    next();
};
