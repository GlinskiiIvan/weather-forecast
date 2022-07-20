import React, {useContext, useReducer} from "react";

export const CitiesContext = React.createContext({
    cities: [],
});


const initialStateCities = {
    cities: ['Ust-Kamenogorsk', 'Moscow'],
};
const reducerCities = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const updatedCities = [...state.cities, action.city];
            return {...state, cities: updatedCities};
        }
        case 'CHANGE_CITY': {
            const updatedCities = state.cities;
            const indexRemovedCity = updatedCities.indexOf(action.oldCity)
            updatedCities[indexRemovedCity] = action.newCity;
            return {...state, cities: updatedCities};
        }
        case 'REMOVE_CITY': {
            const updatedCities = state.cities.filter((city) => city !== action.city)
            return {...state, cities: updatedCities};
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