import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Invitation from "./pages/Invitation";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { index: true, element: <Navigate replace to="invitation" /> },
      { path: "invitation", element: <Invitation /> },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    const audio = new Audio("/birthday.mp3");

    const startMusic = () => {
      audio.volume = 1;
      audio.play();

      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      audio.pause();
    };
  }, []);

  return <RouterProvider router={router} />;
};
export default App;
