/* eslint-disable react/prop-types */
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [dni, setDni] = useState("");
    const [phone, setPhone] = useState("");

    const handleConfirm = (e) => {
        e.preventDefault();

        const userData = {
            phone,
            cardholderName,
            cardNumber,
            expirationDate,
            securityCode,
            dni,
        };

        onConfirm(userData);
    };
    return (
        <div
            className="container-fluid"
        >
            <div
                className="row justify-content-center align-items-center"
            >
                <h2 className="text-center mb-5">Complete los datos de Pago</h2>
                <form onSubmit={handleConfirm}
                    className="col-12 col-md-6 col-lg-4 border p-5 rounded-3 shadow bg-body mx-auto my-auto text-center"
                >
                    <div className="mb-3">
                        <label htmlFor="cardholderName" className="form-label">
                            Nombre y Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cardholderName"
                            value={cardholderName}
                            onChange={(e) => setCardholderName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label">
                            Numero de Tarjeta
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="expirationDate" className="form-label">
                            Fecha de Vencimiento
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="expirationDate"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="securityCode" className="form-label">
                            Codigo de Seguridad
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="securityCode"
                            value={securityCode}
                            onChange={(e) => setSecurityCode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">
                            DNI
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="dni"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Telefono
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    {
                        cardholderName && cardNumber && expirationDate && securityCode && dni && phone
                            ? (
                                <button type="submit" className="btn btn-primary">
                                    Confirmar Compra
                                </button>
                            )
                            : (
                                <button type="submit" className="btn btn-outline-primary" disabled>
                                    Confirmar Compra
                                </button>
                            )
                    }
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm;