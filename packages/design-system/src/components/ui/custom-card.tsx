import * as React from "react";
import { cn } from "../../lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

interface CustomCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  detailsPageLink: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  id,
  title,
  description,
  image,
  buttonText,
  detailsPageLink,
}) => (
  <Card className={cn("w-[380px]")}>
    <CardHeader>
      <img src={image} alt={title} className="w-full h-auto" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>

    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>

    <CardFooter>
      <a href={detailsPageLink} className="text-blue-500 hover:underline">
        {buttonText}
      </a>
    </CardFooter>
  </Card>
);

export default CustomCard;
