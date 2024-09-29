import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db, auth } from "./config/firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

import ContactCard from "./components/ContactCard";

import AddandUpdate from "./components/AddUpdate";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundcontact";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage errors

  useEffect(() => {
    // Sign in the user anonymously
    signInAnonymously(auth)
      .then(() => {
        console.log("Signed in anonymously");
      })
      .catch((err) => {
        console.error("Anonymous sign-in failed:", err);
        setError(err);
        setLoading(false);
      });

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, proceed to fetch contacts
        fetchContacts();
      } else {
        // User is signed out
        setLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoading(false);

      const filteredContacts = contactsList.filter((contact) =>
        contact.Name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  const fetchContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsList);
        setLoading(false);
        return contactsList;
      });
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <IoSearch className="ml-1 absolute text-3xl text-white" />
            <input
              onChange={filterContacts}
              type="text"
              className="border flex-grow h-10 border-white bg-transparent rounded-md pl-9 text-white"
            />
          </div>
          <CiCirclePlus
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddandUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </>
  );
}

export default App;
