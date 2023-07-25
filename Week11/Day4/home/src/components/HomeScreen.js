import ErrorBoundary from "./ErrorBoundary";

const HomeScreen = (props) => {
    return (
        <>
        <ErrorBoundary>
            <h1>Home</h1>
        </ErrorBoundary>
        </>
    )
}

export default HomeScreen;