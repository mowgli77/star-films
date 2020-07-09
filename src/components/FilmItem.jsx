import React from 'react';
import EpisodeItem from "./EpisodeItems";

const FilmItem = ({film, ...props}) => {

    const provideAddInfo = (id) => {
        props.getFilmInfo(id)
        props.cancelPlanets()
    }
    const endProvideAddInfo = () => {
        props.getFilmInfo(null)
        props.cancelPlanets()
    }


    return (
       <div className={"films-list__item"}>
           <div className={"films-list__photo"}>There will be photo</div>
           {props.addInfoId !== film.episode_id ?
               <div className={"films-list__title"}><span onClick={() => provideAddInfo(film.episode_id)}>{film.title}</span></div>
           : <div className={"films-list__title"}><span onClick={(endProvideAddInfo)}>{film.title}</span></div>}
           {props.addInfoId === film.episode_id ?
               <EpisodeItem film={film}/>
           : undefined}
       </div>
    );
}

export default FilmItem;

