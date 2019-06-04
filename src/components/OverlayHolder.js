import React from 'react';

import './OverlayHolder.scss';

const OverlayHolder = ({ children }) => (<div className="OverlayHolder"><div className="OverlayHolder-container">{ children }</div></div>)

export default OverlayHolder;