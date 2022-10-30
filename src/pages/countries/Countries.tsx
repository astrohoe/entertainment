import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TableHead from "../../components/tablehead/TableHead";
import TableRow from "../../components/tablerow/TableRow";
import Form from "../../components/form/Form";
import './Countries.css';

export type CountryType = {
    area: number;
    landlocked: boolean;
    latlng: number[];
    name: {
        common: string
    };
    population: number;
    continents: string[];
    flags: {
        png: string,
        svg: string
    };
};

const Countries = () => {

    //countries
    const [data, setData] = useState<CountryType[]>([]);
    //random country
    const [random, setRandom] = useState<CountryType>(data[0]);
    //wrong guesses
    const [wrongGuess, setWrongGuess] = useState<CountryType[]>([]);
    //ongoing game
    const [progress, setProgress] = useState<boolean>(true);

    const randomize = (data: CountryType[]): void => {
        const randomCountry: CountryType = data[Math.floor(Math.random() * data.length)];
        setRandom(randomCountry);
    };

    const fetchData = useCallback(
        async () => {
        try {
            const url = 'https://restcountries.com/v3.1/all?fields=name,area,population,continents,flags,landlocked,latlng';
            const response = await fetch(url);
            const datas: CountryType[] = await response.json();
            datas.sort((a, b) => {
                if (a.name.common > b.name.common) {
                    return 1;
                } else {
                    return -1;
                };
            });
            randomize(datas);
            setData(datas);
        } catch (err) {
            console.log(err);
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSubmit = (value: string): void => {
        if (!random) return
        const guess: CountryType = data[data.findIndex((el: {name: {common: string}}) => el.name.common === value)];
        if (guess.name.common === random.name.common) {
            setWrongGuess([guess, ...wrongGuess]);
            setTimeout(() => setProgress(false), 100);
            return;
        };
        setWrongGuess([guess, ...wrongGuess]);
        setData(data.filter((el) => el.name.common !== value));
    };

    const restartGame = (): void => {
        fetchData();
        setWrongGuess([]);
        setProgress(true);
    };

    return (
        <div className="countries-container">
            <Link to="/"><p className="countries-back">&#8592; Go back</p></Link>
            <div className="countries-title">
                <p className="countries-title-upper">You selected <span>Countries Quiz!</span></p>
                <p className="countries-title-lower">Guess the random country:</p>
                <p className="countries-reset" onClick={restartGame}>Restart game</p>
            </div>
            {progress && <Form data={data} onSubmit={handleSubmit} />}
            {!progress && <p className="win">You've won!</p>}
            <TableHead />
            {wrongGuess.map((el, index) => 
                <TableRow 
                    guess={el}
                    random={random}
                    key={index}
                />
            )}
        </div>
    );
};

export default Countries;
