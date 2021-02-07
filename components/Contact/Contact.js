import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
import Title from "../Title";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_331cjbf",
      "template_c3ixwqc",
      e.target,
      "user_Ji4s03L3LwJM5zDnlJVx1"
    );
  };
  return (
    <ContactContainer name="contact">
      <Title mainTitle={"Co dalej?"} subTitle={"Zapraszam do kontaktu."} />

      <Fade bottom>
        <Form onSubmit={sendEmail}>
          <Email required type="email" name="email" placeholder="Email" />
          <Textarea
            required
            cols="120"
            rows="5"
            name="message"
            placeholder="Wiadomość"
          />
          <Send type="submit" value="Wyślij" />
        </Form>
      </Fade>
    </ContactContainer>
  );
};

export default Contact;
const ContactContainer = styled.section`
  height: 100%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 25px 0;
  max-width: 1000px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Email = styled.input`
  padding: 10px;
  background-color: #284786;
  border: none;
  color: white;
`;
const Textarea = styled.textarea`
  padding: 10px;
  margin: 15px 0;
  box-sizing: border-box;
  resize: none;
  max-width: 600px;
  width: 100%;
  background-color: #284786;
  border: none;
  color: white;
`;
const Send = styled.input`
  cursor: pointer;
  padding: 10px 60px;
  background-color: #284786;
  color: #f3c981;

  border-radius: 2px;
  border: 2px solid #f3c981;
`;
