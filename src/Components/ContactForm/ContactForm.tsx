import classes from "./ContactForm.module.css";
import { useState } from "react";
import uuid from "react-uuid";

const ContactForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inquiry = {
    id: uuid(),
    firstName,
    lastName,
    mobile,
    email,
    message,
  };

  const firstNameChangeHandler = (event: any) => {
    setfirstName(event.target.value);
  };
  const lastNameChangeHandler = (event: any) => {
    setlastName(event.target.value);
  };
  const mobileChangeHandler = (event: any) => {
    setMobile(event.target.value);
  };
  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  };
  const messageChangeHandler = (event: any) => {
    setMessage(event.target.value);
  };

  function submitHandler(event: any) {
    event.preventDefault();
    console.log("Submitted!");
    console.log(firstName, lastName, mobile, email, message);

    fetch(
      "https://esic-d92c3-default-rtdb.europe-west1.firebasedatabase.app/Inquiries.json",
      {
        method: "POST",
        body: JSON.stringify(inquiry),
      }
    );
    alert("Thank you for your question!");

    setfirstName("");
    setlastName("");
    setMobile("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="wrappercol">
      <h2>Further Inquiries</h2>

      <div className={classes.booking}>
        <p>
          If you have any questions regarding our services, or aren’t
          sure if you need physio and would like to discuss your
          injury with a member of our team, please call{" "}
          <b>07964 991445</b> or contact us using the inquiry form.
        </p>
      </div>

      <form
        className={classes.form}
        id="contactform"
        onSubmit={submitHandler}
      >
        <div className={classes["form-control"]}>
          <div>
            <label htmlFor="firstname">First Name: </label>
            <input
              type="text"
              id="firstname"
              onChange={firstNameChangeHandler}
              value={firstName}
            />
          </div>
        </div>

        <div className={classes["form-control"]}>
          <div>
            <label htmlFor="lastname">Last Name: </label>
            <input
              type="text"
              id="lastname"
              onChange={lastNameChangeHandler}
              value={lastName}
            />
          </div>
        </div>

        <div className={classes["form-control"]}>
          <div>
            <label htmlFor="mobile">Mobile / Phone:</label>
            <input
              type="number"
              id="mobile"
              onChange={mobileChangeHandler}
              value={mobile}
            />
          </div>
        </div>

        <div className={classes["form-control"]}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              value={email}
            />
          </div>
        </div>

        <div
          className={`${classes["form-control"]} ${classes.message}`}
        >
          <label htmlFor="textarea">Message:</label>
          <textarea
            form="contactform"
            id="message"
            name="message"
            value={message}
            onChange={messageChangeHandler}
          ></textarea>
        </div>
        <button className={classes.formbtn}>Send Inquiry</button>
      </form>
    </div>
  );
};

export default ContactForm;
