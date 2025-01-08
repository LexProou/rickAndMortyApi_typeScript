
import FilterBTN from "../FilterBTN";

type GenderProps = {
  updateGender: React.Dispatch<React.SetStateAction<string>>;
  updatePageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Gender: React.FC<GenderProps> = ({ updateGender, updatePageNumber }) => {
  const genders = ["female", "male", "genderless", "unknown"];
  return (

    <div className='accordion py-4 border-b border-solid border-gray-200' id='basic-heading-three-with-arrow-always-open flex-wrap gap-3'>
      <button className='text-lg rounded-lg w-30 text-white bg-black accordion-toggle group inline-flex items-center justify-between leading-8 transition duration-500 hover:text-green-600 accordion-active:text-indigo-600 always-open'>
        <h5>Gender</h5>
        <svg className='text-green-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600  accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
        </svg>
      </button>
      <div id='basic-collapse-three-with-arrow-always-open' className='accordion-content  w-full px-0 overflow-hidden  pr-4' aria-labelledby='basic-heading-three-with-arrow-always-open'>
        <div className="">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateGender}
                input={items} status={""}
              />
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default Gender;