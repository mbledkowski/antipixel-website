/** @jsx h */
import { h } from "preact";
import { default as data, Data } from "./fetchData.ts";

async function dataToJSX(
  data: Data,
  dir: string,
  i: number
): Promise<{ jsx: h.JSX.Element[]; headersList: h.JSX.Element[] }> {
  let header: h.JSX.Element | undefined = undefined;
  if (i !== 0) {
    header = h(`h${i}`, { id: data.name }, data.name);
  }
  const headersList: h.JSX.Element[] = [];
  const subHeaders: h.JSX.Element[] = [];
  for (const folder in data.folders) {
    const dataToJSXResponse = await dataToJSX(
      data.folders[folder],
      `${dir}/${data.folders[folder].name}`,
      i + 1
    );
    subHeaders.push(...dataToJSXResponse.jsx);
    headersList.push(
      h(
        "li",
        {},
        h(
          "a",
          { href: `#${data.folders[folder].name}` },
          data.folders[folder].name
        ),
        h("ul", {}, ...dataToJSXResponse.headersList)
      )
    );
  }
  const items: h.JSX.Element[] = [];
  for (const item of data.files) {
    items.push(
      h("img", { src: `${dir}/${item}`, alt: item, width: 80, height: 15 })
    );
  }
  if (header !== undefined) {
    return { jsx: [header, ...items, ...subHeaders], headersList };
  } else {
    return { jsx: [...items, ...subHeaders], headersList };
  }
}

const { jsx, headersList } = await dataToJSX(data, "/antipixel-icons", 0);
export { headersList };
export default jsx;
