function PasswordInput() {
    const handleChange =() => {
      console.log('Entering password...');
    }
  
    return (
      <div>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
        />
  
        
      </div>
    );
  }
  export default PasswordInput