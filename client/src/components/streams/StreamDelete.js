import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button inverted red">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <Modal 
            title="Delete Stream"
            content="Are you sure you want to delete this stream?"
            actions={actions}
            onDismiss={() => history.push('/')}
        />
    );
};

export default StreamDelete;