import { Alert } from "react-bootstrap";

function NoBreweriesFound({message}) {
    return (
        <>
            <Alert variant="warning" className="mt-3 text-center">
                {message}
            </Alert>
        </>
    )
}

export default NoBreweriesFound;