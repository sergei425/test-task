import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {addTasks, filterTasks, pagination, loginAction, addTaskAction} from './action'
import browserHistory from '../browser-history';
import {store} from '.';
import {AuthorizationStatus} from './reducer'

export const tasksFetchAction = createAsyncThunk(
  'loadFetchTasks',
  async () => {
    try {
      const {data} = await axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name');
      store.dispatch(addTasks(data));
    } catch (error) {
      console.log(error);
    }
  },
);


export const tasksFetchFilterAction = createAsyncThunk(
  'filterFetchTasks',
  async (filter) => {
    try {
      const {data} = await axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Example&sort_field=' + filter);
      store.dispatch(filterTasks(data));
    } catch (error) {
      console.log(error);
    }
  },
);

export const tasksFetchPagination = createAsyncThunk(
  'paginationTasks',
  async (pageIndex) => {
    try {
      const {data} = await axios.get('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Example&page=' + pageIndex);
      store.dispatch(pagination({pageIndex, ...data}));
    } catch (error) {
      console.log(error);
    }
  },
);

export const authorizationAction = createAsyncThunk(
  'login',
  async (authData) => {
    try {
      const {data: {token}} = await axios.post('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Example/login', {...authData})
      console.log(token);
      store.dispatch(loginAction(AuthorizationStatus.Auth));
      browserHistory.push('/');
    } catch (error) {
      console.log(error);
      store.dispatch(loginAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const addTaskFetchAction = createAsyncThunk(
  'addTask',
  async (reviewData, username) => {
    try {
      const {data} = await axios.post(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=${username}/create`, {...reviewData});
      console.log(data);
      store.dispatch(addTaskAction(data));
    } catch (error) {
      console.log(error);
    }
  },
);

// export const addFavoriteAction = createAsyncThunk(
//   'addFavorite',
//   async ({offerId, status} : FavoriteActionType) => {
//     try {
//       const {data} = await api.post(`${APIRoute.Favorite}/${offerId}/${status}`);
//       store.dispatch(favoriteAction(data));
//     } catch (error) {
//       errorHandle(error);
//       store.dispatch(loginAction(AuthorizationStatus.NoAuth));
//       browserHistory.push(AppRoute.Login);
//     }
//   },
// );

// export const addFavoritesAction = createAsyncThunk(
//   'addFavorites',
//   async () => {
//     try {
//       const {data} = await api.get(APIRoute.Favorite);
//       store.dispatch(favoritesAction(data));
//     } catch (error) {
//       errorHandle(error);
//       store.dispatch(loginAction(AuthorizationStatus.NoAuth));
//     }
//   },
// );

// export const logoutAction = createAsyncThunk(
//   'logout',
//   async () => {
//     try {
//       await api.delete(APIRoute.Logout);
//       dropToken();
//       store.dispatch(loginAction(AuthorizationStatus.NoAuth));
//       const {data} = await api.get(APIRoute.Hotels);
//       store.dispatch(loadOffersAction(data));
//     } catch (error) {
//       errorHandle(error);
//     }
//   },
// );
