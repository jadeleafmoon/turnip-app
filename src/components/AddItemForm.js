import React, { Image } from "react";
import SellFirebase from "./SellFirebase";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = (props) => {
  const {
    handleClickAddItem,
    handleAddItem,
    itemToAdd,
    setItemToAdd,
    setDisplayAddItem,
    setCurrentView,
    handleClickCancelAddItem,
    currentUser,
  } = props;

  const [imageToUpload, setImageToUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  

  const uploadImage = () => {
    if (imageToUpload === null) return;
    setIsLoading(true);

    const imageRef = ref(storage, `images/${imageToUpload.name + uuidv4()}`);

    uploadBytes(imageRef, imageToUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        setIsLoading(false);
      });
    });
  };

  const handleDone = () => {
    if (imageToUpload === null) return;
    

    setIsLoading(true);

    const imageRef = ref(storage, `images/${imageToUpload.name + uuidv4()}`);

    uploadBytes(imageRef, imageToUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        itemToAdd.imageUrl = url;
        handleClickAddItem(itemToAdd);
        setIsLoading(false);
      });
    });

    handleClickAddItem(itemToAdd);
  };

  return (
    <section className="add-item-section">
      <h3 className="subtitle">What would you like to sell?</h3>

      <div>
        <p>
          <b>Item name:</b>
        </p>
        <input
          type="text"
          name="name"
          value={itemToAdd.name}
          onChange={(e) => handleAddItem(e)}
          required
        />
      </div>

      <div>
        <p>
          <b>Price:</b>
        </p>
        <input
          type="text"
          name="price"
          value={itemToAdd.price}
          onChange={(e) => handleAddItem(e)}
          required
        />
      </div>

      <div>
        <p>
          <b>Description:</b>
        </p>
        <textarea
          name="description"
          value={itemToAdd.description}
          onChange={(e) => handleAddItem(e)}
          required
        />
      </div>

      <div className="upload-container">
        <b>Upload an Image</b>
        <input
          type="file"
          onChange={(event) => {
            setImagePreview(URL.createObjectURL(event.target.files[0]));
            setImageToUpload(event.target.files[0]);
          }}
        />
      </div>
      <div>
        {imagePreview && <img className="image-preview" src={imagePreview} alt="preview"/>}
      </div>
      <div className="bottom-buttons-bar">
        <button onClick={handleClickCancelAddItem}>Cancel</button>
        <button onClick={() => handleDone()}>Done</button>
      </div>
    </section>
  );
};

export default AddItemForm;
