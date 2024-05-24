import { Button } from "@repo/design-system/button";

export default function Page(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold">My account!</h1>
      <div>
        <Button variant="destructive">Click</Button>
      </div>
    </>
  );
}
