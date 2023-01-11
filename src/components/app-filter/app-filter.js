import './app-filter.css';

const AppFilter = ({ onFilterSelect, activeFilter }) => {
    const buttonData = [
        {
            name: 'all',
            label: 'Все сотрудники',
        },
        {
            name: 'rise',
            label: 'На повышение',
        },
        {
            name: 'moreThan1000',
            label: 'З/П больше 1000$',
        },
    ];

    const buttons = buttonData.map(({ name, label }) => {
        const active = activeFilter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                onClick={() => onFilterSelect(name)}
                className={`btn ${clazz}`}
                type="butoon"
                key={name}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
            {/* <button className="btn btn-light" type="butoon">
                Все сотрудники
            </button>
            <button className="btn btn-outline-light" type="butoon">
                На повышение
            </button>
            <button className="btn btn-outline-light" type="butoon">
                З/П больше 1000$
            </button> */}
        </div>
    );
};

export default AppFilter;
