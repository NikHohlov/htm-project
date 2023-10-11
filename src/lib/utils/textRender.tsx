export const textRender = (text: string) => {
  if (text === "") {
    return <br></br>;
  } else if (text.startsWith("<b>")) {
    return<h3><b>{text.slice(3)}</b></h3>;
  }

  return <p>{text}</p>;
};
