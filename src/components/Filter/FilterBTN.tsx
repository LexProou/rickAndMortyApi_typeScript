
import { FilterBTNProps } from "../../type/typeFilterBtn";

const FilterBTN: React.FC<FilterBTNProps > = ({ input,index, name, task, updatePageNumber }) => {
  return (
    <div>
      <style>
        {`
          .x:checked + label {
            background-color: #000000;
            color: #15ff1d;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x bg-gray-200 hidden"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(input);
            updatePageNumber(1);
          }}
          className="bg-white hover:bg-green-300 text-black font-bold px-4 border-green-400 hover:border-green-500 rounded"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;