import React from "react";

const DialogBox = ({ options, show, coords, makeGuess, closeDialog }) => {
    function dialogOption(option){
        return(
            <div className="dialog-option" key={option.id} onClick={() => makeGuess(option.name, coords[0], coords[1])}>
              {option.name}
            </div>
          )
    }

    const visible = {
        display: `inline-block`,
        left: coords[0] + 20,
        bottom: coords[1] + 20,
    };

    const invisible = {
        display: `inline-block`,
        left: coords[0] + 20,
        bottom: coords[1] + 20,
    };

    return (
    <div style={show ? visible : invisible} className="dialog-box">
      {options.map(dialogOption)}
      <div className="dialog-option cancel-button" onClick={() => closeDialog()}>
        Cancel
      </div>
    </div>
    );
};

export default DialogBox;