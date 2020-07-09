import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {actions, getEpisodePlanetsThunk} from "../../redux/reducer";
import {connect} from "react-redux";


const Planets = ({film, ...props}) => {

    const [isPlanets, setPlanetsInfo] = useState(false)
    const [planetName, setPlanetName] = useState("")
    const [hiddenPlanetName, setHidePlanetName] = useState(false)

    const providePlanets = () => {
        props.cancelPlanets()
        setPlanetsInfo(!isPlanets)
        film.planets.map(u => props.getEpisodePlanetsThunk(u))
    }
    const viewPlanet = (planetName) => {
        setPlanetName(planetName)
        setHidePlanetName(!hiddenPlanetName)
    }

    return (
            <div className={"entity-item"}>
                <span onClick={providePlanets}>Planets: </span>
                {isPlanets && <ul className={"entity-item__list"}>
                    {props.episodePlanets.map((p) =>
                        <li><span onClick={() => viewPlanet(p.name)}>
                                    {p.name}
                                </span>{planetName === p.name && hiddenPlanetName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}


const mapStateToProps = (state) => ({
    episodePlanets: state.star.episodePlanets
})
const cancelPlanets = actions.cancelPlanets

export default connect(mapStateToProps, {getEpisodePlanetsThunk, cancelPlanets})(Planets)
