import React, { useState } from "react";
import { style } from "../util/styles";
import Button from "./Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const data = JSON.parse(localStorage.getItem("formData")) || [];

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject) {
      console.log("Majburiy maydonlar to'ldirilmagan");
    } else if (email.slice(-10) !== "@gmail.com") {
      console.log("Email oxirida '@gmail.com' bo'lishi kerak");
    } else {
      const newEntry = { name, email, subject, message };
      data.push(newEntry);
      localStorage.setItem("formData", JSON.stringify(data));
      console.log("Ma'lumotlar qo'shildi:", data);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div
      id="contact_us"
      className={`${style.containerComponent} ${style.fB} !items-start gap-5 sm:!py-16 md:!py-24 lg:!py-32 py-12`}
    >
      <div className={`w-full sm:w-[47%] md:p-8 p-0`}>
        <h3 className={`${style.h3} mb-7`}>
          Contact <span className={`text-blue`}>Us</span>
        </h3>
        <p className={`${style.p}`}>
          We welcome all your concerns, issues, and suggestions. Feel free to
          get in touch with us at your most convenient time.
        </p>
      </div>
      <div
        className={`w-full sm:w-[47%] md:p-8 p-0 ${style.fCol} items-end gap-3`}
      >
        <input
          onChange={handleChange}
          value={formData.name}
          name="name"
          className="bg-bgInput sm:border-none border-2 text-[14px] md:text-[1.2rem] p-4 rounded-md w-full outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          className="bg-bgInput sm:border-none border-2 text-[14px] md:text-[1.2rem] p-4 rounded-md w-full outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={formData.subject}
          name="subject"
          className="bg-bgInput sm:border-none border-2 text-[14px] md:text-[1.2rem] p-4 rounded-md w-full outline-none"
          type="text"
          placeholder="Subject"
        />
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          className="bg-bgInput sm:border-none border-2 text-[14px] md:text-[1.2rem] resize-none p-4 h-[200px] rounded-md w-full outline-none"
          maxLength="200"
          placeholder="Message"
        />

        <Button
          onClick={handleSubmit}
          title={"Send Massage"}
          btnClass={`submit-btn`}
        />
      </div>
    </div>
  );
};

export default ContactUs;
