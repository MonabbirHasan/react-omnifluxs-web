import React, { createContext, useState } from "react";

const MenuContext = createContext();

export function AppContext(props) {
  const [Profile_pages, setProfilePage] = useState("profile");
  const updatePageName = () => {
    setProfilePage("admin_profile");
  };
  return (
    <MenuContext.Provider value={{ Profile_pages, updatePageName }}>
      {props.children}
    </MenuContext.Provider>
  );
}
export default MenuContext;
