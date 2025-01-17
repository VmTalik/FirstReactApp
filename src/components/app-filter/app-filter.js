import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                Все сотрудники
            </button>

            <button className="btn btn-outline-light" type="button">
                З/П больше 100000 &#8381;
            </button>

            <button className="btn btn-outline-light" type="button">
                На повышение
            </button>
        </div>
    );
}

export default AppFilter;