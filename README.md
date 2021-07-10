<h1 align="center">Microsoft Teams Clone 
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png" alt="Logo" width="25" height="25">
</h1>

<p align="center">
 <a href="https://microsoft-teams-engage.netlify.app/">Link to the App</a>
    ·
 <a href="">Video Demo</a>
</p>
    
<!-- ABOUT THE PROJECT -->

### About The Project
* Microsoft Teams clone project built during Microsoft Engage 2021 program. 
* It is a video call and chat application through which we can chat before, during and after a video call. 
* The video call can take place between maximum 2 people at once.

## Built With

### Video Call Application: 
* ![Front-end][front-end-shield]
* ![Back-end][back-end-shield]
* ![Tools][tools-shield]

### Chat Application: 
* ![Front-end][front-end-shield-1]
* ![Back-end][back-end-shield-1]
* ![Tools][tools-shield-1]

<!-- INSTALLATIONS -->

## Getting Started
To install and run the project on your local system, following are the requirements:
### Prerequisites
Make sure to install the required dependencies via node package manager
```sh
  npm install npm@latest -g
```
### Installation

* Video Call Application

To separately run the video call application on your local host, perform the following steps:

Run the following commands to start the server side.

```sh
  npm install && npm start
```
Run the following commands to start the client side and run it on your local host
```sh
  cd client
```
```sh
  npm install && npm start
```

* Chat Application

Run the following commands to start the application on your local host

```sh
  npm install && npm start
```
<!-- APP TUTORIAL-->
## Navigating Through The App

* Login Screen - Login to the chat application via Google or Facebook. If an email id is linked with both Google and Facebook, then sign in can be done with only one of them.

<img src="Images/Login-Screen.png" alt="login screen" width="700"/>

* Chat Window

After logging in, a blank chat window appears. Start a new chat by clicking on the + sign. A video call can be placed by clicking the 'Video Call' option in the navigation bar. Adjacent to it is the logout option.

<img src="Images/Blank-Chat-Window.png" alt="blank chat window" width="700"/>

All the users registered with the app can be added to your chat. Photo sharing, read receipts, formatting the text, and many other things are possible in the chat. The shared photos can be viewed in the right pane. The chat can be deleted by expanding the 'Options' menu in the right pane and clicking the 'Delete' option.

<img src="Images/New-Chat.png" alt="new chat" width="700"/>

* Video Call

The video call welcome screen shows your video and has a form to enter your name. To place a call, click on 'Copy your ID' and send the random generated ID to the person you want to call. 

<img src="Images/Video-Call-Welcome-Screen.png" alt="video call welcome screen" width="700"/>

The person who received the ID needs to copy that in the 'ID to call' input field and click on 'Call' button. You can accept the person's incoming call by clicking on 'Answer' button.

<img src="Images/Placing-Call.png" alt="placing call" width="700"/>

Once the call is accepted, the users are connected and can video call seamlessly with the option to mute audio and video when required. The call can be stopped by clicking on 'Hang Up' button. The video call screen closes and we are navigated back to the chat window.

<img src="Images/Video-Call-2-people.png" alt="video call between 2 people" width="700"/>

<!-- ACKNOWLEDGEMENTS -->

## Resources Used

* [React video call app tutorial](https://youtu.be/oxFr7we3LC8)
* [How does webRTC work? Make a video call app using webRTC](https://youtu.be/rr_Zd16dql0)
* [Firebase chat app - React JS, Firebase, Chat Engine](https://youtu.be/Bv9Js3QLOLY)

<!--MARKDOWN LINKS-->
[front-end-shield]: https://img.shields.io/badge/Front--end-React%20JS%2C%20Material--UI-blueviolet
[back-end-shield]: https://img.shields.io/badge/Back--end-Node%20JS%2C%20Express%2C%20socket.io-blueviolet
[tools-shield]: https://img.shields.io/badge/Tools-Peer%20JS%2C%20webRTC-blueviolet
[front-end-shield-1]: https://img.shields.io/badge/Front--end-React%20JS%2C%20Ant--Design-blueviolet
[back-end-shield-1]: https://img.shields.io/badge/Back--end-Chat%20Engine-blueviolet
[tools-shield-1]: https://img.shields.io/badge/Tools-Firebase%2C%20Axios-blueviolet
