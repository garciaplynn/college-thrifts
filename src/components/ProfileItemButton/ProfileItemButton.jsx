import React from "react";
import styles from "./ProfileItemButton.module.scss";

const ProfileItemButton = (props) => {

  const { clickedFunction, item } = props

  return (
    <>
      <button type="button" onClick={() => clickedFunction(item.id)}>
      <img
        src={item.strImage}
        alt={item.strType}
      />
      </button>
    </>
  );
};

export default ProfileItemButton;
