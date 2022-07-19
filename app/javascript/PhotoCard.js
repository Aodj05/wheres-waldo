import React from 'react';

const PhotoCard = ({ id, title, photoData }) => {
    return (
        <div className={'photo-card'}>
          <img className={'card-image'} src={`/images/${photoData}`} />
          <h3 className={'card-title'}>{title}</h3>
        </div>
    );
}

export default PhotoCard;