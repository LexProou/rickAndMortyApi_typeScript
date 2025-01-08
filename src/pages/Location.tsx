import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

import { Props } from "../type/typeCard";

type LocationType = {
  dimension: string;
  type: string;
  name: string;

}


const Location: React.FC = () => {
  const [results, setResults] = useState<Props[]>([]);
  const [info, setInfo] = useState<LocationType>({
    dimension: "",
    type: "",
    name: "",
  });
  const { dimension, type, name } = info;
  const [number, setNumber] = useState(1);



  const api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);
      const a = await Promise.all(
        data.residents.map((x: string) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="mb-3 font-bold  ">
      <div className="flex flex-row justify-around mt-6 mb-6 ">
        <div className="text-4xl font-bold ">
          <h1 className="text-center mb-3">
            Location :
            <span className="text-green-500">
              {" "}
              {name === "" ? "Unknown" : name}
            </span>
          </h1>
          <h5 className="text-center">
            Dimension: {dimension === "" ? "Unknown" : dimension}
          </h5>
          <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>

        </div>
        <h4 className="bg-green-500 w-52 text-center mb-3 font-bold text-4xl mt-6 border-3 border-black rounded-lg rotate-12">Pick Location</h4>
      </div>


      <div className="flex column-wrap mt-8 ">
        <div className="col-lg-3 col-12 mb-4 ml-2 ">

          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="flex flex-wrap">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;