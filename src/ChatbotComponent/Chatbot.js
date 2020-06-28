import React, { Component } from "react";
import ChatbotComponent from "./ChatbotComponent";
import { render } from "@testing-library/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Chatbot extends Component {
  constructor() {
    super();
    this.state = {};
    this.introTimer = 0;
  }

  componentDidMount() {
    this.progressTicker = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.progressTicker);
  }

  tick() {
    if (this.introTimer === 100) {
      this.introTimer++;
      toast.success(
        "Have you tried our new helpdesk function, here somebody will awnser all your questions. To acces this, there is a icon in the bottom right of everypage. Fill in your name and you will get helped by an employee!",
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("df");
      render(
        <div>
          <ToastContainer />
        </div>
      );

      return (
        <div>
          <ToastContainer />
        </div>
      );
    } else if (this.introTimer === 500) {
      this.introTimer++;

      toast.success(
        "Okay so I have been able to hack into the message popups, I just wanted to let you know that you should look at somebodys's dog. That may be the key to get inside the system",
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("df");
      render(
        <div>
          <ToastContainer />
        </div>
      );
    } else {
      this.introTimer++;
    }
  }
  render() {
    return (
      <div>
        <ChatbotComponent />
      </div>
    );
  }
}
