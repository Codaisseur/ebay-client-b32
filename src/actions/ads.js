import axios from "axios";

// Action Constants

export const SET_ADS = 'SET_ADS';
export const SELECT_AD = 'SELECT_AD';
export const ADD_AD = 'ADD_AD';

// Action Creators

const setAds = (ads) => ({
  type: SET_ADS,
  payload: ads
})

const selectAd = ad => ({
  type: SELECT_AD,
  payload: ad
});

// Thunks

export const fetchAds = () => {
  return (dispatch, _getState) => {
    axios.get("http://localhost:4000/ads").then(res => {
      dispatch(setAds(res.data.rows));
    });
  }
}

export const fetchAd = (id) => {
  return (dispatch, _getState) => {
    axios.get(`http://localhost:4000/ads/${id}`).then(res => {
      dispatch(selectAd(res.data));
    });
  };
};
