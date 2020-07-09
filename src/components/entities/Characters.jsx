import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {actions, getEpisodeCharactersThunk} from "../../redux/reducer";
import {connect} from "react-redux";


const Characters = ({film, ...props}) => {

    const [isCharacter, setCharactersInfo] = useState(false)
    const [characterName, setCharacterName] = useState("")
    const [hiddenCharacterName, setHiddenCharacterName] = useState(false)

    const provideCharacters = () => {
        props.cancelCharacters()
        setCharactersInfo(!isCharacter)
        film.characters.map(u => props.getEpisodeCharactersThunk(u))
    }
    const viewCharacter = (characters) => {
        setCharacterName(characters)
        setHiddenCharacterName(!hiddenCharacterName)
    }

    return (
            <div><span onClick={provideCharacters}>Characters: </span>
                {isCharacter && <ul>
                    {props.episodeCharacters.map((p) =>
                        <li><span onClick={() => viewCharacter(p.name)}>
                                    {p.name}
                                </span>{characterName === p.name && hiddenCharacterName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}
const mapStateToProps = (state) => ({
    episodeCharacters: state.star.episodeCharacters
})
const cancelCharacters = actions.cancelCharacters

export default connect(mapStateToProps, {getEpisodeCharactersThunk, cancelCharacters})(Characters)
