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
      // .then( response => response.json())
      // .then( json => {recordsApp.persons.push(json[0])})
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
// ------------------------------------------------------------------------------------
var recordsApp2 = new Vue({
  el: '#recordsApp2',
  data: {
    certificate: [],
    certRecord:{}
  },
  methods: {
    fetchCertificate() {
      fetch('api/records/certpull.php')
      .then(response => response.json())
      .then(json => { recordsApp2.certificate = json })
    },
    handleSubmitCert(event) {

      console.log(this.certRecord);
      fetch('api/records/postcert.php', {
        method: 'POST',
        body: JSON.stringify(this.certRecord),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then( json => {recordsApp2.certificate.push(json[0])})
      .catch( err => {
        console.error('RECORDS POST ERROR:');
        console.error(err);
      });
      this.handleReset();
  },

  handleRowClickCert(person) {
  recordsApp2.certRecord = person;
},

handleDeleteCert(event) {
  fetch('api/records/deleteCert.php', {
    method: 'POST',
    body: JSON.stringify(this.certRecord),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  // this.recordPerson.splice(0,1);
   location.reload();
},
  handleReset() {
    this.certRecord = {
      certAgency: '',
      certName: '',
      defaultExpPeriod: '',
    }
  }

},
  created() {
    this.fetchCertificate();
  }
} );
