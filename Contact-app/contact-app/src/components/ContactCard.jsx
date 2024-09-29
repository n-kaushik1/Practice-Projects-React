import { IoIosContact } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddandUpdate from "./AddUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex justify-between bg-yellow items-center p-2 rounded-lg"
      >
        <div className="flex gap-1">
          <IoIosContact className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.Name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <FaUserEdit onClick={onOpen} className="cursor-pointer" />
          <MdDelete
            className="text-orange cursor-pointer"
            onClick={(id) => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddandUpdate
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
