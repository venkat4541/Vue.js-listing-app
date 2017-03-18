var app = new Vue({
  el: '#app',
  data: {
    temp: {
      comments: '',
      location: '',
      rooms: '',
      type: ''
    },
    preferences: [
      {
        comments: "Prefer to have a balcony",
        location: "Fairfax",
        rooms: 3,
        type: "apartment"
      },
      {
        comments: "Prefer to have a balcony",
        location: "McLean",
        rooms: 3,
        type: "apartment"
      }
    ]
  },
  methods: {
    addPref: function() {
      this.preferences.push(temp);
    },
    rem: function(ind) {
      this.preferences.splice(ind,1);
    }
  }
})
