import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

import { AxiosError } from 'axios';

import CustomError from 'core/errors/CustomError';

interface Props extends PropsWithChildren {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleErrorReset = this.handleErrorReset.bind(this);
  }

  handleErrorReset() {
    this.setState({ hasError: false });
  }

  static getDerivedStateFromError(err: Error) {
    if (err.name === 'TypeError') {
      console.log('TypeError');
      return {
        hasError: true,
      };
    }

    if (err instanceof AxiosError) {
      console.log('AxiosError');
      if (err.response?.status === 500 || err.response?.status === 404) {
        return {
          hasError: true,
        };
      }
    }

    console.log('Just Error');
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Error Boundary:', error, errorInfo);

    if (error instanceof CustomError) {
      console.log('error boundary custom error catch!');
      error.executeErrorHandler(); // 1번 과정에서 커스텀 에러 클래스에 정의했던 에러 핸들러를 실행
    }
  }

  render() {
    const { children } = this.props;

    if (this.state.hasError) {
      return this.props.fallback ?? <div>error!</div>;

      // return <Error onClick={this.handleErrorReset} />;
    }

    return children;
  }
}

export default ErrorBoundary;
