import { useState } from "react";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Typo from "../Typo/Typo";

const Contact = () => {
  const [messageDetails, setMessageDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessageDetails({
      ...messageDetails,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.currentTarget,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            }).then(() => {
              setMessageDetails({
                name: "",
                email: "",
                message: "",
              });
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            });
          }
        );
    }
  };

  return (
    <section id="contact">
      <Heading title="CONTACT" />
      <div className={`${styles.root} container mb-5`}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className={`${styles["form-label"]} form-label`}
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              className={`${styles["form-control"]} form-control`}
              id="name"
              required
              value={messageDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className={`${styles["form-label"]} form-label`}
            >
              Email address
            </label>
            <input
              type="email"
              className={`${styles["form-control"]} form-control`}
              name="email"
              id="email"
              required
              value={messageDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className={`${styles["form-label"]} form-label`}
            >
              Message
            </label>
            <textarea
              className={`${styles["form-control"]} form-control`}
              name="message"
              id="message"
              rows={5}
              required
              value={messageDetails.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className={styles.submitBtn} type="submit">
            <Typo fontFamily="Oswald">SUBMIT</Typo>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
