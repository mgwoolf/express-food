import React from 'react';

const Loading = ({ screenReaderText = "Loading" }) => {
    return (<div className="spinner-border" role="status">
              <span className="sr-only">{ screenReaderText }</span>
            </div>);
}

export default Loading;
