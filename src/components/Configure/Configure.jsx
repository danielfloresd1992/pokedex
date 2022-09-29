import config from '../../../public/config.svg';
import  './style.css';

export const Configure = () => {


    return(
        <div className="confugure-component">
            <img src={config} alt="" className="confugure-img" />
        </div>
    );
};