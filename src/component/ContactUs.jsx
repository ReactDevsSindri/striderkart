import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import React, { useState } from "react";
import { Button } from "../components/ui/button";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center mt-32  ">
      <div className="w-[400px] mx-5">
        <h2 className="text-2xl mb-10">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="my-1">
              Name<span className="text-red-500">*</span>:
            </label>

            <Input
              className="my-3"
              placeholder="Enter Your Name"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="my-1">
              Email<span className="text-red-500">*</span>:
            </label>

            <Input
              className="my-3"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="my-1">
              Message<span className="text-red-500">*</span>:
            </label>

            <Textarea
              className="my-3"
              placeholder="Type your message here."
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <Button className="my-3" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
