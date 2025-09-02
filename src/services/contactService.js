import Contact from "../models/contact.js"

const createContact=async(data)=>{
    return await Contact.create(data);
}
const getAllContacts=async()=>{
    return await Contact.find();
}
const editContact=async(id,data)=>{
    return await Contact.findByIdAndUpdate(id,data,{new:true});
}
const deleteContact=async(id)=>{
    return await Contact.findByIdAndDelete(id);

}
export default {createContact,getAllContacts,editContact,deleteContact}