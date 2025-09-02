import contactService from "../services/contactService.js";

const createContact = async (req, res) => {
    const data = req.body;
   
    try {
        const contactData = await contactService.createContact(data);
        res.json(contactData)
    } catch (error) {
        console.log(error?.message)
    }

}
const getAllContacts = async (req, res) => {
  
    try {
        const contactDatas = await contactService.getAllContacts();
        res.json(contactDatas)
    } catch (error) {
        console.log(error?.message)
    }

}
const editContact = async (req, res) => {
  const id = req.params.id
  const data= req.body
    try {
        const contactDatas = await contactService.editContact(id,data);
        res.json(contactDatas)
    } catch (error) {
        console.log(error?.message)
    }

}
const deleteContact = async (req, res) => {
  const id = req.params.id
    try {
        await contactService.deleteContact(id);
        res.json("Delete Seccessfull")
    } catch (error) {
        console.log(error?.message)
    }

}
export {createContact,getAllContacts,editContact,deleteContact}