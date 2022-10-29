import './TableHead.css';

const Table = () => {
    return (
        <div className="table-head">
            <div className="field-title">
                <span>Flag</span>
            </div>
            <div className="field-title">
                <span>Name</span>
            </div>
            <div className="field-title">
                <span>Population</span>
            </div>
            <div className="field-title">
                <span>Area</span>
            </div>
            <div className="field-title">
                <span>Landlocked</span>
            </div>
            <div className="field-title">
                <span>Latitude</span>
            </div>
            <div className="field-title">
                <span>Longtitude</span>
            </div>
            <div className="field-title">
                <span>Continent</span>
            </div>
        </div>
    );
};

export default Table;
