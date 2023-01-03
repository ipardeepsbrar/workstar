import React, { useState } from "react";

import classes from "./ImagePicker.module.css";

const ImagePicker = (props) => {
  const [pickedFile, setPickedFile] = useState();
  // const [previewImage, setPreviewImage] = useState();

  const pickedImageHandler = (event) => {
    let file;
    if (event.target.files && event.target.files.length === 1) {
      file = event.target.files[0];
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPickedFile(fileReader.result);
    };
  };

  return (
    <>
      <div className={classes.imageBox}>
        <div className={classes.imageDiv}>
        {pickedFile && <img src={pickedFile} alt="Preview" />}
        </div>
      </div>
      {props.edit && (
        <div className={classes.imageEditBtn}>
          <input
            type="file"
            name="image"
            accept=".jpg, .png, .jpeg"
            onChange={pickedImageHandler}
          />
        </div>
      )}
    </>
  );
};

export default ImagePicker;
