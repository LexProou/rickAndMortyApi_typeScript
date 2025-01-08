// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";

import Search from "../src/components/Search/Search";
import Card from "../src/components/Card/Card";
import Pagination from "../src/components/Pagination/Pagination";
import Filter from "../src/components/Filter/Filter";
import Navbar from "../src/components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/Card/CardDetails";


import { CardDetailsProps } from "./type/typeCardDetail";
import { Props } from "./type/typeCard";
import { PagProps } from "./type/typePagination";

import "./input.css";
import "./output.css";

const App: React.FC<CardDetailsProps> = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails name={""} image={""} status={""} gender={""} location={""} origin={""} species={""} />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails name={""} image={""} status={""} gender={""} location={""} origin={""} species={""} />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails name={""} image={""} status={""} gender={""} location={""} origin={""} species={""} />} />
      </Routes>
    </Router>
  );
}

type InfRes = {
  info: PagProps;
  results: Props[];
  
}


const Home: React.FC = () => {
  const [pageNumber, updatePageNumber] = useState<number>(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  const { info, results } = fetchedData as unknown as InfRes;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="text-center mb-2">
      <div className="flex flex-row-reverse justify-around mt-6 mb-6">
      <h1 className="bg-green-500 w-52 text-center mb-3 font-bold text-4xl mt-6 border-3 border-black rounded-lg rotate-12">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      </div>
    
      <div className="px-2">
        <div className="">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="">
            <div className="flex flex-wrap text-left m-2 ml-24">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;