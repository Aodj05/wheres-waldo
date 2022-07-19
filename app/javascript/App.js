import React, { useState, useEffect, Fragment } from 'react';

import IntroScreen from './IntroScreen';
import GameOverScreen from './GameOverScreen';
import Photo from './Photo';
import Timer from './Timer';

const App = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(0);

    const [subjectData, setSubjectData] = useState([]);
    const [photoInfo, setPhotoInfo] = useState([]);

    const [totalSubjectCount, setTotalSubjectCount] = useState(0);
    const [founSubjects, setFoundSubjects] = useState([]);

    const [timerActive, setTimerActive] = useState(false);
    const [timerValue, setTimerValue] = useState(0);

    useEffect(() => {
        grabSubjectData(SelectedPhoto);
        grabPhotoInfo(SelectedPhoto);
    }, [selectedPhoto]);

    useEffect(() => {
        if (isGameOver()) {
            setTimerActive(false);
          }
        }, [founSubjects.length]);

    function isGameOver() {
        if (
            founSubjects.length > 0 &&
            founSubjects.length === totalSubjectCount
            ) {
            return true;
        } else {
            return false;
        }
    }

    function resetGame() {
        setFoundSubjects([]);
        setTimerValue(0);
        setSelectedPhoto(0);
    }

    function grabSubjectData(photo_id) {
        
    }
    })
}