import React, {Component} from 'react';
import PropTypes from 'prop-types';
import App from "./App";
import Movie from "./Movie";

class Search extends Component {

    render() {
        return (
            <div className="Search">
                <input type="text"
                       placehodler="이름으로 검색하기" />
            </div>
        );
    }
}

export default Search;