import { lazy, Suspense } from "react";
import "./App.css";
import Receipt from "./components/Receipt";

const Background3D = lazy(() => import("./components/Background3D"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Receipt />
    </>
  );
}

export default App;
