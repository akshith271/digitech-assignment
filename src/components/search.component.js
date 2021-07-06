import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            this.props.onSubmit(this.state.value);
        }
    };
    render() {
        return (
            <div className="sb-example-3">
                <div className="search__container">
                    <input
                        value={this.state.value}
                        onChange={this.onInputChange}
                        className="search__input"
                        type="text"
                        placeholder="Start typing and press enter"
                        id="search"
                        onKeyUp={this.handleKeyPress}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;
