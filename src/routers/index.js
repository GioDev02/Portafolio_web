import { Router } from "express";
import { title } from "process";
const router = Router(); ; 
router.get('/', (req, res) => { res.render('index',{title:'Portafolio Profesional'})});  
 router.get('/about', (req, res) => { res.render('SobreMi',{title:'Sobre mí '})});
// router.get('/contact', (req, res) => { res.render('Contactanos',{title:'Contacto'})});
// router.get('/platos',(req,res)=>{res.render('Platos',{title:'Platos'})});
router.get('/skills', (req, res) => { res.render('Skills',{title:'Skills '})});

router.get('/contacto', (req, res) => { res.render('Contacto',{title:'Contacto '})});









export default router ; 





