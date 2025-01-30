import express from 'express';

import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import router from './routers/index.js';


// Importar módulos email 
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';


const app = express();  

const __dirname = dirname(fileURLToPath(import.meta.url));  
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router) ; //router 

//Para mi public
app.use(express.static(join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;




//email
// Middleware para parsear el cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para recibir el formulario de contacto
app.post('/enviar-correo', async (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;

    // Crear un transporte para Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // O el servicio de correo que estés utilizando
        auth: {
            user: 'prueba@gmail.com', // Tu correo electrónico
            pass: '' // Tu contraseña o app password
        }
    });

    // Configurar el correo
    const mailOptions = {
        from: email, // El correo del usuario
        to: 'prueba@gmail.com', // El correo al que deseas recibir el mensaje
        subject: asunto, // Asunto del correo
        text: `Mensaje de: ${nombre}\nCorreo: ${email}\n\n${mensaje}` // Cuerpo del correo
    };

    try {
        // Enviar el correo
        await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
        res.status(500).send('Hubo un error al enviar el correo');
    }
});















app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });


