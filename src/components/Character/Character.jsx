import './style.css';
import lupa from'../../../public/lupa.svg'
import ball from '../../../public/pokeBody.svg'
import ash from '../../../public/ash.svg'
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Target } from "../target/Target.jsx";
import { changePage } from '../../store/slices/page.index';
import { spreadButton } from '../../store/slices/numberButton.index';
import { setPage } from '../../store/slices/numberPage.index';

export const Character = () => {
    const page = useSelector(state => state.page);
    const numberPage = useSelector(state => state.numberPage);
    const name = useSelector(state => state.name);
    const button = useSelector(state => state.button);
    const dispatch = useDispatch();

    const change = (page) => {
        dispatch(changePage(page));
    };
    const setButton = (number) => {
        dispatch(spreadButton(number));
    };
    const setNumberPage = (number) => {
        dispatch(setPage(number));
    }

    const [ pokeList, setList ] = useState([]);
    const [ type, setTypes ] = useState([]);
    const [ typeInput, setTypeInput ] = useState(false);
        

    const nextPage = () => {
        //setInit(initPage = initPage + 1)
        setNumberPage(numberPage + 1);
        printButton(numberPage + 1);
        console.log(numberPage);
    };
    const backPage = () => {
        setNumberPage(numberPage - 1);
        printButton(numberPage - 1);
        console.log(numberPage);
    };
    const selecPage = (value) => {
        setNumberPage(value);
        printButton(value);
    }
    const printButton = (page) => {
        change((page -1) * 20);
        window.scrollTo({
            top: 300, 
            behavior: 'smooth'
        });
        if(true){
            if(page <  5){
                setButton(5);
                return;
            }
            else if(page === button){
                setButton(button + 2);
            }
            else if(page === button - 1){
                setButton(button + 1);
            }
            else if(page === button - 3){
                setButton(button - 1);
            }
            else if(page === button - 4){
                setButton(button -2);
            }
        }
        
    };
    let listPage = [];
    const buttonPage = () => {
        for(let i = 0; i < button; i++){
            listPage.push(i);
        }
    };
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${20}`)
        .then((results => {
            setList(results.data.results);
        }));
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(results => {
            setTypes(results.data.results);
        });
    }, [  page ]);
    const getType = (value) => { 
        axios.get(value[0].url)
        .then(results =>  setList(results.data.pokemon));
    };
    buttonPage();
    return(
        <div className='component-character'>
            <img className='image-svg' src={ ball } alt="" />
            <img className='image-ash' src={ash} alt="" />
            <section className='character-panel'>
                <div className='character-titleContains'>
                    <h1 className='character-title'>Hello, {name}!</h1>
                    <p className='character-p'> here you can find your favorite pokemon</p>
                </div>
                <div className='contains-tootle' >
                    <p>pokémon</p>
                    <div onClick={() => setTypeInput(!typeInput)} className='character-toogle' >
                        <div className={typeInput ? 'tootle-title tootleActive': 'tootle-title'}>
                        </div>
                    </div>
                    <p>Type</p>;
                </div>
                <div className='input-contains'>
                    {
                        typeInput ? (
                            <div className='input-contains-select'>
                                <div className='view-contains'>
                                     <select className='input-contains-input view-input' name="" id="" onChange={e => { getType(type.filter(element => element.name === e.target.value))}}>
                                    {type?.map(result => (
                                         <option className="select-option" id={result.url} key={result.name} value={result.name} > { result.name } </option>
                                    ))}
                                    </select>
                                </div>
                            </div>
                        ) : 
                        (
                            <div className='input-contains-text'>
                                <div className='view-contains'>
                                    <input className='input-contains-input view-input' type="text" placeholder='All pokémon'/>
                                    <button className='input-contains-btn view-button' > <img className='input-contains-btnImg' src={ lupa } alt=""/> </button>
                                 </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className='section-target'>
                {
                    
                    pokeList.map(results => (
                        <Target URL={ results.url ? results.url : results.pokemon.url } 
                        key={ results.url ? results.url : results.pokemon.url }/>
                    ))
                }
            </section>
            <div className='section-page'>
                <button className='next' onClick={backPage} disabled={numberPage < 2 ? true : false} >{'<'}</button>
                    {
                        listPage.slice( listPage.length -5 ).map((page, index) => (
                            <button onClick={ () => selecPage( page + 1 ) } style={ page + 1 === numberPage ? { backgroundColor: '#3a63a0'}: { backgroundColor: '#1f3e95'}}
                            className='button-page' key={index}>
                                { page + 1 }
                            </button>
                        ))
                    }
                <button className='next' onClick={nextPage} >{'>'}</button>
            </div>
        </div>
    );
};

//https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155

