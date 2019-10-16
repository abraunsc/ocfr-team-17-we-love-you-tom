var recordsApp = new Vue({
  el: '#recordsApp',
  data: {
    persons: [],
    recordPerson: {}
  },
  methods: {
    fetchPersons() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { recordsApp.persons = json })
    },
    handleSubmit(event) {
      fetch('api/records/postFirefighter.php', {
        method: 'POST',
        body: JSON.stringify(this.recordPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      //  .then( response => response.json())
      //  .then( json => {recordsApp.persons.push(json[0])})
      // .catch( err => {
      //   console.error('RECORDS POST ERROR:');
      //   console.error(err);
      // });
      this.handleReset();
  },
  handleEditPerson(event) {
    fetch('api/records/updateFireFighter.php', {
      method: 'POST',
      body: JSON.stringify(this.recordPerson),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
     .then( response => response.json())
     .then( json => {recordsApp.persons.push(json[0])})
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
      stationId: ''
    }
  },
  handleRowClick(person) {
    recordsApp.recordPerson = person;
  }
},
  created() {
    this.fetchPersons();
  }
} );

var recordsApp3 = new Vue({
  el: '#recordsApp3',
  data: {
        certTrack: [],
        recordTrack: {}
  },
  methods: {
    handleSubmitTrack(event) {

      fetch('api/records/postCertTrack.php', {
        method: 'POST',
        body: JSON.stringify(this.recordTrack),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
       // .then( response => response.json())
       // .then( json => {recordsApp3.certTrack.push(json[0])})
      // .catch( err => {
      //   console.error('RECORDS POST ERROR:');
      //   console.error(err);
      // });
      this.handleResetCertTrack();
  },
    handleResetCertTrack() {
      this.recordTrack = {
        firstName: '',
        lastName: '',
        certName: '',
        dateRenewed: '',
        expDate: ''
      }
    }
  },
  created() {

  }
});
