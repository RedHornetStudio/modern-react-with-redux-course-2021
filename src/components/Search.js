import React, { useEffect, useState } from 'react';

import wikipedia from '../apis/wikipedia';

const getData = async term => {
  const response = await wikipedia.get('', {
    params: {
      srsearch: term
    }
  }).catch(e => {
    console.log(`error in fetching data: ${e}`);
  })

  if(response) {
    console.log(response);
  }
};

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if(term) {
      getData(term);
    }
  }, [term]);

  return (
    <div className="search">
      <div className="ui form">
        <div className="field">
          <label>Enter Serach Term</label>
          <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Search;