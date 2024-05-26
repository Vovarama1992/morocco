import { authenticate } from '../lib/actions';
export default function Login() {
    return (
        <form action={authenticate}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      )
}