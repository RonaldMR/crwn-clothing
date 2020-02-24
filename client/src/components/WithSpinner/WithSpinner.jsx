import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './styles'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps}></WrappedComponent>
    )
  }

  return Spinner
}

export default WithSpinner
