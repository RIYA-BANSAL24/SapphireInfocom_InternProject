import express from 'express';
import { saveSentEmails, getEmails } from '../controller/email-Controller.js';


const routes = express.Router();


routes.post('/save', saveSentEmails);
routes.get('/enails/:type', getEmails);
routes.post('/save-draft',saveSentEmails);

export default routes; 