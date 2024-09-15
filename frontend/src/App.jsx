import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--APP--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // 関数型アップデートで、非同期でも最新のステート値を参照できる
    /*
     * Reactはパフォーマンスを最適化するために、ステートの更新を即座に反映せず、後でまとめて処理する
     * 以下の処理はnumを更新する前に 呼ばれるため、結果的に1ずつしか増えない
     *  setNum(num + 1);
     * setNum(num + 1);
     */
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  // 第二引数に配列をとる
  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 === 0) {
        // ||（論理OR演算子）は、左側の式がtrueの場合、右側の式を評価しません。
        // falseが入ってきた場合、右の式は実行される
        isShowFace || setIsShowFace(true);
      } else {
        // &&（論理AND演算子）は、左側の式がfalseの場合、右側の式を評価しません。
        // trueが入ってきた場合、右の式は実行される
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);


  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green"> 元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>

      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>☺️</p>}
    </>
  );
};
