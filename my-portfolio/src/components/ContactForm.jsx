import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("manpyrbr");

  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll get back to you soon.</p>;
  }

  return (
    <Form
      className="bg-light text-dark p-5 border shadow"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <Form.Group className="mb-3 col-lg-6" controlId="firstName">
          <Form.Label className="w-100 text-start text-capitalize">
            First name
          </Form.Label>
          <Form.Control type="text" name="firstName" required />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="lastName">
          <Form.Label className="w-100 text-start text-capitalize">
            Last name
          </Form.Label>
          <Form.Control type="text" name="lastName" required />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
          />
        </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="emailAddress">
        <Form.Label className="w-100 text-start text-capitalize">
          Email address
        </Form.Label>
        <Form.Control type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="textarea">
        <Form.Label className="w-100 text-start">Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
