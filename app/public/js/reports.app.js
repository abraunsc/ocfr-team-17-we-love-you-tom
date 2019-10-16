var reportsApp = new Vue({
  el: '#reportsApp',
  data: {
    persons: [],
  },
  methods: {
    fetchPersons() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { reportsApp.persons = json })
    }
  },
  created() {
    this.fetchPersons();
  }
});

var reportsApp2 = new Vue({
  el: '#reportsApp2',
  data: {
    personsbystationradio: []
  },
  methods: {
    fetchPersonsByStationRadio() {
      fetch('api/records/stationradio.php')
      .then(response => response.json())
      .then(json => { reportsApp2.personsbystationradio = json })
    }
  },
  created() {

    this.fetchPersonsByStationRadio();

  }
});
