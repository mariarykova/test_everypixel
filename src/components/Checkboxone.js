import React from 'react';

class Checkboxone extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            images: this.props.images,
            selectAllChecked: false
        };

        this.onSelectImage = this.onSelectImage.bind(this);
        this.getSelectedImages = this.getSelectedImages.bind(this);
        this.onClickSelectAll = this.onClickSelectAll.bind(this);
    }
}