# API Documentation

This project does **not include any API endpoints**.

All functionality is client-side only:

- Email capture logs to the browser console.
- No server, database, or network requests are used.
- The form does not send data over HTTP.

## Simulated Flow (Client-Side Only)

```ts
function handleSubmit(e) {
  e.preventDefault();
  console.log('Email submitted:', email); // Only output
  alert(`Email logged: ${email}`);
  setEmail('');
}
```

### Example Console Output

```
Email submitted: user@example.com
```

> 🛠️ To add real email collection, integrate with a service like:
> - [Formspree](https://formspree.io/)
> - [Netlify Forms](https://docs.netlify.com/forms/setup/)
> - [Getform](https://getform.io/)
> - Custom serverless function (e.g., Vercel Edge Function)

See `src/components/EmailCapture.tsx` for implementation details.