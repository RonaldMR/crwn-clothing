import React from 'react'

import './styles.scss'

import CollectionItem from  '../CollectionItem'

const CollectionPreview = ({title, items}) => <div className='collection-preview'>
    <h1 class='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {
            items.filter((item, idx) => idx < 4).map(({id, ...item}) => (<CollectionItem key={id} {...item} />))
        }
    </div>
</div>

export default CollectionPreview