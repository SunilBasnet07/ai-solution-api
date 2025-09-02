import express from "express"
import { createContact, deleteContact, editContact, getAllContacts } from "../controllers/contactController.js"
import auth from "../middlewares/auth.js";

const router = express.Router()

router.post('/',auth,createContact);
router.get('/',getAllContacts);
router.put('/:id',editContact);
router.delete('/:id',deleteContact);

export default router