var reportsApp = new Vue({
  el: '#reportsApp',
  data: {
    persons: []
  },
  methods: {
    fetchPersons() {
      fetch('dummypeople.php')
      .then(response => response.json())
      .then(json => { reportsApp.persons = json })
    }
  },
  created() {
    this.fetchPersons();
  }
});
