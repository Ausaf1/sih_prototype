import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./email.css";

const EmailSend = () => {
  const SERVICE_ID = "service_rb7lepi";
  const TEMPLATE_ID = "template_3kzi9w9";
  const USER_ID = "OzntU_mgvvlWOHLFd";
  //   console.log(SERVICE_ID, TEMPLATE_ID, USER_ID);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
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
    e.target.reset();
  };
  return (
    // <div className="Cont">
    //   <Form onSubmit={handleOnSubmit}>
    //     <Form.Field
    //       id="form-input-control-email"
    //       control={Input}
    //       label="Email"
    //       name="user_email"
    //       placeholder="Email…"
    //       required
    //       icon="mail"
    //       iconPosition="left"
    //     />
    //     <Form.Field
    //       id="form-input-control-last-name"
    //       control={Input}
    //       label="Name"
    //       name="user_name"
    //       placeholder="Name…"
    //       required
    //       icon="user circle"
    //       iconPosition="left"
    //     />
    //     <Form.Field
    //       id="form-textarea-control-opinion"
    //       control={TextArea}
    //       label="Message"
    //       name="user_message"
    //       placeholder="Message…"
    //       required
    //     />
    //     <Button type="submit" color="green">
    //       Submit
    //     </Button>
    //   </Form>
    // </div>
    <>
      <div class="boxy">
        <div class="boxy-form">
          <div class="boxy-login-tab"></div>
          <div class="boxy-login-title">
            <div class="i i-login"></div>
            <h2>REGISTER</h2>
          </div>
          <form onSubmit={handleOnSubmit}>
            <div class="boxy-login">
              <div class="fieldset-body" id="login_form">
                {/* <button onclick="openLoginInfo();" class='b b-form i i-more' title='Mais Informações'></button> */}
                <p class="field">
                  <label for="Name">Institute Name</label>
                  <input type="text" id="user" title="Institute Name" />
                  <span id="valida" class="i i-warning"></span>
                </p>
                <p class="field">
                  <label for="Email">E-mail</label>
                  <input
                    type="text"
                    id="user"
                    name="user_email"
                    title="Email"
                  />
                  <span id="valida" class="i i-warning"></span>
                </p>
                <p class="field">
                  <label for="Message">Message</label>
                  <input
                    type="text"
                    id="user"
                    name="user_message"
                    title="Ask for Empanell ID"
                  />
                  <span id="valida" class="i i-warning"></span>
                </p>
                <p class="field">
                  <label for="Message">Document</label>
                  <input
                    type="text"
                    id="user"
                    name="user_message"
                    title="Add a Proof"
                  />
                  <span id="valida" class="i i-warning"></span>
                </p>
                <input type="submit" id="do_login" value="SEND" title="SEND" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EmailSend;
