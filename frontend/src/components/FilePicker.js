import React, { useEffect, useRef, useState } from "react";

import classes from "./FilePicker.module.css";

const FilePicker = (props) => {
  const [editProfile, setEditProfile] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [pickedFile, setPickedFile] = useState("");
  // const [previewImage, setPreviewImage] = useState();

  const pickedImageHandler = (event) => {
    let file;
    if (event.target.files && event.target.files.length === 1) {
      file = event.target.files[0];
      setPickedFile(file);
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPreviewFile(fileReader.result);
    };
  };

  const changeProfileHandler = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setPreviewFile(null);
    setPickedFile("");
    resetRef.current.click();
  };

  const inputRef = useRef();
  const resetRef = useRef();

  return (
    <section>
      <div className={classes.imageBox}>
        <div className={classes.imageDiv}>
          {previewFile && <img src={previewFile} alt="Preview" />}
        </div>
      </div>
      <div className={classes.imageEditInput}>
        {/* <div> */}
        <form>
          <input
            type="file"
            name="image"
            accept=".jpg, .png, .jpeg"
            onChange={pickedImageHandler}
            ref={inputRef}
          />
          <input type="reset" ref={resetRef}></input>
        </form>
      </div>
      <div className={classes.fileSectionBtn}>
        {pickedFile ? (
          <>
            <button>Save</button>
            <button onClick={cancelHandler}>Cancel</button>
          </>
        ) : (
          <button onClick={changeProfileHandler}>{props.profile ? 'Change Profile' : 'Change File'}</button>
        )}
      </div>
    </section>
  );
};

export default FilePicker;
