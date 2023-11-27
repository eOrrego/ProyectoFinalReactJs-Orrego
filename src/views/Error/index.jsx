import { useRouteError } from "react-router-dom"

const Error404 = () => {

    const error = useRouteError();

    return (
        <div>
            <h1>
                {error.status} - Ops!
            </h1>
            <p>
                {error.data}
            </p>
        </div>
    )
}

export default Error404