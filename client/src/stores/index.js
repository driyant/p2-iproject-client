import { defineStore } from "pinia";
import axios from "axios";
import Toastify from "toastify-js";

// Func Toast
const showToastSuccess = (text) => {
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to top right, #009933 0%, #009900 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

const showToastError = (text) => {
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #ff0000 0%, #cc0000 100%)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      isLoggedin: false,
      isLoading: false,
      tickets: [],
      orders: [],
      currencies: undefined,
      resultConverted: 0,
      numberConverted: 0,
      url: "https://ipj-al.herokuapp.com",
    };
  },
  actions: {
    checkisLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedin = true;
      }
    },
    async loginHandler(email, password) {
      try {
        const response = await axios({
          url: `${this.url}/user/login`,
          method: "POST",
          data: {
            email: email,
            password: password,
          },
        });
        // console.log(response);
        showToastSuccess(`Login success, Hi there 😀`);
        this.isLoggedin = true;
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("email", response.data.email);
        this.router.push("/");
      } catch (error) {
        if (error.response.statusText === "Unauthorized") {
          showToastError("Invalid email/password");
        } else {
          showToastError("Something went wrong");
        }
      }
    },
    logoutHandler() {
      // console.log("Logout");
      localStorage.clear();
      this.isLoggedin = false;
      showToastSuccess("Bye, have a nice day 😀");
      this.router.push("/login");
    },
    async sendMessageHandler(email, subject, message) {
      // console.log(email, subject, message);
      this.isLoading = true;
      try {
        await axios({
          url: `${this.url}/contact`,
          method: "POST",
          data: {
            email: email,
            subject: subject,
            message: message,
          },
        });
        // console.log(response);
        showToastSuccess("Thank you, message has been sent successfully!");
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        showToastError("Something went wrong.");
        this.isLoading = false;
      }
    },
    async fetchTicket() {
      try {
        const response = await axios({
          url: `${this.url}/ticket`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.tickets = response.data;
        this.fetchExchange();
      } catch (error) {
        console.log(error);
      }
    },
    async addTicketOrder(id) {
      // console.log(id);
      try {
        const response = await axios({
          url: `${this.url}/order/${id}`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(response);
        showToastSuccess(response.data.message);
      } catch (error) {
        // console.log(error);
        showToastError("Something went wrong");
      }
    },
    async fetchOrderDetail() {
      try {
        const response = await axios({
          url: `${this.url}/order`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.orders = response.data;
      } catch (error) {
        showToastError("Something went wrong");
      }
    },
    async payProcess(id) {
      try {
        const response = await axios({
          url: `${this.url}/order/${id}`,
          method: "PATCH",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response);
        showToastSuccess("Success");
        this.fetchOrderDetail();
      } catch (error) {
        console.log(error);
        showToastError("Something went wrong!");
        this.fetchOrderDetail();
      }
    },
    async fetchExchange() {
      try {
        const response = await axios({
          url: "https://api.exchangerate.host/latest",
          method: "GET",
        });
        this.currencies = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async register(username, email, password, fullName, phoneNumber) {
      // console.log(username, email, password, fullName, phoneNumber);
      this.isLoading = true;
      try {
        await axios({
          url: `${this.url}/user/public/register`,
          method: "POST",
          data: {
            username: username,
            email: email,
            password: password,
            fullName: fullName,
            phoneNumber: phoneNumber,
          },
        });
        this.isLoading = false;
        showToastSuccess("Success!");
        this.router.push("/login");
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        showToastError("Something went wrong");
      }
    },
    async convert(numberConverted) {
      try {
        const response = await axios({
          url: `https://api.apilayer.com/exchangerates_data/convert?to=USD&from=IDR&amount=${numberConverted}`,
          method: "GET",
          headers: {
            apiKey: "USn5XuwkeU4R0Lg25ZF3ZJ188cv01uVU",
          },
        });
        console.log(response);
        this.numberConverted = response.data.result;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
