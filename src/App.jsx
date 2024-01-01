import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Routes />
        </CartProvider>
    );
}

export default App;