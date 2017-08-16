import React from 'react';

export default props => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={ "https://maps.google.com/?q=" + props.location[0] + "," + props.location[1] }>
      <button type="button" className="btn btn-info">Open In google Maps!</button>
    </a>
  </div>
);
