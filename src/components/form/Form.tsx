import { useState, useRef } from 'react';
import { CountryType } from '../../pages/countries/Countries';
import './Form.css';

type PropTypes = {
    data: CountryType[];
    onSubmit: (value: string) => void;
}

const Form = ({ data, onSubmit }: PropTypes) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [menu, setMenu] = useState<CountryType[]>([]);

    const compare = () => {
        removeElements();
        let arr: CountryType[] = [];
        data.forEach(country => {
            if (country.name.common.toLowerCase().startsWith(inputRef.current!.value.toLowerCase()) && inputRef.current!.value != "") {
                arr.push(country)
            };
        });
        setMenu(arr);
    };

    const displayCountry = (value: string) => {
        inputRef.current!.value = '';
        removeElements();
        onSubmit(value)
    };

    const removeElements = () => {
        setMenu([])
    };

    return (
        <div className='form-container'>
            <form autoComplete="off">
                <input 
                    type="text"
                    id="guessValue"
                    name="guessValue"
                    ref={inputRef}
                    placeholder="Place your country here"
                    onKeyUp={compare}
                />
                <ul className="option-list">
                    {menu.map((el, i) => 
                        <div className='option' key={i} onClick={() => displayCountry(el.name.common)}>
                            <img className='option-flag' src={el.flags.svg} alt="Country flag" />
                            <li className='option-item'>{el.name.common}</li>
                        </div>
                    )}
                </ul>
            </form>
        </div>
    );
};

export default Form;
