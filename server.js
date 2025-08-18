import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//import de rotas
import authenticationRoutes from './src/routes/authenticationRoutes.js';
//import documentRoutes from './src/routes/documentRoutes.js';
import personRoutes from './src/routes/personRoutes.js';
//import projectRoutes from './src/routes/projectRoutes.js';
//import stageRoutes from './src/routes/stageRoutes.js';
import userRoutes from './src/routes/userRoutes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
const PORT = process.env.PORT || 5000;


server.use(cors());
server.use(express.json());

server.use('/authentication', authenticationRoutes);
//server.use('/document', documentRoutes);
//server.use('/notification', notificationRoutes);
server.use('/person', personRoutes);
//server.use('/project', projectRoutes);
//server.use('/stage', stageRoutes);
server.use('/user', userRoutes);


server.get('/', (request, response) => {
    const filePath = path.join(__dirname, 'documentation.html');
    response.sendFile(filePath);
});

server.listen(PORT, () => {
    console.log("\n\n ╔════════════════════════════════╗");
    console.log(` ║ Servidor rodando na porta ${PORT} ║`);
    console.log(` ║     http://localhost:${PORT}/     ║`);
    console.log(" ╚════════════════════════════════╝\n\n");
});