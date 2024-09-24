import React from "react";
import LibraryText from "react-new-window";

function NewWindow({toRender}) {
  return (
    <LibraryText>
      {toRender}
    </LibraryText>
  );
}

export default NewWindow;
