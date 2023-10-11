import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/utils/notFound";
import Home from "./components/Home/home";
import CreateAccount from "./components/Signup/CreateAccount";
import WelcomeScreen from "./components/welcomePage/WelcomeScreen";
import { FormProvider } from "./components/utils/context";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeScreen/>,
      errorElement: <NotFound />,
      
    },
    {
      path: "/signup",
      element: <CreateAccount />,
      errorElement: <NotFound />,
    },
    {
      path: "/welcome",
      element: <Home />,
      errorElement: <NotFound />,
    },
  ]);

  return (
    <FormProvider>
      <RouterProvider router={router} />

    </FormProvider>
  
  );
}

export default App;
