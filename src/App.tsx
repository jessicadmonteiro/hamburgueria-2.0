import { AuthProductsProvider } from "./components/contexts/ProductsContext/ProductsContext";
import { AuthLoginProvider } from "./components/contexts/LoginContex/LoginContex";
import { AuthRegisterProvider } from "./components/contexts/RegisterContext/RegisterContex";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <AuthLoginProvider>
        <AuthRegisterProvider>
          <AuthProductsProvider>
            <RoutesMain />
          </AuthProductsProvider>
        </AuthRegisterProvider>
      </AuthLoginProvider>
    </div>
  );
}

export default App;
