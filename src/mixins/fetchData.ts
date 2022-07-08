export interface Data {
  name: string;
  files: string[];
  folders: Data[];
}

async function fetchData(name: string, dir: string): Promise<Data> {
  const data: Data = { name, files: [], folders: [] };
  for await (const dirEntry of Deno.readDir(dir)) {
    if (dirEntry.isDirectory) {
      data.folders.push(
        await fetchData(dirEntry.name, `${dir}/${dirEntry.name}`)
      );
    } else if (
      dirEntry.name !== "LICENSE" &&
      dirEntry.name !== "README.md" &&
      dirEntry.name !== ".git"
    ) {
      data.files.push(dirEntry.name);
    }
  }
  return data;
}

const data: Data = await fetchData("root", "static/antipixel-icons");

export default data;
