export const ColorfulMessage = (props) => {
    console.log("--ColorfulMessages--")
    // propsから色と子要素を分割代入
    const { color, children } = props;

    const contentStyleA = {
      color: color,
      fontSize: "18px", // font-sizeなどはキャメルケースに変換
    };
    return <p style={contentStyleA}>{children}</p>;
}
