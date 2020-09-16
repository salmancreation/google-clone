import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import './SearchPage.css';
import Search from '../Search';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ExternalLink } from 'react-external-link';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    const { data } = useGoogleSearch(term);


    // const data = Response;

    console.log(data);

    return (
        <div className="searchPage">

            <div className="search_page_header">
                <Link to='/'>
                    <img className="search_page_logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
                </Link>

                <div className="search_page_headerBody">
                    <Search hideButtons />

                    <div className="serach_page_opts">
                        <div className="search_opt_left">
                            <div className="search_opt_links">
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="search_opt_links">
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="search_opt_links">
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="search_opt_links">
                                <VideoLibraryIcon />
                                <Link to='/videos'>Videos</Link>
                            </div>
                            <div className="search_opt_links">
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className="search_opt_links">
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className="search_opt_right">
                            <div className="search_opt_links">
                                <Link to='/settings'>Setting</Link>
                            </div>
                            <div className="search_opt_links">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {term && (
                <div className="search_page_results">
                    <p className="search_page_resultcount">
                        about {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                    </p>

                    {data?.items.map((item, index) => (
                        <div key={index} className="search_single_result">
                            <a herf="{item.link}">
                                {item.displayLink} ▾
                            </a>
                            <ExternalLink href="{item.link}" className="search_result_title">
                                <h3>{item.title}</h3>
                            </ExternalLink>
                            <p>{item.snippet}</p>
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default SearchPage;
