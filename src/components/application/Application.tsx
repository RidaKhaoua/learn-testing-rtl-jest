import React from "react";

function Application() {
  return (
    <>
      <h1>Job Application</h1>
      <h2>Section 2</h2>
      <p>All field are required</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdPwUijpHKpJxtp9xdURcDkd-PJF4dSWAEcYdR1HkKA&s=10" alt="macbook" />
      <span title="close">X</span>
      <div data-testid="custom-element">custom Html</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="fullname" value="reda" onChange={() => {}}/>
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label id="terms">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Application;
