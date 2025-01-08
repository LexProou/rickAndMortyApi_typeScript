import { Link } from "react-router-dom";

import { Props } from "../../type/typeCard";

export interface CardPro {
  page: string;
  results: Props[];
}

const Card: React.FC<CardPro> = ({ results }, { page }) => {
  let display;

  if (results) {
    display = results.map(({ id, image, name, status, location }: Props): JSX.Element => {

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4 relative text-dark"
        >
          <div
            className={`rounded-lg border-2 border-solid border-green-700 flex flex-col justify-center ml-5`}
          >
            <div className="text-2xl font-bold mb-4 ml-2">{name}</div>
            <img className={`rounded-lg`} src={image} alt="" />
            <div className={`p-2.5`}>

              <div className="">
                <div className="text-base font-normal">Last Location</div>
                <div className="text-xl">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`absolute badge bg-red-500 rounded dark:bg-gray-700 w-16 text-center text-white font-bold bottom-10 right-3 text-lg`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`absolute badge bg-green-500 rounded dark:bg-gray-700 w-16 text-center text-white font-bold bottom-10 right-3 text-lg`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`absolute bg-neutral-500 rounded dark:bg-gray-700 w-24 text-center text-white font-bold bottom-10 right-3 text-lg`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;