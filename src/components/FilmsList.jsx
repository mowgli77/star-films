import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    actions,
    getEpisodeCharactersThunk,
    getEpisodePlanetsThunk,
    getEpisodeStarshipsThunk,
    getFilmsThunk
} from "../redux/reducer";
import FilmItem from "./FilmItem";

const FilmsList = (props) => {

    const [currentFilms, setCurrentFilms] = useState(props.films)
    const [addInfoId, setAddInfo] = useState(null)

    useEffect(() => {
        props.getFilmsThunk()
    }, [])

    const filterFunction = (text) => {
        let filtredFilms = props.films.filter(s => s.title.toUpperCase().includes(text))
        if (text.trim().length == 0) {
            setCurrentFilms(props.films)
        } else {
            setCurrentFilms(filtredFilms)
        }
    }

    const searchText = (e) => {
        let text = e.currentTarget.value.toUpperCase();
        filterFunction(text)
    }

    const getFilmInfo = (id) => setAddInfo(id)

    useEffect(() => {
        setCurrentFilms(props.films)
    }, [props.films])

    return (
        <div>
            <header className="header">
                <div className={"header__search"}>
                    <input placeholder={'Search film'} type={'text'} onKeyUp={searchText} />
                </div>
            </header>
            <div className={"films-list"}>
                {currentFilms.map(f => <FilmItem key={f.episode_id}
                                                 film={f}
                                                 addInfoId={addInfoId}
                                                 cancelPlanets={props.cancelPlanets}
                                                 episodePlanets={props.episodePlanets}
                                                 episodeCharacters={props.episodeCharacters}
                                                 getEpisodePlanetsThunk={props.getEpisodePlanetsThunk}
                                                 getEpisodeCharactersThunk={props.getEpisodeCharactersThunk}
                                                 cancelCharacters={props.cancelCharacters}
                                                 getFilmInfo={getFilmInfo}/>)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    films: state.star.films,
    episodePlanets: state.star.episodePlanets,
    episodeCharacters: state.star.episodeCharacters,
})

const cancelPlanets = actions.cancelPlanets
const cancelCharacters = actions.cancelCharacters

export default connect(mapStateToProps, {
    getEpisodePlanetsThunk,
    getFilmsThunk,
    cancelPlanets,
    getEpisodeCharactersThunk,
    cancelCharacters,
    getEpisodeStarshipsThunk
})(FilmsList);