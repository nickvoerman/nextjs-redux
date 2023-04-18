import { configureStore, ThunkAction, Action, AnyAction, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { pokemonsApi } from '../../features/pokemons/pokemons-api';
import pokemonsSlice from '../../features/pokemons/pokemons-slice';

const reducers = combineReducers({
    pokemons: pokemonsSlice,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
});

const reducer: typeof reducers = (state, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return reducers(state, action);
    }
};

const makeStore = () => configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

        }).concat([
            pokemonsApi.middleware,
        ])
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const storeWrapper = createWrapper<AppStore>(makeStore);