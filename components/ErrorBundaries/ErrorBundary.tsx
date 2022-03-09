import React, { ErrorInfo } from "react";

export class ErrorBoundary extends React.Component<{}, { error: Error|null, errorInfo: ErrorInfo|null }> {
  constructor(props:any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error: Error|null, errorInfo: ErrorInfo|null) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }  
}