import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/DirectorySelector'

import MenuItem from '../menu-item/Menu-item';
import '../directory/Directory.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
                sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            ))
        }
    </div>   
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
}); 

export default connect(mapStateToProps)(Directory);