'use client';

{/*import { authenticate } from '../lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <form className="absolute left-[400px] top-[500px] w-[300px] h-[300px]" action={dispatch}>
      <input className="h-[40px]" type="email" name="email" placeholder="Email" required />
      <input className="h-[40px]" type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault()
    }
  }
 
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}*/}