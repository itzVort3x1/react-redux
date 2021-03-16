import React from 'react';

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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }

    renderAuthButton() {
        if( this.state.isSignedIn === null) {
            return <div>i dont know if we are signed in</div>
        } else if (this.state.isSignedIn){
            return <div>I am signed in!</div>
        } else {
            return <div>I am not signed in!</div>
        }
    }
    
    render () {
        return (
            <div className="item">{ this.renderAuthButton() }</div>
        );
    }
}

export default GoogleAuth;