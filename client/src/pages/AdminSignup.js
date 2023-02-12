import { useState } from "react"
import { useSignup2 } from "../hooks/useSignup2"

const AdminSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup2, error, isLoading} = useSignup2()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup2(email, password)
  }

  return (
    <div class="form-wrapper">
    <h1>Sign Up</h1>
  <form onSubmit={handleSubmit}>
    
   <div className="form-item"> 
    <label for="email"></label>
    <input 
      type="email" 
      placeholder="Email Address"
      onChange={(e) => setEmail(e.target.value)} 
      value={email} 
    />
    </div>
    <div className="form-item">
    <label for="password"></label>
    <input 
      type="password"
      placeholder="Password" 
      onChange={(e) => setPassword(e.target.value)} 
      value={password} 
    />
    </div>

    <div className="button-panel">
    <button className="button" disabled={isLoading}>Sign Up</button>
    {error && <div className="error">{error}</div>}
    </div>
  </form>
  <div class="form-footer">
  <p><a href="/login">Already a user?</a></p>
  
</div>
  </div>
  )
}

export default AdminSignup