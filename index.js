const btn = document.querySelector('button')
const displayMessage =(msgText, msgType)=>{
    const body = document.body;
    
    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    body.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
   panel.appendChild(msg);
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);
    
    closeBtn.addEventListener('click', ()=>{
      panel.parentNode.removeChild(panel);
   
    })
    switch (msgType){
      case "chat" :{
        msg.style.backgroundImage = "url(icons/chat.png)";
        panel.style.backgroundColor = "cyan"
        break;
      }
      case "warning" :{
        msg.style.backgroundImage = "url(icons/warning.png)"
        panel.style.backgroundColor = "red"
        msg.style.color ="white"
        break;
    }
    default: {
      msg.style.paddingLeft = "20px"
    }
    }
  }

    btn.addEventListener('click', ()=>{
        displayMessage("Your inbox is almost full — delete some mails", "warning");
      });
    
