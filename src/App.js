import data from "./data/dummy";
import Header from "./components/Header";
import {useState} from "react";
import PeopleList from "./components/PeopleList";

function App() {
    const [currentTab, setCurrentTab] = useState("ALL");

  return (
    <div>
        <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <PeopleList data={data.people} filter={currentTab}/>
    </div>
  );
}

export default App;
