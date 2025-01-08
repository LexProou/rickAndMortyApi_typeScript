import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CardDetailsProps } from "../../type/typeCardDetail";

import '../../input.css'
import '../../output.css'


const CardDetails: React.FC<CardDetailsProps> = () => {
  const { id } = useParams<string>();

  const [fetchedData, updateFetchedData] = useState({
  });

  const { name, image, status, gender, location, origin, species } =
    fetchedData as unknown as CardDetailsProps;

  const api = `https://rickandmortyapi.com/api/character/id/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data);
    })();
  }, [api]);

  return (
    <div className="flex justify-center mb-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="w-96" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="">
          <div className="">
            <span className="font-bold ">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="font-bold">Location: </span>
            {location}
          </div>
          <div className="">
            <span className="font-bold">Origin: </span>
            {origin}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;