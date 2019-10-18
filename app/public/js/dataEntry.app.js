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
       .then( response => response.json())
       .then( json => {recordsApp.persons = json})
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
     .then( json => {recordsApp.persons = json })
    .catch( err => {
      console.error('RECORDS POST ERROR:');
      console.error(err);
    });
    this.handleReset();
  },
  handleDeletePerson(event) {
    fetch('api/records/deleteFireFighter.php', {
      method: 'POST',
      body: JSON.stringify(this.recordPerson),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    //this.recordPerson.splice(0,1);
     //location.reload();
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
       .then( json => {recordsApp2.certificate = json })
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

var recordsApp3 = new Vue({
  el: '#recordsApp3',
  data: {
        certTrack: [],
        recordTrack: {}
  },
  methods: {
    fetchCertTrack() {
      fetch('api/records/fetchCertTrack.php')
      .then(response => response.json())
      .then(json => { recordsApp3.certTrack = json })
    },
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
  handleEditCertTrack(event) {
    fetch('api/records/updateCertTrack.php', {
      method: 'POST',
      body: JSON.stringify(this.recordTrack),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
     .then( response => response.json())
     .then( json => {recordsApp.certTrack = json })
    .catch( err => {
      console.error('RECORDS POST ERROR:');
      console.error(err);
    });
    this.handleResetCertTrack();
  },
    handleResetCertTrack() {
      this.recordTrack = {
        firstName: '',
        lastName: '',
        certName: '',
        dateRenewed: '',
        expDate: '',
        personId: '',
        certId: ''
      }
    },
    handleDeleteCertTrack(event) {
      fetch('api/records/deleteCertTrack.php', {
        method: 'POST',
        body: JSON.stringify(this.recordTrack),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      //this.recordPerson.splice(0,1);
       location.reload();
    },
    handleRowClick(person) {
      recordsApp3.recordTrack = person;
    }
  },
  created() {
    this.fetchCertTrack();
  }
});
