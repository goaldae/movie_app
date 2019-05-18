import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {

    render() {
        return (
            <div className="Search">
                <input className="Movie__Search" type="text" placeholder="영화 이름을 입력하세요"/>
            </div>
        );
    }
}

export default Search;