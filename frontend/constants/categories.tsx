import React from "react";

import { FoodImg } from "../images/categories/food";
import { MathImg } from "../images/categories/math";
import { TimeImg } from "../images/categories/time";
import { WorldImg } from "../images/categories/world";
import { MusicImg } from "../images/categories/music";
import { NatureImg } from "../images/categories/nature";
import { MarketImg } from "../images/categories/market";
import { SchoolImg } from "../images/categories/school";
import { WeatherImg } from "../images/categories/weather";
import { CategoryDisplayItem } from "../types/categories";
import { ClothesImg } from "../images/categories/clothes";
import { CalendarImg } from "../images/categories/calendar";
import { TransportationImg } from "../images/categories/transportation";

export const CategoryItems: CategoryDisplayItem[] = [
  { title: "Transportation", icon: <TransportationImg /> },
  { title: "Clothes", icon: <ClothesImg /> },
  { title: "Calendar", icon: <CalendarImg /> },
  { title: "Market", icon: <MarketImg /> },
  { title: "Food", icon: <FoodImg /> },
  { title: "Math", icon: <MathImg /> },
  { title: "School", icon: <SchoolImg /> },
  { title: "Nature", icon: <NatureImg /> },
  { title: "Music", icon: <MusicImg /> },
  { title: "Time", icon: <TimeImg /> },
  { title: "World", icon: <WorldImg /> },
  { title: "Weather", icon: <WeatherImg /> },
];
