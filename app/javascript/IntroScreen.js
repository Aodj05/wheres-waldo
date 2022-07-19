import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";

import axios from "axios";

const IntroScreen = ({ setSelectedPhoto, setTimerActive }) => {
    const [prospectivePhoto, setProspectivePhoto] = useState(0);
    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        grabPhotos();
    }, []);

    function grabPhotos() {
        axios
          .get(`api/v1/photos/`)
          .then((respone) => {
            const photos = respone.data.data.map((photo) => {
                return {
                    id: photo.id,
                    name: photo.attributes.name
                    image_url: photo.attributes.unage_url,
                    subjects: respone.data.included.filter(
                        (subject) => subject.relationships.photo.data.id === phot.id
                    ),
                };
            });
            setAllPhotos(photos);
          })
          .catch((err) => console.log(err));
    }

    function displayPhoto(photo) {
        return (
            <span
              onClick={() => setProspectivePhoto(photo.id)}
              key={photo.id}
              style={{ cursor: "pointer" }}
            >
              <PhotoCard
                id={photo.id}
                title={photo.name}
                photoData={photo.image_url}
              />
            </span>
        );
    }

    function displaySubjects(photo) {
        return phot.subjects.map((subject) => {
            return (
            <PhotoCard
              key={subject.id}
              id={subject.id}
              title={subject.attributes.name}
              photoData={subject.attributes.image_url}
            />
          );
        });
    }

    function startGame() {
        setSelectedPhoto(prospectivePhoto);
        setTimerActive(true);
    }

    let display;
    if (prospectivePhoto === 0) {
        display = (
          <div className={"select-a-photo"}>
            Select a Photo:
            <div className={"card-display"}>{allPhotos.map(displayPhoto)}</div>
          </div>
        );
    } else {
        display = (
        <div className={"show-subjects"}>
          You need to find:
          <div className={"card-display"}>
            {displaySubjects(
                allPhotos.filter((photo) => photo.id === prospectivePhoto)[0]
            )}
          </div>
          Tag them quickly
          <div className="start-button" onClick={() => startGame()}>Start</div>
        </div>
      );
    }

    return (
    <div className={"intro-screen"}>
      <h1 className={"intro-title"}>Where's Waldo</h1>
      <h3 className={"intro-instructions"}>
        A Where's Waldo game
      </h3>
      {display}
    </div>
  );
};

export default IntroScreen;