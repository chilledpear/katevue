<template>
  <div class="light-mode flex flex-col min-h-screen overflow-hidden">
    <!-- Container -->
    <div class="container">
      <div class="title-container">
        <div class="image-text">M16z</div>
        <div class="image-text2">Michael Saylor - Bitcoin Chad</div>
        <div class="contract-text">
          Contract Address: BfTjPuKUb4rdSBdYfKWVSxPB1sZ9u2bVv1QoBrjppump
        </div>
      </div>

      <!-- CENTER IMAGE -->
      <div class="image-box">
        <!-- Use feature-01.jpg from src/images -->
        <img
          id="center-image"
          src="../images/feature-01.jpg"
          alt="THE STRATEGIST - Feature Image"
          class="center-image"
        />
      </div>

      <!-- CHAT BOX SECTION -->
      <div class="chat-box">
        <div id="chat-display" class="chat-display"></div>
        <div class="input-container">
          <input type="text" id="user-input" placeholder="Type your message..." />
          <button id="send-btn">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  mounted() {
    console.log("Chat component mounted.");
    const userInputEl = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const chatDisplay = document.getElementById("chat-display");

    if (!userInputEl || !sendBtn || !chatDisplay) {
      console.error("One or more required elements are missing in Chat.vue");
    }

    // Save a reference for later use
    this.chatDisplay = chatDisplay;

    // Listen for Enter key press
    userInputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        console.log("Enter pressed, sending message...");
        this.sendMessage();
      }
    });
    // Listen for click on the send button
    sendBtn.addEventListener("click", () => {
      console.log("Send button clicked, sending message...");
      this.sendMessage();
    });
  },
  methods: {
    sendMessage() {
      const userInputEl = document.getElementById("user-input");
      const userInput = userInputEl.value;
      console.log("User input:", userInput);
      if (userInput.trim() !== "") {
        this.displayMessage("HODLER", userInput);
        userInputEl.value = "";
        this.fetchChatGPTResponse(userInput).then((response) => {
          console.log("Received API response:", response);
          this.displayMessage("THE STRATEGIST", response);
        });
      } else {
        console.log("Empty input; message not sent.");
      }
    },
    displayMessage(sender, message) {
      const chatDisplay = this.chatDisplay;
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatDisplay.appendChild(messageElement);
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    },
    async fetchChatGPTResponse(userInput) {
      console.log("Fetching API response for input:", userInput);
      try {
        const baseUrl = window.location.origin;
        console.log("Base URL:", baseUrl);
        const apiUrl = `${baseUrl}/api/chat`;
        console.log("Fetching API at:", apiUrl);
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userInput })
        });
        console.log("HTTP status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API data:", data);
        return data.response;
      } catch (error) {
        console.error("Error in fetchChatGPTResponse:", error);
        return "Not very strategic of you";
      }
    }
  }
};
</script>

<style scoped>
/* RESET & BASE */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
}

/* LIGHT MODE */
.light-mode {
  background-color: #fff;
  color: #333;
  cursor: url("strategist-cursor-light.png"), auto;
}

/* CONTAINER */
.container {
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* TITLE CONTAINER */
.title-container {
  text-align: center;
}
.image-text {
  font-size: 40px;
  font-weight: bold;
  color: #444;
}
.image-text2 {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
}
.contract-text {
  font-size: 20px;
  margin-top: 5px;
}

/* IMAGE BOX */
.image-box {
  width: 100%;
  margin: 0 auto;
}
.center-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border: 4px solid currentColor;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}

/* CHAT BOX */
.chat-box {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  color: #333;
}
.chat-display {
  height: 200px;
  overflow-y: auto;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: #fff;
}
.chat-display > div {
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 4px;
  background-color: #eee;
}

/* INPUT CONTAINER */
.input-container {
  display: flex;
  gap: 10px;
}
#user-input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #ddd;
  color: #333;
}
#send-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  background-color: #555;
  color: #fff;
}
#send-btn:hover {
  background-color: #666;
}

/* MOBILE RESPONSIVENESS */
@media screen and (max-width: 768px) {
  .container {
    padding: 15px;
    gap: 15px;
  }
  .center-image {
    max-width: 300px;
  }
}
@media screen and (max-width: 480px) {
  .container {
    padding: 10px;
    gap: 10px;
  }
  .center-image {
    max-width: 200px;
  }
}
</style>
