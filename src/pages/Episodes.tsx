
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

import { Props } from "../type/typeCard";

export type Epis = {
  air_date: string | null;
  episode: number | null;
  name: string;
};

const Episodes = () => {
  const [results, setResults] = useState<Props[]>([]);
  const [info, setInfo] = useState<Epis>({
    air_date: "",
    episode: 0,
    name: "",
  });

  const { air_date, name } = info;
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);
      const a = await Promise.all(
        data.characters.map((x: string) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="">
      <div className="font-bold flex flex-row justify-around mt-6 mb-6 ">
        <div className="justify-center">
          <div className="flex flex-col items-center text-4xl mt-6">
            <h1 className="text-center mb-3">
              Episode name :{" "}
              <span className="text-green-500 ">{name === "" ? "Unknown" : name}</span>
            </h1>
            <h5 className="text-center">
              Air Date: {air_date === "" ? "Unknown" : air_date}
            </h5>

          </div>


        </div>

        <h4 className="bg-green-500 w-52 text-center mb-3 font-bold text-4xl mt-6 border-3 border-black rounded-lg rotate-12">Pick Episode</h4>
      </div>
      <div className="flex column-wrap mt-8">

        <div className="col-lg-3 col-12 mb-4 ml-2 text-white">

          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="flex flex-wrap">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;