import React, { useEffect, useState } from "react";
import styles from "../css/index.module.css"; // Import your module CSS
import Header from "../../layout/header/components";
import ContactCard from "./contactCrad";
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
  const [contactData, setContactData] = useState();
  const [updateData, setupdateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [createContact, setCreateContact] = useState(null);
  useEffect(() => {
    setContactData(contactstore);
  }, [contactstore]);

  useEffect(() => {
    if (updateData) {
      contactstore = contactstore.map((e) =>
        e.id == updateData.id ? updateData : e
      );
      setupdateData(null);
    }
  }, [updateData]);

  useEffect(() => {
    if (deleteData) {
      contactstore = contactstore.filter((e) => e.id !== deleteData.id);
      setDeleteData(null);
      setCreateContact(null);
    }
  }, [deleteData]);

  const handleCreate = () => {
    contactstore.push({ id: contactstore.length + 1 });
    setCreateContact(contactstore.length);
  };

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
