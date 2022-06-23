import {createAction} from '@reduxjs/toolkit';

export const addTasks = createAction('addTasks');

export const filterTasks = createAction('filterTasks');

export const pagination = createAction('pagination');

export const loginAction = createAction('login');

export const addTaskAction = createAction('review');
// export const favoriteAction = createAction<offerType>('favorite');
// export const favoritesAction = createAction<[] | offerType[]>('favorites');
