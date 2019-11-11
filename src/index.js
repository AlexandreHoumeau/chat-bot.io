import './index.scss';

class ChatBot {
  constructor() {
    this.addMsg = document.forms['add-msg'];
    this.msgContainer = document.getElementById('ownMsg');
    this.elBody = document.querySelector('body');
    this.request = new XMLHttpRequest();
  }

  speak(addMsg = this.addMsg) {
    addMsg.addEventListener('submit', (e) => {
      e.preventDefault();
      const { value } = addMsg.querySelector('input[type="text');
      this.storingMsg(value);
      this.botAnanlys(value);
    });
  }

  storingMsg(value) {
    const elDiv = document.createElement('div');
    const elDivMsg = document.createElement('div');

    elDiv.classList.add('d-flex');
    elDiv.classList.add('mb-4');
    elDiv.classList.add('justify-content-end');

    elDivMsg.textContent = value;
    elDivMsg.classList.add('msg_cotainer_send');
    elDiv.appendChild(elDivMsg);
    this.msgContainer.append(elDiv);
  }

  storingBotMsg(value) {
    const elDiv = document.createElement('div');
    const elDivMsg = document.createElement('div');
    const elDivImg = document.createElement('div');
    const elImg = document.createElement('img');

    elDiv.classList.add('d-flex');
    elDiv.classList.add('justify-content-start');
    elDiv.classList.add('mb-4');

    elImg.src = 'https://short-biography.com/wp-content/uploads/usain-bolt/Usain-Bolt.jpg';
    elImg.classList.add('rounded-circle');
    elImg.classList.add('user_img_msg');

    elDivImg.classList.add('img_const_msg');

    elDivMsg.textContent = value;
    elDivMsg.classList.add('msg_cotainer');

    elDivImg.appendChild(elImg);
    elDiv.appendChild(elDivImg);
    elDiv.appendChild(elDivMsg);
    this.msgContainer.append(elDiv);
  }

  botAnanlys(value) {
    if (value.includes('Hello')) {
      this.storingBotMsg('Hello how can I help you ?');
      this.storingBotMsg('You can ask for the wheater if you give me the name of the city');
    }
  }
}

const chatBot = new ChatBot();

chatBot.speak();
