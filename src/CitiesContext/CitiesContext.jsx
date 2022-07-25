import React, {useContext, useReducer} from "react";

export const CitiesContext = React.createContext({
    cities: [],
});


/*const initialStateCities = {
    cities: ['Усть-Каменогорск', 'Москва'],
    cityIncludes: false,
};*/
// const initialStateCities = JSON.parse(localStorage.getItem('data' || {}));
/*localStorage.setItem('data', JSON.stringify({cities: ['Усть-Каменогорск', 'Москва'],
    cityIncludes: false}));*/

const initialStateCities = JSON.parse(localStorage.getItem('data')) || {cities: [], cityIncludes: false};

const reducerCities = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            if(!state.cities.includes(action.city)) {
                const updatedCities = [...state.cities, action.city];
                const newState = {...state, cities: updatedCities, cityIncludes: false};
                localStorage.setItem('data', JSON.stringify(newState));
                return newState;
            } else {
                return {...state, cityIncludes: true};
            }
        }
        case 'CHANGE_CITY': {
            if (!state.cities.includes(action.newCity)) {
                const updatedCities = state.cities;
                const indexRemovedCity = updatedCities.indexOf(action.oldCity)
                updatedCities[indexRemovedCity] = action.newCity;
                const newState = {...state, cities: updatedCities, cityIncludes: false};
                localStorage.setItem('data', JSON.stringify(newState));
                return newState;
            } else {
                return {...state, cityIncludes: true};
            }
        }
        case 'REMOVE_CITY': {
            const updatedCities = state.cities.filter((city) => city !== action.city)
            const newState = {...state, cities: updatedCities};
            localStorage.setItem('data', JSON.stringify(newState));
            return newState;
        }
        case 'CLOSE_WARNING_INCLUDES': {
            return {...state, cityIncludes: false};
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