var reportsApp = new Vue({
  el: '#reportsApp',
  data: {
    persons: []
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
