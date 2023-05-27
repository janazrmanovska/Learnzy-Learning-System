import React from "react";
import { Image } from "@chakra-ui/react";

import { CategoryDisplayItem } from "../types/categories";

export const CategoryItems: CategoryDisplayItem[] = [
  { title: "Transportation", icon: <Image src="aeroplane.png" /> },
  { title: "Clothes", icon: <Image src="/clothes.png" /> },
  { title: "Calendar", icon: <Image src="/calendar.png" /> },
  { title: "Market", icon: <Image src="/market.png" /> },
  { title: "Food", icon: <Image src="/food.png" /> },
  { title: "Math", icon: <Image src="/math.png" /> },
  { title: "School", icon: <Image src="/school.png" /> },
  { title: "Nature", icon: <Image src="/nature.png" /> },
  { title: "Music", icon: <Image src="/music.png" /> },
  { title: "Time", icon: <Image src="/time.png" /> },
  { title: "World", icon: <Image src="/world.png" /> },
  { title: "Weather", icon: <Image src="/weather.png" /> },
];
