export const App = () => {
  const onClickButton = () => {
    alert();
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px", //font-sizeな度はキャメルケースに変換
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <h1 style={contentStyle}>こんばんは</h1>
      {console.log("App")}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
