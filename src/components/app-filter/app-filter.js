import './app-filter.css';


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="butoon">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="butoon">
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="butoon">
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;