
import FilterBTN from "../FilterBTN";

import '../../../input.css'
import '../../../output.css'

type StatusBTNProps = {
  updateStatus: React.Dispatch<React.SetStateAction<string>>
  updatePageNumber: React.Dispatch<React.SetStateAction<number>>;

}

const Status: React.FC<StatusBTNProps> = ({ updateStatus, updatePageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"];
  return (

    <div className='accordion pb-4 border-b border-solid border-gray-200 active' id='basic-heading-one-with-arrow-always-open'>
      <button className='text-lg rounded-lg w-20 text-white bg-black accordion-toggle group inline-flex items-center justify-between leading-8 transition duration-500 hover:text-green-600 accordion-active:text-indigo-600 always-open ' aria-controls='basic-collapse-one-with-arrow-always-open'>
        <h5 className=""> Status </h5>
        <svg className='text-green-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180' width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'></path>
        </svg>
      </button>
      <div id='basic-collapse-one-with-arrow-always-open' className='accordion-content w-full px-0 overflow-hidden pr-4  active' aria-labelledby='basic-heading-one-with-arrow-always-open'>
        <div className="">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
              status="status"
            />
          ))}
        </div>
      </div>
    </div>

  )
}


export default Status;