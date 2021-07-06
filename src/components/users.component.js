import React, { Component } from 'react';
import userService from '../services/userService';
import Card from './card.component';
import SearchBar from './search.component';
import UserLoader from './userLoader.component';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchString: '',
            showLoader: true,
        };
    }

    componentDidMount() {
        userService.getAll().then((result) => {
            console.log(result);
            this.setState({
                users: result,
                showLoader: false,
            });
        });
    }
    setLoader = (value) => {
        this.setState({
            showLoader: value,
        });
    };
    handleSearchInput = (name) => {
        this.setLoader(true);
        userService
            .search(name)
            .then((response) => {
                this.setState({
                    users: response,
                    searchString: name,
                });
            })
            .finally(() => {
                this.setLoader(false);
            });
    };

    render() {
        const { users, showLoader } = this.state;

        return (
            <div className="container">
                <div className="row user-search mb-4" style={{ width: '70%' }}>
                    <SearchBar onSubmit={this.handleSearchInput} />
                </div>
                <UserLoader showLoader={showLoader}>
                    {users.length ? (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 ">
                            {users.map((user) => {
                                return <Card user={user} key={user.id} />;
                            })}
                        </div>
                    ) : (
                        <div className="no-results">
                            {' '}
                            No results found for "{
                                this.state.searchString
                            }"{' '}
                        </div>
                    )}
                </UserLoader>
            </div>
        );
    }
}

export default Users;
