USE ocfr; 

CREATE TABLE Person (
    personId INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    address VARCHAR (64),
    email VARCHAR(64),
    dob DATE NOT NULL,
    gender VARCHAR(64) NOT NULL,
    startDate DATE NOT NULL,
    position VARCHAR(64),
    radioNumber VARCHAR (64),
    isActive BOOLEAN
);

CREATE TABLE PersonPhone(
  personId INTEGER,
  phoneType VARCHAR(64),
  phoneNumber VARCHAR (64),
  PRIMARY KEY (personId, phoneNumber),
  FOREIGN KEY (personId) REFERENCES Person (personId)
);

CREATE TABLE Station(
  stationId INTEGER PRIMARY KEY AUTO_INCREMENT,
  chiefId INTEGER,
  FOREIGN KEY (chiefId) REFERENCES Person (personId)
);


CREATE TABLE FireFighter (
  personId INTEGER PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(64),
  lastName VARCHAR(64),
  address VARCHAR (64),
  email VARCHAR(64),
  dob DATE NOT NULL,
  gender VARCHAR(64) NOT NULL,
  startDate DATE NOT NULL,
  position VARCHAR(64),
  radioNumber VARCHAR (64),
  isActive BOOLEAN,
  stationId INTEGER,
  FOREIGN KEY (stationId) REFERENCES Station (stationId)
);

CREATE TABLE Certificate (
  certId INTEGER PRIMARY KEY AUTO_INCREMENT,
  certAgency VARCHAR(64),
  certName  VARCHAR(64),
  defaultExpPeriod INTEGER
);

CREATE TABLE CertTacking(
  personId INTEGER,
  certId INTEGER,
  dateRenewed DATE NOT NULL,
  expDate DATE,
  PRIMARY KEY (personId, certId),
  FOREIGN KEY (personId) REFERENCES Person (personId),
  FOREIGN KEY (certId) REFERENCES Certificate (certId)
);

CREATE TABLE ExpiredCertTracking(
  personId INTEGER,
  certId INTEGER,
  dateRenewed DATE NOT NULL,
  expDate DATE,
  PRIMARY KEY (personId, certId),
  FOREIGN KEY (personId) REFERENCES CertTacking (personId),
  FOREIGN KEY (certId) REFERENCES CertTacking (certId)
)
