import { capitalize } from "lodash";

export const transformLessonsTitle = (path: string) => {
  const route = path.split("/");
  const parts = route[1]?.split("?") ?? "";

  const lessons = capitalize(parts[0]);

  const levelId = parts[1]?.split("=")[1] ?? "";

  const level = levelId === "1" ? "Basic" : "Advanced";

  const category = parts[2]?.split("=")[1] ?? "";

  return { title: `${lessons} / ${level} / ${category}`, category: category };
};

export const transformLessonTitle = (path: string) => {
  const route = path.split("/");
  const parts = route[2].split("?") ?? "";

  const category = parts[1]?.split("=")[1] ?? "";

  const lesson = parts[2]?.split("=")[1] ?? "";

  return { title: `Lesson / ${category} / ${lesson}` };
};
