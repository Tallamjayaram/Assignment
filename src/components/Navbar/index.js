// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FaFacebook,
  FaRegStar,
  FaGoogle,
  FaTwitter,
  FaRegCopyright,
} from 'react-icons/fa'
// eslint-disable-next-line import/no-extraneous-dependencies
import {FaLocationDot, FaInstagram} from 'react-icons/fa6'
// eslint-disable-next-line import/no-extraneous-dependencies
import {IoIosSend} from 'react-icons/io'

import './index.css'

const Navbar = () => (
  <div className="body">
    <div className="whole">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkau7lrXY7n8yE1te78l17pSCYa5iDn1ubQ&usqp=CAU"
        alt=""
        className="top-1"
      />
      <div className="nav">
        <a href="/home" className="inner">
          Home
        </a>
        <a href="/taxi" className="inner">
          Taxi
        </a>
        <a href="/mybook" className="inner">
          My Bookings
        </a>
        <a href="/setting" className="inner">
          Settings
        </a>
        <a href="/login" className="inner">
          Login
        </a>
      </div>
    </div>
    <div className="middle">
      <h1 className="text-middle">
        Lorem ipsum dolor sit amet consectetun adopting elit.
      </h1>
    </div>
    <div className="button-section">
      <button type="button" className="buttons">
        Activity
      </button>
      <button type="button" className="buttons selected">
        Rental
      </button>
      <button type="button" className="buttons">
        Taxi
      </button>
      <br />
    </div>
    <form className="input-section">
      <FaLocationDot />
      <input
        type="text"
        className="form-control location"
        placeholder="Enter location"
      />
      <select className="form-control select">
        <option value="">Select Activity</option>
      </select>
      <input type="date" className="calendar" />
      <button type="button" className="buttons selected">
        Search
      </button>
    </form>
    <div className="lists">
      <div className="inital himachal">
        <h1>himachal</h1>
      </div>
      <div className="second">
        <h4>in India</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="goa inital">
        <h3>Goa</h3>
      </div>
    </div>
    <div className="lists">
      <div className="inital rishikesh">
        <h3>Rishikesh</h3>
      </div>
      <div className="inital jammu">
        <h3>Jammu and Kashmir</h3>
      </div>
    </div>
    <div className="bottom-3">
      <h1>What would you like to do?</h1>
      <p>Lorem Ipsum is simply dummy text of the printing.</p>
      <div className="lists">
        <div className="inital adventure">
          <h1>Adventure</h1>
        </div>
        <div className="inital rental">
          <h1>Rental</h1>
        </div>
        <div className="inital taxi">
          <h1>Taxi Booking</h1>
        </div>
      </div>
    </div>
    <div className="bottom-3">
      <h1>Popular Things to Do!</h1>
      <div className="b-1">
        <div className="b2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlI_zsK_D9r52iOmlY-EG-EH79rOsGaxekJQ&usqp=CAU"
            className="im"
            alt=""
          />
          <br />
          <FaLocationDot />
          <span>Manali</span>
          <div className="inner-b2">
            <p>Paragling in Manali</p>
            <p>$70</p>
          </div>
          <p>
            4.5
            <FaRegStar />
            <span>Check Availability</span>
          </p>
        </div>
        <div className="b2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlI_zsK_D9r52iOmlY-EG-EH79rOsGaxekJQ&usqp=CAU"
            className="im"
            alt=""
          />
          <br />
          <FaLocationDot />
          <span>Manali</span>
          <div className="inner-b2">
            <p>Paragling in Manali</p>
            <p>$70</p>
          </div>
          <p>
            4.5
            <FaRegStar />
            <span>Check Availability</span>
          </p>
        </div>
        <div className="b2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlI_zsK_D9r52iOmlY-EG-EH79rOsGaxekJQ&usqp=CAU"
            className="im"
            alt=""
          />
          <br />
          <FaLocationDot />
          <span>Manali</span>
          <div className="inner-b2">
            <p>Paragling in Manali</p>
            <p>$70</p>
          </div>
          <p>
            4.5
            <FaRegStar />
            <span>Check Availability</span>
          </p>
        </div>
      </div>
      <div className="b-1">
        <div className="b2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAGukrw7MzzDOmbmoNurAOyqp8_n9cwrLTw&usqp=CAU"
            className="im"
            alt=""
          />
          <br />
          <FaLocationDot />
          <span>Manali</span>
          <div className="inner-b2">
            <p>Mahindra Thar</p>
            <p>$300</p>
          </div>
          <p>
            4.5
            <FaRegStar />
            <span>(546 Reviews)</span>
          </p>
        </div>
        <div className="b2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAGukrw7MzzDOmbmoNurAOyqp8_n9cwrLTw&usqp=CAU"
            className="im"
            alt=""
          />
          <br />
          <FaLocationDot />
          <span>Manali</span>
          <div className="inner-b2">
            <p>Mahindra Thar</p>
            <p>$300</p>
          </div>
          <p>
            4.5
            <FaRegStar />
            <span>(546 Reviews)</span>
          </p>
        </div>
        <div className="b2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAGukrw7MzzDOmbmoNurAOyqp8_n9cwrLTw&usqp=CAU"
            className="im"
            alt=""
          />
          <br />
          <FaLocationDot />
          <span>Manali</span>
          <div className="inner-b2">
            <p>Mahindra Thar</p>
            <p>$70</p>
          </div>
          <p>
            4.5
            <FaRegStar />
            <span>(546 Reviews)</span>
          </p>
        </div>
      </div>
    </div>
    <div className="river-rafting">
      <h1>River Rafting in Rishikesh</h1>
      <p>10kms River Rafting from Brahmpuri to Rishikesh ramjhula</p>
      <button type="button" className="buttons selected">
        Explore Now
      </button>
    </div>
    <div className="book-taxi">
      <div className="book-ride">
        <h1>Book Your Ride</h1>
        <p>
          Lorem ipsum dolor sit amet,consectetur adipiscinge elit,sed do eiusmod
          tempor incididunt.
        </p>
      </div>
      <div className="book-taxis">
        <p>Looking for Taxi</p>
        <h1>Request a ride now</h1>
        <FaLocationDot />
        <input type="text" placeholder="Enter Pickup location" />
        <br />
        <FaLocationDot />
        <input type="text" placeholder="Enter Dropoff Location" />
        <br />
        <button type="button" className="buttons selected">
          Search
        </button>
      </div>
    </div>
    <div className="footer">
      <div className="b">
        <div className="f1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkau7lrXY7n8yE1te78l17pSCYa5iDn1ubQ&usqp=CAU"
            alt=""
            className="b-i"
          />
          <p>
            Contrary to popular belief,Lorem Ipsum is not simply random text.It
            has roots in a piece of classical
          </p>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>
        <div>
          <h1>services</h1>
          <p>Adventure</p>
          <p>Rental</p>
          <p>Taxi Booking</p>
        </div>
        <div>
          <h1>Company</h1>
          <p>About us</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Support</p>
        </div>
        <div>
          <h1>SUBSCRIBE</h1>
          <input type="email" placeholder="Enter Email Address" />
          <IoIosSend />
        </div>
      </div>
      <div className="f-b">
        <p>
          Copyrights <FaRegCopyright />
          2022 | All Rights reserved.
        </p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  </div>
)

export default Navbar
