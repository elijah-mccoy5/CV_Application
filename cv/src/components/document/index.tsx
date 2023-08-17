import "./index.css";
const Document = ({
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
    <div className="document">
      <div className="header">
        <h1>{fullName}</h1>
        <div className="icons">
          <h1>{email}</h1>
          <h1>{number}</h1>
          <h1>{address}</h1>
        </div>
      </div>
      <div className="document-main">
        <div className="education">
          <h1>{school}</h1>
          <p>{degree}</p>
          <div className="dates">
            <p>{startDate} - </p>
            <p>- {endDate}</p>
          </div>
          <p>{location1}</p>
        </div>
        <div className="experience">
          <h1>{companyName}</h1>
          <p>{positionTitle}</p>
          <div className="dates">
            <p>{startDate2} -</p>
            <p>- {endDate2}</p>
          </div>
          <p>{location2}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Document;
