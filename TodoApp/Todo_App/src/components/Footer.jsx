import { useDispatch, useSelector } from "react-redux";
import { colorChanged, filterStatusChanged } from '../redux/filters/action';
import React from 'react';
const numberOdtodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return 'No Task';
        case 1:
            return '1 task';
        default:
            return `${no_of_todos} tasks`;
    }
};

const Footer = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos);
    const filters = useSelector((state) => state.filters);
    const todosRemaining = todo.filter(todo => !todo.completed).length;

    const handleStatusChanged = (status) => {
        dispatch(filterStatusChanged(status.trim()));  // Ensure status is dispatched correctly
    };

    const { status, colors } = filters;

    const handleColorChanged = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, "remove"));
        } else {
            dispatch(colorChanged(color, "added"));
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOdtodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                {/* Status Filters */}
                <li 
                    className={`cursor-pointer ${status === 'All' ? 'font-bold' : ''}`}
                    onClick={() => handleStatusChanged('All')}>
                    All
                </li>
                <li>|</li>
                <li 
                    className={`cursor-pointer ${status === 'Complete' ? 'font-bold' : ''}`}
                    onClick={() => handleStatusChanged('Complete')}>
                    Complete
                </li>
                <li>|</li>
                <li 
                    className={`cursor-pointer ${status === 'Incomplete' ? 'font-bold' : ''}`}
                    onClick={() => handleStatusChanged('Incomplete')}>
                    Incomplete
                </li>

                {/* Color Filters */}
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') ? 'bg-green-500' : ''}`}
                    onClick={() => handleColorChanged('green')}>
                </li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') ? 'bg-red-500' : ''}`}
                    onClick={() => handleColorChanged('red')}>
                </li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') ? 'bg-yellow-500' : ''}`}
                    onClick={() => handleColorChanged('yellow')}>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
