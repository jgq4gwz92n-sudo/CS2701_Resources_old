export default function RegistrationForm() {
  
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");

  alert(`Submitted: ${name} — ${email}`);
}


  return (
    <main id="register">
      <h2>Register with Fresh Food For All</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </main>
  );
}