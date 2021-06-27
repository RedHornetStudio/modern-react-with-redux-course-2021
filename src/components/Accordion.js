import React, { useState } from 'react';

const onTitleClick = (index, setActiveIndex) => {
  console.log(`Title with index ${index} clicked`);
  setActiveIndex(index);
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const itemsList = items.map((item, index) => {
    const active = index === activeIndex ? ' active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title${active}`} onClick={() => {onTitleClick(index, setActiveIndex)}}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="accordion ui styled">
      {itemsList}
    </div>
  );
};

export default Accordion;