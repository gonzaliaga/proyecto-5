export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Algo Salió Mal!</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Volver a intentar</button>
        </div>
    )
}