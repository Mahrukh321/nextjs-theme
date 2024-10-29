"use client";
import { accordionData2 } from "../../data/Data";
import { useState } from "react";
const AccordionSection2 = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(1);

  const handleItemClick = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };
  return (
    <div className="rv-35-faq-container">
      <div className="accordion" id="accordionExample">
        {accordionData2.map((item) => (
          <div
            key={item.id}
            className={`rv-accordion-item rv-35-accordion-item ${
              item.id === expandedItem ? "open" : ""
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="rv-accordion-item-header rv-35-accordion-header">
              <h2 className="mb-0">{item.question}</h2>
              <span className="rv-accordion-item-expand-icon"></span>
            </div>
            <p className="rv-accordion-item-body">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AccordionSection2;
