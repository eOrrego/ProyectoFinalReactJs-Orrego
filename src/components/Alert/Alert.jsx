/* eslint-disable react/prop-types */
export const Alert = ({ message }) => {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                <span>{message}</span>
            </div>
        </div>
    )
}
