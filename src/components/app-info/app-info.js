import './app-info.css';

const AppInfo = ({ increased, employeesCount }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increased}</h2>
            <div className="app-info__icons">
                <i className="fas fa-star"></i> - сотрудник идет на повышение (клик
                на имя)
                <i className="fas fa-cookie"></i> - сотрудник получает премию
            </div>
        </div>
    );
};

export default AppInfo;
