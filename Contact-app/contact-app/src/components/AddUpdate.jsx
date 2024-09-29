import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const conatctsSchemeValidation = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email.").required("Email is Required"),
});

const AddandUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={conatctsSchemeValidation}
          initialValues={
            isUpdate
              ? {
                  Name: contact.Name,
                  email: contact.email,
                }
              : {
                  Name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name</label>
              <Field name="Name" className="border h-10" />
              <div className="text xs text-red-500">
                <ErrorMessage name="Name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10" />
              <div className="text xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button type="submit" className="self-end bg-orange px-3 py-1">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdate;
