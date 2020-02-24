import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'

import CollectionPreview from '../CollectionPreview'

import { Container } from './styles'

const CollectionsOverview = ({ collections }) => {
  return (
    <Container>
      {collections
        .filter((item, indx) => indx < 4)
        .map(({ id, ...collection }) => (
          <CollectionPreview id={id} {...collection}></CollectionPreview>
        ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps, null)(CollectionsOverview)
