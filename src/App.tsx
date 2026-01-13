import "./index.css";
import CardGrid from "./components/CardGrid";
import CardCQ from "./components/CardCQ";
import BreakpointHeading from "./components/BreakpointHeading";
import { getCards } from "./utils";

function App() {
  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-4xl mb-10 text-center">Container Query Examples</h1>
      <main className="mx-auto max-w-480">
        <div className="grid sm:grid-cols-2 gap-10">
          <h2 className="text-3xl sm:col-span-2">Card Examples</h2>
          <div className="flex items-center">
            Container:
            <div className="w-20 ml-2 bg-red-500 h-px" />
          </div>
          <div className="sm:col-span-2">
            <BreakpointHeading base="Single Card" />
            <CardCQ {...getCards(1)[0]} />
          </div>

          <div className="sm:col-span-2">
            <BreakpointHeading base="Hard Coded Max Width LG" />
            <div className="max-w-lg">
              <CardCQ {...getCards(1)[0]} />
            </div>
          </div>

          <div className="sm:col-span-2">
            <BreakpointHeading base="Hard Coded Max Width XS" />
            <div className="max-w-xs">
              <CardCQ {...getCards(1)[0]} />
            </div>
          </div>

          <div className="sm:col-span-2">
            <BreakpointHeading
              base="One column (grid)"
              xl="Two columns (grid grid-cols-2)"
              {...{ "2xl": "Three columns (grid grid-cols-3)" }}
            />
            <p className="mb-4">
              The cards are wrapped in a css grid element with breakpoints
              applied, so the structure is as follows .grid &gt; .@container
              (x3) &gt; CardComponent (x3)
            </p>
            <CardGrid
              cardData={getCards(3)}
              className="xl:grid-cols-2 2xl:grid-cols-3"
            />
          </div>

          <h2 className="text-3xl sm:col-span-2">Nested Grid Card Examples</h2>
          <div>
            <BreakpointHeading base="One column (grid)" />
            <CardGrid cardData={getCards(3)} />
          </div>
          <div>
            <BreakpointHeading
              base="One column (grid)"
              xl="Two columns (grid grid-cols-2)"
              {...{ "2xl": "Three columns (grid grid-cols-3)" }}
            />
            <CardGrid
              cardData={getCards(3)}
              className="xl:grid-cols-2 2xl:grid-cols-3"
            />
          </div>
          <div>
            <BreakpointHeading
              base="One column (grid)"
              lg="Two columns (grid grid-cols-2)"
            />
            <CardGrid cardData={getCards(20)} className="lg:grid-cols-2" />
          </div>
          <div>
            <BreakpointHeading
              base="One column (grid)"
              lg="Two columns (grid grid-cols-2)"
              xl="Three columns (grid grid-cols-3)"
            />
            <CardGrid
              cardData={getCards(20)}
              className="lg:grid-cols-2 xl:grid-cols-3"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
