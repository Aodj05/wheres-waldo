import React, { useState } from "react";
import DialogBox from "./DialogBox";
import TargetBox from "./TargetBox";

const Photo = ({photoData, allSubjects, tryCoords }) => {
    const [clickCoords, setClickCoords] = useState([0, 0]);
    const [showDialog, setShowDialog] = useState(false);

    function createDialogBox(click) {
        if (!showDialog) {
            const rect = click.target.getBoundingClientRect();
            const x = click.clientX - rect.left;
            const y = rect.bottom - click.clientY;

            setClickCoords([x, y]);
        }
        setShowDialog
    }

    function makeGuess(name, x, y) {
        tryCoords(name, x, y);
        closeDialog();
    }

    function closeDialog() {
        setShowDialog(false);
    }

    function displayTargetBox(subject) {
        return (
            <TargetBox
              key={subject.id}
              top={subject.targetBox.top}
              bottom={subject.targetBox.bottom}
              left={subject.targetBox.left}
              right={subject.targetBox.right}
            />
        );
    }

    return (
        <div className="photo-container" data-testid="photo-container">
          {photoData && (
            <img
              className="photo"
              src={`images/${photoData}`}
              onClick={createDialogBox}
            />
          )}
          <DialogBox
            options={allSubjects.filter(
                (subj) => !foundSubjects.map((subj) => subj).includes(subj)
            )}
            show={showDialog}
            coords={clickCoords}
            makeGuess={makeGuess}
            closeDialog={closeDialog}
          />
          {foundSubjects.map(displayTargetBox)}
        </div>
    );
};

export default Photo;