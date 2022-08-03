import React, {useReducer} from "react";

export const CitiesContext = React.createContext({
    cities: [],
    isIncludes: false
});

const initialStateCities = JSON.parse(localStorage.getItem('data')) || {cities: [], isIncludes: false};

const reducerCities = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            if(!state.cities.includes(action.city)) {
                const updatedCities = [...state.cities, action.city];
                const newState = {...state, cities: updatedCities, isIncludes: false};
                localStorage.setItem('data', JSON.stringify(newState));
                return newState;
            } else {
                return {...state, isIncludes: true};
            }
        }
        case 'CHANGE_CITY': {
            if (!state.cities.includes(action.newCity)) {
                const updatedCities = state.cities;
                const indexRemovedCity = updatedCities.indexOf(action.oldCity)
                updatedCities[indexRemovedCity] = action.newCity;
                const newState = {...state, cities: updatedCities, isIncludes: false};
                localStorage.setItem('data', JSON.stringify(newState));
                return newState;
            } else {
                return {...state, isIncludes: true};
            }
        }
        case 'REMOVE_CITY': {
            const updatedCities = state.cities.filter((city) => city !== action.city)
            const newState = {...state, cities: updatedCities};
            localStorage.setItem('data', JSON.stringify(newState));
            return newState;
        }
        case 'CLOSE_WARNING_INCLUDES': {
            return {...state, isIncludes: false};
        }
    }
}

export const CitiesContextProvider = (props) => {
    const value = useReducer(reducerCities, initialStateCities);
    return (
        <CitiesContext.Provider value={value}>
            {props.children}
        </CitiesContext.Provider>
    )
}