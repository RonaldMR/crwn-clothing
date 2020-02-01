import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors'
import WithSpinner from '../WithSpinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)
