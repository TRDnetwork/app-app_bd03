import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert(`Email logged: ${email}`);
    setEmail('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 text-center">
      <h1
        className="text-4xl sm:text-5xl font-bold mb-2 tracking-[-0.025em]"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Launching Soon
      </h1>
      <p className="text-text_dim text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
        Something amazing is on the way
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 text-text placeholder:text-text_dim"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent_alt focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-all duration-200 active:scale-95 active:shadow-lg"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}