import Document from "../../components/document";
import Form from "../../components/form";
import "./index.css";
import { useState } from "react";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDate2, setStartDate2] = useState("");
  const [endDate2, setEndDate2] = useState("");
  const [location2, setLocation2] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };
  const handleAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handleSchool = (e) => {
    e.preventDefault();
    setSchool(e.target.value);
  };

  const handleDegree = (e) => {
    e.preventDefault();
    setDegree(e.target.value);
  };

  const handleStartDate = (e) => {
    e.preventDefault();
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    e.preventDefault();
    setEndDate(e.target.value);
  };

  const handleLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };

  const handleCompanyName = (e) => {
    e.preventDefault();
    setCompanyName(e.target.value);
  };

  const handlePositiionTitle = (e) => {
    e.preventDefault();
    setPositionTitle(e.target.value);
  };

  const handleStartDate2 = (e) => {
    e.preventDefault();
    setStartDate2(e.target.value);
  };
  const handleEndDate2 = (e) => {
    e.preventDefault();
    setEndDate2(e.target.value);
  };

  const handleLocation2 = (e) => {
    e.preventDefault();
    setLocation2(e.target.value);
  };

  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <div className="main">
      <div className="form">
        <Form
          handleName={handleName}
          handleEmail={handleEmail}
          handleNumber={handleNumber}
          handleAddress={handleAddress}
          handleSchool={handleSchool}
          handleDegree={handleDegree}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          handleLocation={handleLocation}
          handleCompanyName={handleCompanyName}
          handlePositiionTitle={handlePositiionTitle}
          handleStartDate2={handleStartDate2}
          handleEndDate2={handleEndDate2}
          handleLocation2={handleLocation2}
          handleDescription={handleDescription}
          fullName={fullName}
          email={email}
          number={number}
          address={address}
          school={school}
          degree={degree}
          startDate={startDate}
          endDate={endDate}
          location1={location}
          companyName={companyName}
          positionTitle={positionTitle}
          startDate2={startDate2}
          endDate2={endDate2}
          location2={location2}
          description={description}
        />
      </div>
      <div className="document">
        <Document
          email={email}
          fullName={fullName}
          address={address}
          number={number}
          school={school}
          degree={degree}
          startDate={startDate}
          endDate={endDate}
          location1={location}
          companyName={companyName}
          positionTitle={positionTitle}
          startDate2={startDate2}
          endDate2={endDate2}
          location2={location2}
          description={description}
        />
      </div>
    </div>
  );
};

export default Home;
