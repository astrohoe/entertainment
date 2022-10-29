import { randomInt } from 'crypto';
import { CountryType } from '../../pages/countries/Countries';
import './TableRow.css';

type PropTypes = {
    guess: CountryType;
    random: CountryType
};

const TableRow = ({ guess, random }: PropTypes) => {
    return (
        <div className="answer-container">
            <div className="field country-flag">
                <img src={guess.flags.svg} />
            </div>
            {guess.name.common === random.name.common && <div className="field country-name true"><span>{guess.name.common}</span></div>}
            {guess.name.common !== random.name.common && <div className="field country-name false"><span>{guess.name.common}</span></div>}

            {guess.population > random.population && <div className='field country-pop false'><span>{guess.population} &#8595;</span></div>}
            {guess.population < random.population && <div className='field country-pop false'><span>{guess.population} &#8593;</span></div>}
            {guess.population === random.population && <div className='field country-pop true'><span>{guess.population}</span></div>}

            {guess.area > random.area && <div className='field country-area false'><span>{guess.area} &#8595;</span></div>}
            {guess.area < random.area && <div className='field country-area false'><span>{guess.area} &#8593;</span></div>}
            {guess.area === random.area && <div className='field country-area true'><span>{guess.area}</span></div>}

            {guess.landlocked === random.landlocked && <div className='field country-land true'><span>{guess.landlocked ? 'Yes' : 'No'}</span></div>}
            {guess.landlocked !== random.landlocked && <div className='field country-land false'><span>{guess.landlocked ? 'Yes' : 'No'}</span></div>}

            {guess.latlng[0] > random.latlng[0] && <div className="field country-lat false"><span>{Math.round(guess.latlng[0] * 100) / 100} &#8595;</span></div>}
            {guess.latlng[0] < random.latlng[0] && <div className="field country-lat false"><span>{Math.round(guess.latlng[0] * 100) / 100} &#8593;</span></div>}
            {guess.latlng[0] === random.latlng[0] && <div className="field country-lat true"><span>{Math.round(guess.latlng[0] * 100) / 100}</span></div>}

            {guess.latlng[1] > random.latlng[1] && <div className="field country-lng false"><span>{Math.round(guess.latlng[1] * 100) / 100} &#8595;</span></div>}
            {guess.latlng[1] < random.latlng[1] && <div className="field country-lng false"><span>{Math.round(guess.latlng[1] * 100) / 100} &#8593;</span></div>}
            {guess.latlng[1] === random.latlng[1] && <div className="field country-lng true"><span>{Math.round(guess.latlng[1] * 100) / 100}</span></div>}

            {guess.continents[0] === random.continents[0] && <div className='field country-con true'><span>{guess.continents[0]}</span></div>}
            {guess.continents[0] !== random.continents[0] && <div className='field country-con false'><span>{guess.continents[0]}</span></div>}
        </div>
    );
};

export default TableRow;
