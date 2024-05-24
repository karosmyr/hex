import "./App.css";
import { Button } from "@/components/ui/button";
import CustomCard from "./components/ui/custom-card";

function App() {
  return (
    <>
      <div>
        <Button variant="destructive">Click me</Button>
        <CustomCard
          id={3}
          title="Tile"
          description="Description"
          image="/path/to/image1.png"
          buttonText="Click"
          detailsPageLink="/my-account"
        />
        <CustomCard
          id={3}
          title="Tile"
          description="Description"
          image="/path/to/image2.png"
          buttonText="Click"
          detailsPageLink="/my-account"
        />
        <CustomCard
          id={3}
          title="Tile"
          description="Description"
          image="/path/to/image3.png"
          buttonText="Click"
          detailsPageLink="/my-account"
        />
      </div>
    </>
  );
}

export default App;
