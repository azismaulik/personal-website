import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const formData = {
    from_name: form.name,
    to_name: "Azis",
    from_email: form.email,
    to_email: "aazis.code@gmail.com",
    message: form.message,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (service_id && template_id && public_key) {
        emailjs.send(service_id, template_id, formData, public_key).then(
          (result) => {
            if (result?.text === "OK") {
              alert("Thank you. I will get back to you as soon as possible 😇");
              setForm({
                name: "",
                email: "",
                message: "",
              });
            } else {
              alert("Ahh, something went wrong. Please try again.");
            }
          },

          (error) => {
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900/90 flex justify-center items-center z-20">
          <span className="loader"></span>
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12 mt-20 mb-10 pt-6 border-t border-neutral-400 dark:border-neutral-600">
        <div className="flex-1">
          <Reveal>
            <h1 className="text-4xl font-bold font-port text-neutral-900 dark:text-white">
              Let's Talk
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-2 text-sm md:text-base font-poppins text-neutral-900 dark:text-white">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love yo hear about your project and provide help.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Reveal>
                <h1 className="text-3xl font-bold font-port text-neutral-900 dark:text-white mt-4">
                  Socials
                </h1>
              </Reveal>
              <div className="flex flex-col gap-4 text-sm md:text-base mt-2">
                <Reveal>
                  <Link
                    className="font-poppins underline"
                    href="https://instagram.com/azissmm_"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </Reveal>
                <Reveal>
                  <Link
                    className="font-poppins underline"
                    href="https://github.com/azismaulik"
                    target="_blank"
                  >
                    Github
                  </Link>
                </Reveal>
                <Reveal>
                  <Link
                    className="font-poppins underline"
                    href="https://www.linkedin.com/in/azis-maulana-malik"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </Reveal>
              </div>
            </div>
            <div>
              <Reveal>
                <h1 className="text-3xl font-bold font-port text-neutral-900 dark:text-white mt-4">
                  Email
                </h1>
              </Reveal>
              <Reveal>
                <p className="mt-2 text-sm md:text-base font-poppins text-neutral-900 dark:text-white">
                  aazis.code@gmail.com
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 mt-6 sm:mt-0"
        >
          <div className="flex flex-col gap-1">
            <Reveal>
              <label
                htmlFor="name"
                className="font-port text-lg font-bold text-neutral-900 dark:text-white"
              >
                Name
              </label>
            </Reveal>
            <Reveal width="100%">
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="placeholder:text-neutral-400 w-full rounded px-3 py-2 bg-neutral-200 dark:bg-neutral-900 focus:outline-none font-poppins text-neutral-900 dark:text-white text-sm"
                required
              />
            </Reveal>
          </div>
          <div className="flex flex-col gap-1">
            <Reveal>
              <label
                htmlFor="email"
                className="font-port text-lg font-bold text-neutral-900 dark:text-white"
              >
                Email
              </label>
            </Reveal>
            <Reveal width="100%">
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="placeholder:text-neutral-400 w-full rounded px-3 py-2 bg-neutral-200 dark:bg-neutral-900 focus:outline-none font-poppins text-neutral-900 dark:text-white text-sm"
                required
              />
            </Reveal>
          </div>
          <div className="flex flex-col gap-1">
            <Reveal>
              <label
                htmlFor="message"
                className="font-port text-lg font-bold text-neutral-900 dark:text-white"
              >
                Message
              </label>
            </Reveal>
            <Reveal width="100%">
              <textarea
                rows={5}
                id="message"
                name="message"
                value={form.message}
                onChange={handleTextareaChange}
                placeholder="Your Name"
                className="placeholder:text-neutral-400 w-full rounded px-3 py-2 bg-neutral-200 dark:bg-neutral-900 focus:outline-none font-poppins text-neutral-900 dark:text-white text-sm"
                required
              />
            </Reveal>
          </div>
          <Reveal width="100%">
            <Button
              onClick={() => handleSubmit}
              disabled={loading}
              className={`w-full font-port font-semibold text-lg ${
                loading && "cursor-not-allowed"
              }`}
            >
              Send
            </Button>
          </Reveal>
        </form>
      </div>
    </>
  );
};

export default Contact;
