export const validateUser = (user) =>
{
    if(!user)
        throw new Error("Dados não recebidos. Objeto user vazio.");

    if (!user.email || !user.firebase_uid || !user.tipo_usuario || !user.pessoa_id)
        throw new Error("Dados incompletos. 'email', 'firebase_uid', 'tipo_usuario' e 'pessoa_id' são obrigatórios.");

    if (typeof user.tipo_usuario !== 'string' || !['C', 'F', 'A'].includes(user.tipo_usuario))
        throw new Error("Valor inválido para 'tipo_usuario'. Deve ser 'C', 'F' ou 'A'.");
}