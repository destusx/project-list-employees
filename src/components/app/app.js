import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

const initialData = [
    {
        name: 'John C.',
        salary: 800,
        increase: false,
        rise: true,
        id: 1,
    },
    {
        name: 'Alex M.',
        salary: 600,
        increase: false,
        rise: false,
        id: 2,
    },
    {
        name: 'Carl P.',
        salary: 1200,
        increase: true,
        rise: false,
        id: 3,
    },
    {
        name: 'Tommy G.',
        salary: 300,
        increase: false,
        rise: true,
        id: 4,
    },
    {
        name: 'Loam A.',
        salary: 2400,
        increase: false,
        rise: false,
        id: 5,
    },
];

const App = () => {
    const [userId, setUserId] = useState(6);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [employees, setEmployees] = useLocalStorage('employees', initialData);
    const [statusLocalStorage, setStatusLocalStorage] = useState(
        localStorage.getItem('employees') !== null
    );

    const deleteItem = id => {
        setEmployees(employees => {
            setUserId(userId => userId + 1);
            return employees.filter(item => item.id !== id);
        });
    };

    const addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: userId,
        };

        setUserId(userId => userId + 1);

        setEmployees(employees => [...employees, newItem]);

        setStatusLocalStorage(statusLocalStorage => true);
    };

    const onToggleProp = (id, prop) => {
        setEmployees(employees =>
            employees.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }

                return item;
            })
        );
    };

    const searchEmp = (items, term) => {
        if (items.length === 0) {
            return items;
        }

        return items.filter(item => item.name.indexOf(term) > -1);
    };

    const onUpdateSearch = term => {
        setTerm(term);
    };

    const filterItem = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    };

    const onFilterSelect = filter => {
        setFilter(filter);
    };

    const employeesCount = employees.length;
    const increased = employees.filter(item => item.increase).length;
    const visibleData = filterItem(searchEmp(employees, term), filter);

    return (
        <div className="app">
            <AppInfo
                employeesCount={employeesCount}
                increased={increased}
                setEmployees={setEmployees}
                initialData={initialData}
                statusLocalStorage={statusLocalStorage}
                setStatusLocalStorage={setStatusLocalStorage}
            />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter onFilterSelect={onFilterSelect} activeFilter={filter} />
            </div>

            <EmployersList
                employees={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}
            />
            <EmployersAddForm onAdd={addItem} />
        </div>
    );
};

export default App;
