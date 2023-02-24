import './app-info.css';

const AppInfo = ({
    increased,
    employeesCount,
    setEmployees,
    initialData,
    statusLocalStorage,
    setStatusLocalStorage,
}) => {
    const clearLocalStorage = () => {
        setEmployees(initialData);
        localStorage.clear();
        setStatusLocalStorage(false);
    };

    const onClearButton = statusLocalStorage ? (
        <button
            onClick={clearLocalStorage}
            type="button"
            className="app-info__btn btn btn-warning"
        >
            Очистить локальное хранилище
        </button>
    ) : null;

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increased}</h2>
            <div className="app-info__icons">
                <i className="fas fa-star"></i> - сотрудник на повышение (клик на
                имя)
                <i className="fas fa-cookie"></i> - сотрудник получает премию
                {onClearButton}
            </div>
        </div>
    );
};

export default AppInfo;
