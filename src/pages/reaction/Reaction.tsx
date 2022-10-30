import { useState } from 'react';
import { Link } from "react-router-dom";
import './Reaction.css';

const Reaction = () => {
    const [start, setStart] = useState<number | null>(null);
    const [toggle, setToggle] = useState(false);

    const mountTime = (): void => {
        if (toggle) return;
        const randomTime = Math.floor(Math.random() * 4000) + 2000;
        setTimeout(() => {
            setStart(Date.now());
            setToggle(true);
        }, randomTime);
    };

    const dismountTime = (): void => {
        if (!start) return
        if (!toggle) restartGame();
        const timediff = Date.now() - start;
        document.querySelector('.square-green')!.innerHTML = timediff.toString() + 'ms';
        setToggle(false);
    };

    const restartGame = (): void => {
        setStart(null);
        setTimeout(() => {
            setToggle(false);
        }, 2000);
    };

    return (
        <div className="reaction-container">
            <Link to="/"><p className="reaction-back">&#8592; Go back</p></Link>
            <div className="reaction-title">
                <p className='reaction-title-upper'>You selected <span>Reaction Time!</span></p>
                <p>Click on red to begin</p>
                <p>Click again when green renders</p>
            </div>
            <div className="square-container">
                {!start && <div className="square-red" onClick={mountTime}></div>}
                {start && <div className="square-green" onClick={dismountTime}></div>}
            </div>
        </div>
    );
};

export default Reaction;
