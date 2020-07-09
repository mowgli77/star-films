import React from 'react';
import EpisodeItem from "./EpisodeItems";
import episode4 from "../images/episode4.jpg"

const FilmItem = ({film, ...props}) => {

    const provideAddInfo = (id) => {
        props.getFilmInfo(id)
    }
    const endProvideAddInfo = () => {
        props.getFilmInfo(null)
    }


    return (
       <div className={"films-list__item"}>
           <div className={"films-list__photo"}>
               {props.images.filter(f => f.id === film.episode_id).map(p => <img src={p.src} />)}
               </div>
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

