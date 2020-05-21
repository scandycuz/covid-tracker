import KEYS from './KEYS';

export default {
  login: function(email, password) {
    console.log('hello world!');
  },
  geocode: function(lat, lng) {
    const params = `latlng=${lat},${lng}&key=${KEYS.maps}`;

    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?${params}`);
  },
  fetchDailyCovidStatistics: async function() {
    return fetch('https://covidtracking.com/api/states/daily');
  },
};
