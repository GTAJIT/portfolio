import React from "react";
import {SocialIcons} from "../components/component"

export default function Contact() {
  return (
    <>
      <div className="h-screen flex items-center justify-between">
        <div className="flex flex-col justify-between">
          <div className="">
            <p><SocialIcons/></p>
            <span>
              <h1>Get in Touch</h1>
              <p>
                Have questions or ready to transform your business idea with AI
                automation ?
              </p>
            </span>
          </div>
          <div className="">
            <span>email</span>
            <span>no</span>
          </div>
        </div>
        <div className="">form</div>
      </div>
    </>
  );
}
