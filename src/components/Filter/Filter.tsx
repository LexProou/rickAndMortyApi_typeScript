
import Gender from "../Filter/category/Gender";
import Species from "../Filter/category/Species";
import Status from '../Filter/category/Status';

import '../../input.css'
import '../../output.css'

type FilterProps = {
    pageNumber: number
    updatePageNumber: React.Dispatch<React.SetStateAction<number>>;
    updateStatus: React.Dispatch<React.SetStateAction<string>>;
    updateGender: React.Dispatch<React.SetStateAction<string>>;
    updateSpecies: React.Dispatch<React.SetStateAction<string>>;
    status: string
};

const Filter: React.FC<FilterProps> = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
  };

  return (
    <div className="bg-green-400 flex flex-col mb-5 ml-24 mr-24 rounded-lg border-2 border-solid">
      <div className="flex flex-row mt-6 ml-6">
      <div className="text-center font-bold text-2xl mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-white underline text-center mb-3 font-bold text-2xl"
      >
        Clear Filters
      </div>
      </div>
     
      <div className="flex flex-row justify-around" id='accordion-group' data-accordion="default-accordion">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;