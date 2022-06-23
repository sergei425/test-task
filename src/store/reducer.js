import { createReducer } from '@reduxjs/toolkit';
import {addTasks, filterTasks, pagination, loginAction} from './action'
// import { favoriteAction, favoritesAction, filterOffersAction, getCityAction, loadOffersAction, loginAction, offerAction, reviewAction, setError, pagination } from './action';
// import { AuthorizationStatus } from './../const';
// import { offerType, FilterOffers } from '../types/offerType';
// import { reviewsType } from '../types/reviewType';

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
}


const initialState = {
  tasks: [],
  totalTaskCount: 0,
  pageSize: 3,
  currentPage: 1,
  authorizationStatus: AuthorizationStatus.NoAuth,
};

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(addTasks, (state, action) => {
    state.tasks = action.payload.message.tasks
    state.totalTaskCount = action.payload.message.total_task_count
  })
  .addCase(filterTasks, (state, action) => {
    state.tasks = action.payload.message.tasks
  })
  .addCase(pagination, (state, action) => {
    console.log(action);
    state.currentPage = action.payload.pageIndex
    state.tasks = action.payload.message.tasks
  })
  .addCase(loginAction, (state, action) => {
    state.authorizationStatus = action.payload;
  })
    // .addCase(getCityAction, (state, action) => {
    //   state.city = action.payload;
    //   const newOfferList = state.dataOffers.filter((offer: { city: {name: string}}) => offer.city.name === state.city);
    //   state.offersOfCity = newOfferList;
    // })
    // .addCase(filterOffersAction, (state, action) => {
    //   const filterOffers: FilterOffers = {
    //     'Price: low to high': (prev: offerType, next: offerType) => prev.price - next.price,
    //     'Price: high to low': (prev: offerType, next: offerType): number => next.price - prev.price,
    //     'Top rated first': (prev: offerType, next: offerType) => next.rating - prev.rating,
    //   };
    //   if (action.payload === 'Popular') {
    //     state.offersOfCity = state.dataOffers.filter((offer: { city: {name: string}}) => offer.city.name === state.city);
    //   }
    //   state.offersOfCity = state.offersOfCity.sort(filterOffers[action.payload]);
    // })
    // .addCase(loadOffersAction, (state, {payload}): void => {
    //   state.dataOffers = payload;
    //   const newOfferList = state.dataOffers.filter((offer: { city: {name: string}}) => offer.city.name === state.city);
    //   state.offersOfCity = newOfferList;
    //   state.cityList = [...new Set(state.dataOffers.map((offer) => offer.city.name))];
    //   state.isLoading = true;
    // })
    // .addCase(loginAction, (state, action) => {
    //   state.authorizationStatus = action.payload;
    //   if (state.authorizationStatus === AuthorizationStatus.Auth) {
    //     state.favoriteOffers = state.dataOffers.filter((item) => item.isFavorite);
    //   }
    // })
    // .addCase(offerAction, (state, {payload}): void => {
    //   state.isLoading = false;
    //   state.offer = payload.dataOffer;
    //   state.comments = payload.dataComments.sort((prev, next) => new Date(next.date).getTime() - new Date(prev.date).getTime());
    //   state.nearbies = payload.dataNearby;
    //   state.isLoading = true;
    // })
    // .addCase(setError, (state, action) => {
    //   state.error = action.payload;
    // })
    // .addCase(reviewAction, (state, action) => {
    //   state.comments = action.payload;
    // })
    // .addCase(favoriteAction, (state, {payload}) => {
    //   state.offersOfCity = state.offersOfCity.map((offer) => (offer.id === payload.id ? {...offer, ...payload} : offer));
    //   state.favoriteOffers = state.favoriteOffers.map((offer) => (offer.id === payload.id ? {...offer, ...payload} : offer));
    //   state.nearbies = state.nearbies.map((offer) => (offer.id === payload.id ? {...offer, ...payload} : offer));
    //   state.offer = {...state.offer, ...payload};
    // })
    // .addCase(favoritesAction, (state, action) => {
    //   state.isLoading = false;
    //   state.favoriteOffers = action.payload;
    //   state.isLoading = true;
    // });
});

export { reducer };

