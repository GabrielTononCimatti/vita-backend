import {db} from "../config/firebaseConfig.js";

export const validateProject = (project) =>
{

}

export const retrieveProject = async (id) =>
{
    let resultado;
    try
    {
        resultado = await db.collection('projetos').doc(id).get();
    }
    catch (error)
    {
        throw error;
    }

    if (!resultado.exists)
    {
        throw new Error('Projeto não encontrado na base de dados.');
    }

    return {id: resultado.id, ...resultado.data()};
}

export const saveProject = async (project) =>
{
    if(!project)
        throw new Error("Dados não recebidos. Objeto project vazio.");

    try
    {
        await db.collection('projetos').add({...project, criadoEm: new Date().toISOString()});
    }
    catch(error)
    {
        throw error;
    }
}

export const editProject = async (project) =>
{
    try
    {
        let oldProject = await retrieveProjectById(project.id);
        let {id, ...newProject} = {...oldProject, ...project};
        validateProject(newProject);
        await db.collection('projects').doc(id).set(newProject);
    }
    catch(error)
    {
        throw error;
    }
}