// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/camino.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const CAMINOS = [
 {
  "id": "audio",
  "subject": "ipc",
  "emoji": "🔊",
  "titulo": "The voice message in the group chat",
  "tema": "Hoaxes and media",
  "intro": "A voice message is going round the class group chat. What do you do with it?",
  "start": "inicio",
  "escenas": {
   "inicio": {
    "texto": "Sunday, 10:30 pm. In the class WhatsApp group someone forwards a voice message: a voice says that tomorrow the school is closing because of a bedbug infestation and that ‘the headteacher said so’. Within five minutes there are forty messages.",
    "opciones": [
     {
      "t": "Forward it to my family's group chat and my team's.",
      "to": "reenvio"
     },
     {
      "t": "Ask in the group: ‘Who said it? Is there anything official?’",
      "to": "preguntar"
     },
     {
      "t": "First look at the school website and the official notifications.",
      "to": "comprobar"
     }
    ]
   },
   "reenvio": {
    "texto": "Your mother tells her work that she won't be able to come in tomorrow because she will be staying home with your brother. Meanwhile, in the group someone writes: ‘Where did this come from? The website doesn't say anything.’",
    "opciones": [
     {
      "t": "Insist: ‘If that many people are saying it, it must be true.’",
      "to": "f_bulo"
     },
     {
      "t": "Delete the message and warn that it hasn't been checked.",
      "to": "f_rectificar"
     }
    ]
   },
   "preguntar": {
    "texto": "They answer you: ‘A girl in our class's cousin said so, she knows the headteacher.’ A couple of people call you a killjoy for asking.",
    "opciones": [
     {
      "t": "Stay quiet so as not to look bad.",
      "to": "f_silencio"
     },
     {
      "t": "Suggest checking it before forwarding it any further.",
      "to": "comprobar"
     }
    ]
   },
   "comprobar": {
    "texto": "There is nothing on the school website. You search for a sentence from the voice message online and it turns up: it is a message from two years ago… and from a school in another city.",
    "opciones": [
     {
      "t": "Tell the group and post the link.",
      "to": "f_detective"
     },
     {
      "t": "Say nothing: ‘It's not my problem.’",
      "to": "f_silencio"
     }
    ]
   }
  },
  "finales": {
   "f_bulo": {
    "emoji": "📣",
    "titulo": "Chain hoax",
    "texto": "The voice message reaches hundreds of people. The next day the school opens as normal and several families have rearranged their day for nothing.",
    "idea": "‘If lots of people say it, it must be true’ is a fallacy: the appeal to the majority. A hoax does not become true by being repeated; it becomes more dangerous."
   },
   "f_rectificar": {
    "emoji": "↩️",
    "titulo": "Correcting yourself is also thinking",
    "texto": "Your message stops several people who were about to forward it. It cost you to admit the mistake, but the group is grateful.",
    "idea": "Anyone can make a mistake; what matters is correcting it. Changing your mind in the face of evidence is not weakness: it is thinking critically."
   },
   "f_silencio": {
    "emoji": "🤐",
    "titulo": "Silence counts too",
    "texto": "The hoax keeps spreading. You knew (or suspected) it was false, but you preferred not to stand out.",
    "idea": "The ‘spiral of silence’: when we think the majority thinks differently, we stay quiet, and so the mistake seems even more widely held. Keeping quiet is also a way of deciding."
   },
   "f_detective": {
    "emoji": "🕵️",
    "titulo": "Hoax detective",
    "texto": "With the link, the group calms down. Someone even thanks you. Tomorrow there is school, as always.",
    "idea": "The four questions before believing or sharing: who is saying it (source)? when is it from (date)? do other reliable sites confirm it (cross-checking)? who gains if I believe it (interest)?"
   }
  }
 },
 {
  "id": "foto",
  "subject": "ipc",
  "emoji": "📸",
  "titulo": "The photo at break",
  "tema": "Group pressure",
  "intro": "Your group of friends wants to post a photo of a classmate. Everyone looks at you.",
  "start": "inicio",
  "escenas": {
   "inicio": {
    "texto": "At break, your group of friends is laughing at a photo of a boy in your class tripping in PE. A classmate suggests posting it on Instagram with a meme. Everyone looks at you, waiting for your reaction.",
    "opciones": [
     {
      "t": "Laugh and say: ‘Post it!’",
      "to": "sube"
     },
     {
      "t": "Say: ‘Count me out, that's going too far.’",
      "to": "paso"
     },
     {
      "t": "Say nothing and change the subject.",
      "to": "callo"
     }
    ]
   },
   "sube": {
    "texto": "The photo gets two hundred ‘likes’ and a pile of comments. The next day the boy in the photo doesn't come to class. In the group they say: ‘It was a joke, he can't take anything.’",
    "opciones": [
     {
      "t": "Agree with them: ‘It was just a joke.’",
      "to": "f_broma"
     },
     {
      "t": "Message the boy in the photo privately to see how he is.",
      "to": "f_reparar"
     }
    ]
   },
   "paso": {
    "texto": "The one who suggested posting it mocks you: ‘You're so boring.’ But a girl in the group, who had been quiet, looks at you and nods: she seems to think like you.",
    "opciones": [
     {
      "t": "Explain my reasons and look for that girl's support.",
      "to": "f_valiente"
     },
     {
      "t": "Give in so as not to be left out.",
      "to": "sube"
     }
    ]
   },
   "callo": {
    "texto": "The photo gets posted anyway. During the afternoon you can't stop thinking about it and you feel uncomfortable.",
    "opciones": [
     {
      "t": "Talk to the boy in the photo or tell your tutor.",
      "to": "f_reparar"
     },
     {
      "t": "Forget about it: ‘I haven't done anything.’",
      "to": "f_testigo"
     }
    ]
   }
  },
  "finales": {
   "f_broma": {
    "emoji": "😶",
    "titulo": "Just a joke?",
    "texto": "The boy in the photo takes days to come back and avoids the group. The photo keeps circulating even though you have already deleted it.",
    "idea": "A joke is funny for everyone; if only some laugh at another's expense, it is humiliation. What is posted on the internet cannot be fully taken back."
   },
   "f_reparar": {
    "emoji": "🤝",
    "titulo": "It is never too late to make amends",
    "texto": "The boy in the photo appreciates the message. With the tutor's help, the photo is taken down and the matter is discussed in tutorial time.",
    "idea": "Making amends for the harm (saying sorry, keeping someone company, telling an adult) is also taking sides. Empathy: putting yourself in the other person's place and acting accordingly."
   },
   "f_valiente": {
    "emoji": "🦁",
    "titulo": "Saying no in a group",
    "texto": "With that girl on your side, the plan fizzles out. The photo is not posted. The one who suggested it grumbles, but nothing else happens.",
    "idea": "In Asch's experiment, it was enough for a single person in the group to disagree for the others to dare to say what they thought. An ally changes everything."
   },
   "f_testigo": {
    "emoji": "👀",
    "titulo": "The witness decides too",
    "texto": "Nobody blames you, but the photo hurts and you knew it. It will happen again another time.",
    "idea": "In bullying it is not only the aggressor and the victim who are involved: so are the witnesses. What bystanders do (or don't do) often decides how the story ends."
   }
  }
 }
];
