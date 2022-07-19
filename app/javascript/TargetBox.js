import React from "react";

const TargetBox = ({ top, bottom, left, right }) => {
    const sides = {
        bottom: bottom + 10,
        left: left + 10,
        width: right - left,
        height: top - bottom,
    }

    return (
        <div className="target-box" style={sides} data-testid="target-box"></div>
    );
}

export default TargetBox;