import React, { useEffect, useRef, useState } from "react";
import styles from "../css/contactCard.module.css";

const ContactCard = React.memo(
  ({
    id,
    firstName,
    lastName,
    status,
    setupdateData,
    createContact,
    setDeleteData,
  }) => {
    // State for managing edit mode and input fields
    const [editData, setEditData] = useState(null);
    const [deleteData, setDelete] = useState(null);
    const [firstname, setFirstName] = useState(firstName);
    const [lastname, setLastName] = useState(lastName);
    const [activeStatus, setActiveStatus] = useState(status);
    const [showWarn, setShowWarn] = useState(null);

    // Function to handle saving edited data
    const handelSave = () => {
      if (editData) {
        const updateData = {
          id: editData.id,
          firstName: firstname ? firstname : editData.firstName,
          lastName: lastname ? lastname : editData.lastName,
          status: activeStatus ? activeStatus : editData.status,
        };
        if (
          (createContact && firstname && lastname && activeStatus) ||
          !createContact
        ) {
          setupdateData(updateData);
          setEditData(null);
        } else {
          setShowWarn("All fields required..!");
        }
      }
    };

    // Update Redux state when a delete operation is requested
    useEffect(() => {
      if (deleteData) {
        setDeleteData(deleteData);
      }
    }, [deleteData]);

    // Initialize editData when creating a new contact
    useEffect(() => {
      if (createContact) {
        setEditData({ id: createContact });
      }
    }, [createContact]);

    // Reset warning message when input fields change
    useEffect(() => {
      if (firstname || lastname || activeStatus) {
        setShowWarn(null);
      }
    }, [firstname, lastname, activeStatus]);

    // Render the contact card
    return (
      <div
        className={`${styles.container} ${
          editData?.id === id ? styles.editClass : ""
        }`}
      >
        {/* Show warning message if required */}
        {showWarn && <div className={styles.showWarning}>{showWarn}</div>}
        <div className={styles.userdata}>
          <p>
            <span>First Name:</span>
            <input
              type="text"
              readOnly={editData?.id === id ? false : true}
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            <span>Last Name:</span>
            <input
              type="text"
              readOnly={editData?.id === id ? false : true}
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
        </div>
        <div className={styles.status}>
          <div className={styles.toggleActions}>
            <p>Status: {editData?.id !== id && <span>{activeStatus}</span>}</p>
            {/* Display status toggle options when in edit mode */}
            {editData?.id === id && (
              <div className={styles.StatusToggle}>
                {["active", "inactive"].map((e) => (
                  <label
                    key={e}
                    onChange={(e) => {
                      setActiveStatus(e.target.value);
                    }}
                  >
                    <span>{e}</span>
                    <input
                      type="radio"
                      name={"status"}
                      value={e}
                      defaultChecked={activeStatus === e}
                    />
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className={styles.buttonsDiv}>
            {/* Edit and Save button */}
            <button
              className={styles.editbtn}
              disabled={showWarn ? true : false}
              onClick={() =>
                editData?.id === id
                  ? handelSave()
                  : setEditData({ id, firstName, lastName, status })
              }
            >
              {editData?.id === id ? "Save" : "Edit"}
            </button>
            {/* Delete and Cancel button */}
            <button
              className={styles.deletebtn}
              onClick={() => {
                editData?.id === id && !createContact
                  ? setEditData(null)
                  : setDelete({ id });
              }}
            >
              {editData?.id === id ? "Cancel" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    );
  },
  // Custom comparison function for memoization
  (prevsProps, nextProps) => {
    const isEqual = JSON.stringify(prevsProps) === JSON.stringify(nextProps);
    return isEqual;
  }
);

export default ContactCard;
