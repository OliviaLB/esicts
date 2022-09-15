import ContactForm from "../Components/ContactForm/ContactForm";
import ContactInfo from "../Components/ContactForm/ContactInfo";

const Contact = () => {
  return (
    <div className="flexcontainer">
      <div className="flex1x2">
        <h1>Contact Us</h1>
        <ContactInfo />
      </div>
      <div className="flex1x2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
