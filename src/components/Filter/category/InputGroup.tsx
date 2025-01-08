import '../../../output.css'
import '../../../input.css'

export type InputGroupProps = {
    name: string;
    changeID: (e: number) => void;
    total: number
}

const InputGroup: React.FC<InputGroupProps> = ({ name, changeID, total }) => {
  return (
    <div className="text-center w-6/12 animate-pulse">
      <select
        onChange={(e) => changeID(parseInt(e.target.value))}
        className=" bg-green-500 py-3 px-4 pe-9 block bg-gren-100 border-transparent rounded-lg text-sm focus:border-green-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600"
        id={name}
      >
        
       
        
        <option className=" text-white" value="1"><h1 className="">Choose...</h1></option>
        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;