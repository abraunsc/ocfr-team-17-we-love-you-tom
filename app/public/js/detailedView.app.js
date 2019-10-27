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
      fetch('api/records/detailedView.php', {
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
      this.handleReset();
  },
  handleSubmitCert(event) {
    fetch('api/records/detailedView.php', {
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
    this.handleReset();
  },
  handleReset() {
    this.persons = {
      firstName: '',
      lastName: '',
      certName: '',
      expDate: ''
    };
    this.recordCert = {
      certName: ''
    }
    this.recordPerson = {
      firstName: null,
      lastName: null
    }
  },
  handleRowClick(person) {
    recordsApp.recordPerson = person;
  }
},
  created() {
  }
} );
