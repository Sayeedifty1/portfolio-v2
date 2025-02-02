import { ImLinkedin } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimationHook from "../../hooks/AnimationHook";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_omd26rj",
        "template_but7asv",
        form.current,
        "AQ2KWoZPUHE-EicFD"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <AnimationHook>
      <div id="contact" className="font">
        <div className="mx-auto">
          <h1 className="heading text-center my-20">Lass uns verbinden</h1>
          <div className="row dark:text-white">
            <div className="contactLeft font mb-8 dark:text-white">
              <p className="mb-2 flex">
                <HiMail className="text-2xl mr-2 hover:text-red-500" />
                <span>md.abusayeedifty@gmail.com</span>
              </p>
              <p className="mb-2 flex">
                <RiWhatsappFill className="hover:text-green-600 text-2xl mr-2" />
                <span>(+880)1882021206</span>
              </p>
              <a
                className="mb-2 flex"
                href="https://www.linkedin.com/in/md-abu-sayeed-ifty-8b047b1a6/"
              >
                <ImLinkedin className="mb-2 text-xl hover:text-blue-500 inline-flex mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="contactRight">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Dein Name"
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Deine E-Mail"
                  required
                />
                <label>Nachricht</label>
                <textarea
                  name="message"
                  placeholder="Deine Nachricht"
                  required
                ></textarea>
                <input
                  className="bg-black"
                  type="submit"
                  value="Nachricht senden"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimationHook>
  );
};

export default Contact;
