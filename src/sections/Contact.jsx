import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'Mayanksri338@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20 bg-gradient-to-b from-[#0A0A0F] to-[#1A1A2E] text-white" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen opacity-20" />

        <div className="contact-container bg-[#121212] p-10 rounded-lg shadow-xl border border-[#282A36]">
          <h3 className="head-text text-indigo-400">Let's talk</h3>
          <p className="text-lg text-gray-300 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label text-blue-300">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input bg-[#1A1A2E] border border-[#282A36] text-white"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-blue-300">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input bg-[#1A1A2E] border border-[#282A36] text-white"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-blue-300">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input bg-[#1A1A2E] border border-[#282A36] text-white"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
