import React from 'react'
import Spinner from '../Spinner'

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  )
}

export default WithSpinner
