var recordsApp = new Vue({
  el: '#recordsApp',
  data: {
    persons: [],
    recordPerson: {}
  },
  methods: {
    fetchPersons() {
      fetch('dummypeople.php')
      .then(response => response.json())
      .then(json => { reportsApp.persons = json })
    },
    handleSubmit(event) {
      fetch('api/records/index.php', {
        method: 'POST',
        body: JSON.stringify(this.recordPatient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then( json => {patientRecordsApp.patients.push(json[0])})
      .catch( err => {
        console.error('RECORDS POST ERROR:');
        console.error(err);
      });
      this.handleReset();
  },
  handleReset() {
    this.recordPerson = {
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''
    }
  }
},
  created() {
    this.fetchPersons();
  }
} );
