'use client';


 
 
import { authenticate } from '../lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
 
  return (
    <form className="absolute left-[300px] top-[300px] w-[400px] height-[400px]" action={dispatch}>
      <input className="h-[80px] text-[20px]" type="email" name="email" placeholder="Email" required />
      <input className="h-[80px] text-[20px] ml-[5px]" type="password" name="password" placeholder="Password" required />
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
    <button aria-disabled={pending} className="bg-red-500 text-[22px] mt-[5px] text-white ml-[95px]" type="submit" onClick={handleClick}>
      Login
    </button>
  )
}