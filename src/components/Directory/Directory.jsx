import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directorySelectors'

import MenuItem from '../MenuItem'

import './style.scss'

const Directory = ({sections}) =>{
  return (
    <div className='directory-menu'>
        {sections.map(({id, ...section}) => <MenuItem key={id} {...section} />)}
    </div>
)
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(
  mapStateToProps,
  null
)(Directory)