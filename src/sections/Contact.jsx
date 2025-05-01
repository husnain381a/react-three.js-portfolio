import React from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const formRef = React.useRef();
  const recaptchaRef = React.useRef();

  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  React.useEffect(() => {
    emailjs.init('_-6B3-ta9TGzIiKZi');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        alert("reCAPTCHA verification failed. Please try again.");
        setLoading(false);
        return;
      }

      await emailjs.send('service_35arxu8', 'template_u7phkmn', {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        'g-recaptcha-response': token
      });

      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);
      console.error('Email sending error:', error?.text || error);
      alert('Something went wrong: ' + (error?.text || 'Unknown error'));
    }
  };

  return (
    <section className='c-space my-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src="/assets/terminal.png" alt="terminal" className='absolute inset-0 min-h-screen' />
        <div className='contact-container'>
          <h3 className='head-text mt-10'>Let's Talk</h3>
          <p className='text-lg text-white mt-3'>
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-5 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give a job ..."
              />
            </label>

            <button className='field-btn' type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcxFisrAAAAAMWfvTtImiGQthpeUnGr0oi_VVni"
              size="invisible"
              badge="bottomleft"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
