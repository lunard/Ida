import React from 'react';

import langSrc from '../assets/lang.svg';

const langs = ['Italiano', 'English', 'Deutsch'];

const Language = ({ next }) => {
  return (
    <div className="language-page" style={{backgroundImage: `url('${langSrc}')`}}>
      <div className="language-buttons">
        {langs.map(lang => (
          <button className="button-language" key={lang} onClick={next}>
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Language;
