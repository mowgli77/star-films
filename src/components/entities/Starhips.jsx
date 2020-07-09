import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {connect} from "react-redux";
import {actions, getEpisodeStarshipsThunk} from "../../redux/reducer";


const Starships = ({film, ...props}) => {

    const [isStarship, setStarshipInfo] = useState(false)
    const [starshipName, setStarshipName] = useState("")
    const [hiddenStarshipName, setHiddenStarshipName] = useState(false)

    const provideCharacters = () => {
        props.cancelStarships()
        setStarshipInfo(!isStarship)
        film.starships.map(u => props.getEpisodeStarshipsThunk(u))
    }
    const viewCharacter = (characters) => {
        setStarshipName(characters)
        setHiddenStarshipName(!hiddenStarshipName)
    }

    return (
            <div><span onClick={provideCharacters}>Starships: </span>
                {isStarship && <ul>
                    {props.episodeStarships.map((p) =>
                        <li><span onClick={() => viewCharacter(p.name)}>
                                    {p.name}
                                </span>{starshipName === p.name && hiddenStarshipName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}
const mapStateToProps = (state) => ({
    episodeStarships: state.star.episodeStarships
})
const cancelStarships = actions.cancelStarships

export default connect(mapStateToProps, {getEpisodeStarshipsThunk, cancelStarships})(Starships);
