import React from 'react';

const langs = ['it', 'en', 'de'];

const Language = ({ next }) => {
  return (
    <div>
      <h1>Language</h1>
      {langs.map(lang => (
        <button onClick={next}>{lang}</button>
      ))}
    </div>
  );
};

export default Language;
