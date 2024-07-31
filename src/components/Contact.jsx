import React from "react";

const Contact = () => {
  return (
    <form>
      <div>
        <lable>Name</lable>
        <input type="text" />
      </div>
      <div>
        <lable>Password</lable>
        <input type="password" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Contact;
