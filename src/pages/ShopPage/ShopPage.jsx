import React from 'react'

import ShopData from './shopData'

import CollectionPreview from  '../../components/CollectionPreview'

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections: ShopData
        }
    }

    render() {
        const { collections } = this.state

        return <div className='shop-page'>
            {
                collections.filter((item, indx) => indx < 4).map(({id, ...collection}) => (
                    <CollectionPreview id={id} {...collection}></CollectionPreview>
                ))
            }
        </div>
    }
}

export default ShopPage