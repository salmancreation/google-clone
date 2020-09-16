import React, { useState } from 'react';
import './Search.css';

import { useHistory } from 'react-router-dom';

import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {

    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState("");

    const history = useHistory();

    function search(e) {
        e.preventDefault();

        console.log('You Enter the search bar >> ', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');

    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'm Feeking Lucky</Button>
                </div>
            ) : (
                    <div className="search_buttons">
                        <Button className="search_buttonsHidden" type='submit' onClick={search} variant='outlined'>Google Search</Button>
                        <Button className="search_buttonsHidden" variant='outlined'>I'm Feeking Lucky</Button>
                    </div>
                )}

        </form>
    );
}

export default Search;
