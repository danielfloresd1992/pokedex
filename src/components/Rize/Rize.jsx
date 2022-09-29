import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertName } from '../../store/slices/userName.index';
import './style.css';
import poke from '../../../public/pokeball.svg';
import go from '../../../public/go.svg';
import { useNavigate } from 'react-router-dom';


export const Rize = () => {

    let [ userName, setName ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dispatchUserName = () => {
        dispatch(insertName(userName));
        navigate('/charater');
    }

    return(
        <div className='view-intro'>

            <div className='view-port'>
                <h1 className='view-title'>Welcome to Poké-Dex</h1>
                <img src={poke} alt="" className='view-img'/>
            </div>
            

            <div className='view-imputContains'>
                <label className='view-label' htmlFor="insert-name">Insert your name</label>
                <div className='view-contains'>
                    <input className='view-input' type="text" id='insert-name' onChange={e => setName( userName = e.target.value)} required/>
                    <button className='view-button' onClick={dispatchUserName}>
                        <img className='view-button--img' src={go} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};