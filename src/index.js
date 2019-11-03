import './index.scss';

class ChatBot {
  constructor() {
    this.addMsg = document.forms['add-msg'];
    this.msgContainer = document.getElementById('ownMsg');
    this.elBody = document.querySelector('body');
  }

  speak(addMsg = this.addMsg) {
    addMsg.addEventListener('submit', (e) => {
      e.preventDefault();
      const { value } = addMsg.querySelector('input[type="text');
      console.log(value);
      this.storingMsg(value);
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
}

const chatBot = new ChatBot();

chatBot.speak();
