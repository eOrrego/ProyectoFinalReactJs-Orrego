import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/FirebaseAuthContext";

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Routes />
            </CartProvider>
        </AuthProvider>
    );
}

export default App;