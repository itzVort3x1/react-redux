import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // init gives us a promise!
            window.gapi.client.init({
                clientId: 'CLIENT_ID',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if( this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign in
                </button>
            );
        }
    }
    
    render () {
        return (
            <div className="item">{ this.renderAuthButton() }</div>
        );
    }
}

export default connect(null, { signIn, signOut })(GoogleAuth);