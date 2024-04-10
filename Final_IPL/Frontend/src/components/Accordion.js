import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      {/* Accordion Div */}
      <div className="flex justify-center">
        <div>
          <div
            className="rounded-t-lg bg-gradient-to-b from-red-300 w-[1092px] h-[70px] hover:shadow-md hover:shadow-white hover:duration-200"
            onClick={toggleAccordion}
          >
            <div className="flex justify-between p-4 text-2xl font-semibold">
              <p className="text-white">{title}</p>
              <p>{isOpen ? "🔼" : "🔽"}</p>
            </div>
          </div>
          {isOpen && (
            <div className="rounded-b-lg bg-slate-300 w-[1092px] p-4">
              <p className="text-lg font-thin">{content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
