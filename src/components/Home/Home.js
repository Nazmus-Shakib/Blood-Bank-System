import React from "react";
import { Carousel, Jumbotron } from "react-bootstrap";
import caro1 from "../../images/caro01.jpg";
import caro2 from "../../images/caro02.png";
import caro3 from "../../images/caro03.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousel className="m-4">
        <Carousel.Item className="caro-item" interval={5000}>
          <img className="d-block img-fluid" src={caro1} alt="First slide" />
          <Carousel.Caption>
            <h5>New Dimension for Searching Blood Information</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro-item" interval={5000}>
          <img className="d-block img-fluid" src={caro2} alt="Third slide" />
          <Carousel.Caption>
            <h5>Stay Safe, Spread Compassion and Build a Better World</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro-item" interval={5000}>
          <img className="d-block img-fluid" src={caro3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Manage Blood Information within Your Fingertip</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron className="bg-info m-4">
        <h2>Universal Donors and Recipients</h2>
        <p>
          The most common blood type is O, followed by type A. <br /> <br />
          Type O individuals are often called "universal donors" since their
          blood can be transfused into personswithany blood type. Those with
          type AB blood are called "universal recipients" because they can
          receivebloodofany type. <br /> <br />
          However, since approximately twice as many people in the general
          population have O and A blood types, abloodbank's need for this type
          of blood increases exponentially.
        </p>
      </Jumbotron>

      <Jumbotron className="bg-success m-4">
        <h2>
          DO donate blood, only if you satisfy all of the following conditions:
        </h2>
        <ol>
          <li>You are between age group of 18-60 years.</li>
          <li>Your weight is 45 kgs or more.</li>
          <li>Your hemoglobin is 12.5 gm% minimum.</li>
          <li>Your last blood donation was 3 or more months earlier.</li>
          <li>
            You are healthy and have not suffered from malaria, typhoid or other
            transmissibledisease in the recent past.
          </li>
        </ol>
      </Jumbotron>

      <Jumbotron className="bg-danger m-4">
        <h2>
          DO NOT donate blood, if you have any of the following conditions:
        </h2>
        <ul>
          <li>Cold / fever in the past 1 week.</li>
          <li>Under treatment with antibiotics or any other medication.</li>
          <li>
            Cardiac problems, hypertension, epilepsy, diabetes (on insulin
            therapy), history ofcancer, chronic kidney or liver disease,
            bleeding tendencies, venereal disease etc.
          </li>
          <li>Major surgery in the last 6 months.</li>
          <li>Vaccination in the last 24 hours.</li>
          <li>
            Had a miscarriage in the last 6 months or have been pregnant /
            lactating in thelastoneyear.
          </li>
          <li>Had fainting attacks during last donation.</li>
          <li>Have regularly received treatment with blood products.</li>
          <li>
            Shared a needle to inject drugs/ have history of drug addiction.
          </li>
          <li>
            Had sexual relations with different partners or with a high risk
            individual.
          </li>
          <li> Been tested positive for antibodies to HIV.</li>
        </ul>
      </Jumbotron>

      <div className="testimonials">
        <div className="container">
          <h2 className="text-center mb-4">Testimonials</h2>
          <div className="row row-cols-2">
            <div className="col-md-6 mb-4">
              <h4>Blood Bank</h4>
              A blood bank is a place designed especially for the storage of
              blood and blood products. Large coolersholdthese products at a
              constant temperature and they are available at a moment's notice.
              <br /> <small>- Angela, Resident of Bistari, Putra</small>
            </div>
            <div className="col-md-6 mb-4">
              <h4>About Blood Donation</h4>
              Donating blood is a life saving measure especially when you have a
              rare blood type. Blood donation issafeand simple. It takes only
              about 10 minutes to donate blood - less than the time of an
              average telephonecall.We can save upto 3 to 4 precious lives by
              donating blood.
              <br />
              <small>- Jessie, Donor of Waldorf & Windsor, Sri Hartamas</small>
            </div>
            <div className="col">
              <h4>World Blood Donor Day</h4>
              The day is celebrated to raise awareness globally about the need
              for regular and voluntary blooddonation.
              <br />
              <small>
                - Mr. Muthaiya, Building Manager of The Westside One, Desa
                ParkCity
              </small>
            </div>
            <div className="col">
              <h4>About Blood Bank</h4>
              Being in the Facilities Management business for over 25 years, we
              have gone through many challenges. And with the scarcity of human
              resources especially for this type of industry, the move toward
              the internet and digital age is prudent and timely. <br />
              <small>
                - Jeffrey, Managing Director of JL Facilities Management Sdn Bhd
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
