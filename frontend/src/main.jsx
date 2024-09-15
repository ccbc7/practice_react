import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";

// index.htmlからid(root)を取得
const rootElement = document.getElementById("root");

// rootElementを使用してReactのルートを作成
const root = createRoot(rootElement);

// const App = () => <h1>こんにちは!</h1>;

// ルートにReactコンポーネントをレンダリング
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
