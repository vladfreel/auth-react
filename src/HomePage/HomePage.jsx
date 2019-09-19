import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services/user.service';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Welcome {user.firstName}!</h1>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export { HomePage };