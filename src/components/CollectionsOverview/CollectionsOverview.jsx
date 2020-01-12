import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'


import CollectionPreview from '../CollectionPreview'

import './style.scss'

const CollectionsOverview = ({ collections }) => {
    return <div className='collections-overview'>
        {
            collections.filter((item, indx) => indx < 4).map(({id, ...collection}) => (
                <CollectionPreview id={id} {...collection}></CollectionPreview>
            ))
        }
    </div>
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(
    mapStateToProps, 
    null)
(CollectionsOverview)