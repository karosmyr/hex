import { Button } from "@repo/design-system/button";
import CustomCard from "@repo/design-system/custom-card";

const data = {
  tiles: [
    {
      id: 1,
      title: "Tile 1",
      description: "Description for tile 1",
      image: "/path/to/image1.png",
      buttonText: "View Details",
      detailsPageLink: "/details/1",
    },
    {
      id: 2,
      title: "Tile 2",
      description: "Description for tile 2",
      image: "/path/to/image2.png",
      buttonText: "View Details",
      detailsPageLink: "/details/2",
    },
    {
      id: 3,
      title: "Tile 3",
      description: "Description for tile 3",
      image: "/path/to/image3.png",
      buttonText: "View Details",
      detailsPageLink: "/details/3",
    },
  ],
  newsletter: {
    title: "Subscribe to our Newsletter",
    description: "Get the latest updates and offers.",
    inputPlaceholder: "Enter your email",
    buttonText: "Subscribe",
  },
};

export default function Page(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <div>
        <Button variant="destructive">Click</Button>
      </div>
      <section className="grid grid-cols-3 gap-4">
        {data.tiles.map((tile) => (
          <CustomCard
            key={tile.id}
            id={tile.id}
            title={tile.title}
            description={tile.description}
            image={tile.image}
            buttonText={tile.buttonText}
            detailsPageLink={tile.detailsPageLink}
          />
        ))}
      </section>
    </>
  );
}
