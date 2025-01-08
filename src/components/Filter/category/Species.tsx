import React from "react";
import FilterBTN from "../FilterBTN";

type SpeciesProps = {
    updateSpecies:  React.Dispatch<React.SetStateAction<string>>;
    updatePageNumber:  React.Dispatch<React.SetStateAction<number>>;
}

const Species: React.FC<SpeciesProps> = ({ updateSpecies, updatePageNumber }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-two-with-arrow-always-open'>
<button className='text-lg rounded-lg w-24 text-white bg-black accordion-toggle group inline-flex items-center justify-between leading-8 transition duration-500 hover:text-green-600 accordion-active:text-indigo-600 always-open'>
<h5>Species</h5>
<svg className='text-green-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
</svg>
</button>
<div id='basic-collapse-two-with-arrow-always-open' className='accordion-content  w-full px-0 overflow-hidden  pr-4' aria-labelledby='basic-heading-two-with-arrow-always-open'>
<div className="">
{species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item} status={""}              />
            );
          })}
</div>
</div>
</div>

  );
};

export default Species;