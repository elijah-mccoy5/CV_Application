import "./index.css";

const Form = ({
  handleName,
  handleEmail,
  handleNumber,
  handleAddress,
  handleSchool,
  handleDegree,
  handleStartDate,
  handleEndDate,
  handleLocation,
  handleCompanyName,
  handlePositiionTitle,
  handleStartDate2,
  handleEndDate2,
  handleLocation2,
  handleDescription,
  fullName,
  email,
  number,
  address,
  school,
  degree,
  startDate,
  endDate,
  location1,
  companyName,
  positionTitle,
  startDate2,
  endDate2,
  location2,
  description,
}) => {
  return (
    <div className="all-forms">
      <div className="formContainer">
        <h1>Personal Information</h1>
        <form>
          <input
            onChange={handleName}
            placeholder="Full name"
            value={fullName}
          />
          <input onChange={handleEmail} placeholder="Email" value={email} />
          <input
            onChange={handleNumber}
            placeholder="Phone Number"
            value={number}
          />
          <input
            onChange={handleAddress}
            placeholder="Address"
            value={address}
          />
        </form>
      </div>
      <div className="formContainer">
        <h1>Education</h1>
        <form>
          <input placeholder="School" onChange={handleSchool} value={school} />
          <input placeholder="Degree" onChange={handleDegree} value={degree} />
          <div className="dates">
            <input
              placeholder="Start Date"
              onChange={handleStartDate}
              value={startDate}
            />
            <input
              placeholder="End Date"
              onChange={handleEndDate}
              value={endDate}
            />
          </div>
          <input
            placeholder="Location"
            onChange={handleLocation}
            value={location1}
          />
        </form>
      </div>
      <div className="formContainer">
        <h1>Experience</h1>
        <form>
          <input
            placeholder="Company Name"
            onChange={handleCompanyName}
            value={companyName}
          />
          <input
            placeholder="Position Titile"
            onChange={handlePositiionTitle}
            value={positionTitle}
          />
          <div className="dates">
            <input
              placeholder="Start Date"
              onChange={handleStartDate2}
              value={startDate2}
            />
            <input
              placeholder="End date"
              onChange={handleEndDate2}
              value={endDate2}
            />
          </div>
          <input
            placeholder="Location"
            onChange={handleLocation2}
            value={location2}
          />
          <input
            placeholder="Description"
            onChange={handleDescription}
            value={description}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
