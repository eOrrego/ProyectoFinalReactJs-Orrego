/* eslint-disable react/prop-types */
export const AlertMessage = ({ message }) => {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                <span>{message}</span>
            </div>
        </div>
    )
}
