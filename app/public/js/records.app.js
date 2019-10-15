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
        body: JSON.stringify(this.recordPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then( json => {patientRecordsApp.persons.push(json[0])})
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
      address: '',
      email: '',
      dob: '',
      gender: '',
      startDate: '',
      radioNumber: '',
      position: '',
      isActive: ''
    }
  }
},
  created() {
    this.fetchPersons();
  }
} );
