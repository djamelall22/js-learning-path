import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6.00PM</span>
              <div className="text">Today at 6.00PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<app />, document.getElementById('root'));
