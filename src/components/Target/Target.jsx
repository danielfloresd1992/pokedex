import './target_pokemon.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Target = ({ URL }) => {

    let [data, setData] = useState({});

    const textAwait = 'esperando...';
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(URL)
            .then((results => {
                setData(results.data);
            }));
    }, []);

    const color = () => {
        let radius = '';
        let href = '';
        let btn = '';
        let back = 'beige';
        if (data.types) {
            switch (data?.types[0]?.type?.name) {
                case 'poison':
                    radius = 'radial-gradient(#301a32, #3e2c56)';
                    href = '🍶';
                    btn = '#2E0E52'
                    back = '#6A52AA'
                    break;
                case 'normal':
                    radius = 'linear-gradient(45deg, #8b8b8b, #f7f7f7)';
                    href = '🌠';
                    btn = '#A0A0A0';
                    break;
                case 'electric':
                    radius = 'radial-gradient(#fbd100, #7a632d)';
                    href = '⚡';
                    btn = '#FFDC00'
                    back = '#F1EE7D';
                    break;
                case 'ground':
                    radius = 'linear-gradient(20deg, rgb(62 31 7), rgb(129 107 0))';
                    href = '🌑';
                    btn = '#42251E';
                    back = '#8A5F3B'
                    break;
                case 'fairy':
                    radius = 'linear-gradient(10deg, rgb(247 116 140), rgb(255 196 217))';
                    href = '🌟';
                    btn = '#EF80D1';
                    back = '#F6A5D6';
                    break;
                case 'fire':
                    radius = 'linear-gradient(45deg, rgb(233 69 69), rgb(235 192 33))';
                    href = '🔥';
                    btn = '#DC370A';
                    back = '#E36841';
                    break;
                case 'grass':
                    radius = 'linear-gradient(20deg, rgb(43 66 40), rgb(185 162 49))';
                    btn = '#5CA010'
                    href = '🍃';
                    back = '#74BD42';
                    break;
                case 'water':
                    radius = 'linear-gradient(20deg, rgb(11 33 60), rgb(107 220 255))';
                    href = '💦';
                    btn = '#1067A0';
                    back = '#2980B9';
                    break;
                case 'bug':
                    radius = 'linear-gradient(20deg, rgb(33 133 21), rgb(175 207 124))';
                    href = '🐞';
                    btn = '#5D6E2F'
                    back = '#3D9843';
                    break;
                case 'fighting':
                    radius = 'linear-gradient(20deg, rgb(129 82 13), rgb(255 219 137))';
                    href = '🥊';
                    btn = '#AB5508'
                    break;
                case 'psychic':
                    radius = 'linear-gradient(45deg, #272028, #a746b9)';
                    href = '🔮';
                    btn = '#890094';
                    back = '#000';
                    break;
                case 'rock':
                    radius = 'linear-gradient(45deg, #8b8b8b, #f7f7f7)';
                    href = '🗻';
                    btn = '#8C908C';
                    back = '#A9A9A9';
                    break;
                case 'ghost':
                    radius = 'linear-gradient(45deg, #8B157D, #AB3F9E)';
                    href = '👻';
                    btn = '#B309A4';
                    back = '#9545A8';
                    break;
                case 'ice':
                    radius = 'linear-gradient(45deg, #3AB3EB, #AADCF4)';
                    href = '🧊';
                    btn = '#B309A4';
                    back = '#9545A8';
                    break;
                case 'dragon':
                    radius = 'linear-gradient(45deg, #EFB900, #EDD969)';
                    href = '🐉';
                    btn = '#D99E00';
                    back = '#C3B89C';
                    break;
                case 'dark':
                    radius = 'linear-gradient(10deg, #010B4F , #332397)';
                    href = '🌀';
                    btn = '#081F3E';
                    back = '#14104A';
                    break;
                case 'steel':
                    radius = 'linear-gradient(10deg, #686868 , #B0B4B5)';
                    href = '🌀';
                    btn = '#081F3E';
                    back = '#E4E4E4 ';
                    break;
                case 'flying':
                    radius = 'linear-gradient(10deg, #ADC8D2 , #BEEEFF)';
                    href = '🌀';
                    btn = '#081F3E';
                    back = '#E4E4E4 ';
                    break;
                default:
                    break;
            }
            return {
                radius,
                href,
                btn,
                back
            }
        }

    }
    const color2 = (type) => {
        let href = '';
        let btn = '';
        if (data.types) {
            switch (type) {
                case 'poison':
                    href = '🍶';
                    btn = '#2E0E52';
                    break;
                case 'normal':
                    href = '🌠';
                    btn = '#A0A0A0';
                    break;
                case 'electric':
                    href = '⚡';
                    btn = '#FFDC00'
                    break;
                case 'ground':
                    href = '🌑';
                    btn = '#42251E';
                    break;
                case 'fairy':
                    href = '🌟';
                    btn = '#EF80D1';
                    break;
                case 'fire':
                    href = '🔥';
                    btn = '#DC370A';
                    break;
                case 'grass':
                    btn = '#5CA010'
                    href = '🍃';
                    break;
                case 'water':
                    href = '💦';
                    btn = '#1067A0';
                    break;
                case 'bug':
                    href = '🐞';
                    btn = '#5D6E2F'
                    break;
                case 'fighting':
                    href = '🥊';
                    btn = '#AB5508'
                    break;
                case 'psychic':
                    href = '🔮';
                    btn = '#890094';
                    break;
                case 'rock':
                    href = '🗻';
                    btn = '#8C908C';
                    break;
                case 'ghost':
                    href = '👻';
                    btn = '#B309A4';
                    break;
                case 'ice':
                    href = '🧊';
                    btn = '#B309A4';
                    break;
                case 'dragon':
                    href = '🐉';
                    btn = '#D99E00';
                    break;
                case 'dark':
                    href = '🌀';
                    btn = '#081F3E';
                    break;
                case 'flying':
                    href = '🦅';
                    btn = '#52D2FE';
                    break;
                case 'steel':
                    href = '⛓';
                    btn = '#838484';
                    break;
                default:
                    break;
            }
            return {
                href,
                btn
            }
        }

    }
    let colors = color();//data.sprites?.other?.dream_world?.front_default //svg
    let img;
    if(data) img = data?.sprites?.other['official-artwork'].front_default;
    //console.log(img)
    return (
        <article style={{ background: colors?.radius }} className="pokemon-target" onClick={() => navigate(`/charaterPage${data?.name}`)}>
            <div className='pokemon-title'>
                <h2>{data?.name}</h2> <p className='pokemon-hp' >Hp <b>{data.types ? data.stats[0].base_stat : textAwait}</b> </p>
            </div>

            <div className="pokemon-containsImg" style={{ backgroundColor: colors?.back }} >
                <img className="pokemon-img" src={data.sprites?.other?.dream_world?.front_default} alt="" />
            </div>
            <div className="pokemon-description">
                <p> Type <b>{data.types ? data.types[0].type.name : textAwait}</b></p>

                <p>⚔ Attack: <b> {data.types ? data.stats[1].base_stat : textAwait}</b> </p>
                <p>🛡 Defense: <b> {data.types ? data.stats[2].base_stat : textAwait}</b> </p>
                <p>🦿 Speed: <b> {data.types ? data.stats[3].base_stat : textAwait}</b> </p>
            </div>
            {
                data.types ?
                    (
                        <div className='pokemon-typesContains'>
                            {
                                data?.types.map((element, index) => (
                                    <div key={index} className='pokemon-icoContainer' title={`type ${element.type.name}`} style={{ backgroundColor: color2(element.type.name)?.btn }}>
                                        {
                                            color2(element.type.name)?.href
                                        }
                                    </div>
                                ))
                            }
                        </div>

                    ) :

                    'await...'
            }
        </article>
    );
};
