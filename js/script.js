
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDfeJXdWU5fktnQww_tS1xTGG07jXlk33U",
  authDomain: "vuejs-listing.firebaseapp.com",
  databaseURL: "https://vuejs-listing.firebaseio.com",
  storageBucket: "vuejs-listing.appspot.com",
  messagingSenderId: "602589398058"
};
firebase.initializeApp(config);

var prefRef = firebase.database().ref('preferences');

var app = new Vue({
  el: '#app',
  data: {
    newPref: {
      comments: '',
      location: '',
      rooms: '',
      type: ''
    }
  },
  firebase: {
    preference: prefRef
  },
  methods: {
    addPref: function() {
      prefRef.push(this.newPref)
      // this.newPref.comments: ''
      // this.newPref.location: ''
      // this.newPref.rooms: ''
      // this.newPref.type: ''
    },
    remPref: function(pref) {
      prefRef.child(pref['.key']).remove()
    }
  }
})
