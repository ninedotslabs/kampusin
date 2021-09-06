import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Markdown file directory
const contentsDirectory = path.join(process.cwd(), "_contents");

export function getAllContents() {
  const allContents = fs.readdirSync(contentsDirectory);

  return allContents.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentsDirectory, fileName),
      "utf-8"
    );
    const { data, content } = matter(fileContents);

    return {
      id,
      data,
      content,
    };
  });
}
