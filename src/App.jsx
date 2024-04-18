import "./App.css";

import { SearchHero } from "./components/SearchHero";
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  return (
    <>
      <BackgroundBeams />
      <div className="max-w-5xl mx-auto px-8">
        <SearchHero />
      </div>
    </>
  );
}

export default App;
