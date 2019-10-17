var detailedViewApp = new Vue({
  el: '#detailedViewApp',
  data: {
    persons: [],
    recordPerson: {},
    certificates: [],
    recordCert: {}
  },
  methods: {
    handleSubmitPerson(event) {
      fetch('api/records/detailedViewFirefighter.php', {
        method: 'POST',
        body: JSON.stringify(this.recordPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
       .then( response => response.json())
       .then(json => { detailedViewApp.persons = json })
       .catch( err => {
        console.error('RECORDS POST ERROR:');
        console.error(err);
      });
      console.log(this.persons);
      this.handleReset();
  },
  handleSubmitCert(event) {
    fetch('api/records/detailedViewCertificate.php', {
      method: 'POST',
      body: JSON.stringify(this.recordCert),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
     .then( response => response.json())
     .then(json => { detailedViewApp.persons = json })
     .catch( err => {
      console.error('RECORDS POST ERROR:');
      console.error(err);
    });
    console.log(this.persons);
    this.handleReset();
  },
  handleReset() {
    this.persons = {
      firstName: '',
      lastName: '',
      certName: '',
      expDate: ''
    }
  },
  handleRowClick(person) {
    recordsApp.recordPerson = person;
  }
},
  created() {
    // this.fetchPersons();
  }
} );
