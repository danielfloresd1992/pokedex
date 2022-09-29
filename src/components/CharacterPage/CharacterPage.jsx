import './style.css';
import axios from 'axios';
import logo from '../../../public/Ilogo.svg.webp';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const CharacterPage = () => {
    const { id } = useParams();
    const [ poke, setPoke ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(results => {
            console.log(results);
            setPoke(results.data);
        })
    }, []);

  

    return(
        <section className='characterPage-component'>
            <div className='poke-btn'>
                <div className='poke-btn0'></div>
                <div className='poke-btn1'></div>
                <div className='poke-btn2'></div>
                <div className='poke-btn3'></div>
            </div>
            
           
            {
                poke.name ? 
                (
                    <article className='poke-dex'>
                        <div className='dex-back'>
                            <img src="../../../public/back.svg" alt="" className='dex-bax_img' onClick={ () =>  navigate(-1) } />
                        </div>
                        <div className='dex-containsImv'>
                            <img src={ logo } alt=""  className='dev-logo'/>
                            <img src={ poke?.sprites?.other['official-artwork'].front_default } alt="" className='dex-pokemon'/>
                        </div>
                        <div className='dex-containsData'>
                            <div className='dex-data'>
                                <h1 className='dex-pokeName'>{poke.name}</h1>
                                <div className='dev-subData'>
                                    <p className='subData-text'>height:  <b>{poke.height}</b></p>
                                </div>
                                <div className='dev-subData'>
                                    <p className='subData-text'>widht: <b>{poke.weight}</b></p>
                                </div>
                            </div>

                            <div className='dex-caracter'>
                                <div className='caracter-data'>
                                    <h2>type</h2>
                                    <hr />
                                    <p className='type-text'>{poke.types[0].type.name}</p>
                                </div>
                            </div>
                            <div className='dex-caracter'>
                                <div className='caracter-data'>
                                    <h2>Abilities</h2>
                                    <hr />
                                    <div >
                                        {
                                            poke.abilities.map(data => (
                                                <p key={data.ability.name}>{data.ability.name}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </article>
                ):
                (
                    <article className='await'>

                    </article>
                )
            }
        </section>
    );
};