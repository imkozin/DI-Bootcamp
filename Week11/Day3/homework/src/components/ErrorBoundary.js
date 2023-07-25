import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            errorInfo: ""
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("error=>", error);
        console.log("errorInfo=>", errorInfo);
        this.setState(
            {
                error : true,
                errorInfo : errorInfo
            }
        )
    }

    render() {
        if(this.state.error){
            return (
                <>
                <h1>OOOOOOOPS...</h1>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
                </>
            )
        }
        else {
            return this.props.children
        }

    }
}

export default ErrorBoundary;