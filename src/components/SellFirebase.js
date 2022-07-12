import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

// {/* <div key={uuidv4()}>{ item.name }</div> */}

function SellFirebase(props) {

  const { itemToAdd, setItemToAdd } = props;

  const [imageToUpload, setImageToUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = () => {
    if (imageToUpload === null) return;
    setIsLoading(true);
    const imageRef = ref(storage, `images/${imageToUpload.name + uuidv4()}`); // ref means where to upload the files

    // make a reference to all the files (images) in the images/ folder on firebase

    // uploadBytes(where to upload, the image you want to upload)
    // returns a Promise
    uploadBytes(imageRef, imageToUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        setIsLoading(false);
      });
    });
  };

  const handleTest = () => {
    console.log("\n 🍎 imageList:", imageList);
  };

  useEffect(() => {
    // list all returns all images in that path
    listAll(imageListRef).then((response) => {
      // setIsLoading(true);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // same as setImage([...imageList, url])
          setImageList((prev) => [...prev, url]);
          // setIsLoading(false);

        });
      });
    });
  }, []);

  return (
    <div className="container">
      <p>Hello</p>
      <p>Loading {String(isLoading)}</p>
      <input
        type="file"
        onChange={(event) => {
          setImageToUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image ☝️</button>
      <button onClick={handleTest}>Test</button>

      {imageList.map((url) => {
        return <img src={url} key={uuidv4()} alt="uploaded photos" />;
      })}
    </div>
  );
}

export default SellFirebase;
