import React, { useEffect, useState } from "react";
import styles from "../css/index.module.css"; // Import your module CSS
import Header from "../../layout/header/components";
import ContactCard from "./contactCrad";

// Sample initial contact data
let contactstore = [
  {
    id: 1,
    firstName: "Jhony",
    lastName: "denial",
    status: "active",
  },
  {
    id: 2,
    firstName: "Sins",
    lastName: "dany",
    status: "inactive",
  },
];

const Contact = () => {
  // State for managing contact data
  const [contactData, setContactData] = useState();
  const [updateData, setupdateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [createContact, setCreateContact] = useState(null);

  // Initialize contact data from the sample store
  useEffect(() => {
    setContactData(contactstore);
  }, [contactstore]);

  // Update contact data when an update operation is requested
  useEffect(() => {
    if (updateData) {
      contactstore = contactstore.map((e) =>
        e.id === updateData.id ? updateData : e
      );
      setupdateData(null);
    }
  }, [updateData]);

  // Update contact data when a delete operation is requested
  useEffect(() => {
    if (deleteData) {
      contactstore = contactstore.filter((e) => e.id !== deleteData.id);
      setDeleteData(null);
      setCreateContact(null);
    }
  }, [deleteData]);

  // Function to handle creating a new contact
  const handleCreate = () => {
    contactstore.push({ id: contactstore.length + 1 });
    setCreateContact(contactstore.length);
  };

  // Render the component
  return (
    <>
      <Header currentPage={"Contact"} />
      <div className={styles.container}>
        <div className={styles.createContact}>
          <button onClick={() => handleCreate()}>Create Contact</button>
        </div>
        {contactData && contactData.length > 0 ? (
          contactData.map((contact) => {
            return (
              <ContactCard
                {...contact}
                createContact={createContact}
                setDeleteData={setDeleteData}
                handleCreate={handleCreate}
                setupdateData={setupdateData}
                key={contact.id}
              />
            );
          })
        ) : (
          <div className="notFound">
            <p>No Contacts Found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
