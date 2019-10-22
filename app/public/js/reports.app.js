var reportsApp = new Vue({
  el: '#reportsApp',
  data: {
    persons: [],
  },
  methods: {
    fetchPersons() {
      fetch('api/reports/expiredCerts.php')
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
      fetch('api/reports/stationradio.php')
      .then(response => response.json())
      .then(json => { reportsApp2.personsbystationradio = json })
    }
  },
  created() {
    this.fetchPersonsByStationRadio();
  }
});

var reportsApp3 = new Vue({
  el: '#reportsApp3',
  data: {
    certsbystation: []
  },
  methods: {
    fetchCertsByStation() {
      fetch('api/reports/certsByStation.php')
      .then(response => response.json())
      .then(json => { reportsApp3.certsbystation = json })
    }
  },
  created() {
    this.fetchCertsByStation();
  }
});
