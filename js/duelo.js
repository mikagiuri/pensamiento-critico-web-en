// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/duelo.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const DUELO_FALACIAS = {
 "persona": {
  "nombre": "Attacking the person",
  "tec": "ad hominem",
  "q": "What does what the person is like have to do with whether their idea is good?"
 },
 "famoso": {
  "nombre": "A famous person says so",
  "tec": "false authority",
  "q": "Are they a real expert on THIS, or just famous?"
 },
 "siempre": {
  "nombre": "It’s always been done this way",
  "tec": "appeal to tradition",
  "q": "Does being age-old make it good?"
 },
 "pena": {
  "nombre": "Pity instead of reasons",
  "tec": "appeal to pity",
  "q": "Are they giving me a reason, or just trying to make me feel sorry for them?"
 },
 "deformar": {
  "nombre": "Twisting what you said",
  "tec": "straw man",
  "q": "Did I really say that, or did they exaggerate it so they could attack it?"
 },
 "pocos": {
  "nombre": "A few cases, a conclusion about all",
  "tec": "hasty generalisation",
  "q": "How many cases? Does it really hold for everyone?"
 },
 "causa": {
  "nombre": "It came after, so it was the cause",
  "tec": "false cause",
  "q": "Is there proof that one causes the other, or do they just come one after the other?"
 },
 "dos": {
  "nombre": "There are only two options",
  "tec": "false dilemma",
  "q": "Are you sure there isn’t a single other option?"
 },
 "miedo": {
  "nombre": "Scaring you into agreeing",
  "tec": "appeal to fear",
  "q": "Are they giving me a reason, or just frightening me?"
 },
 "todos": {
  "nombre": "Everybody says so",
  "tec": "ad populum",
  "q": "Does the fact that lots of people do it make it true?"
 },
 "notrue": {
  "nombre": "Redefining to suit yourself",
  "tec": "‘no true Scotsman’",
  "q": "Are you changing the definition just to dodge the counterexample? (Socrates accepted the distinction… and turned it around.)"
 },
 "equivoco": {
  "nombre": "Playing on a double meaning",
  "tec": "equivocation / amphiboly",
  "q": "That word has two senses: which one are you using? If you switch senses halfway, you haven’t proved anything."
 }
};
const DUELO_ORDEN_FAL = [
 "persona",
 "famoso",
 "siempre",
 "pena",
 "deformar",
 "pocos",
 "causa",
 "dos",
 "miedo",
 "todos",
 "notrue",
 "equivoco"
];
const DUELO_ESTRAT = {
 "insulto": {
  "t": "“Seriously, you think that? You’d have to be pretty dim not to see it. Just drop it.”",
  "nombre": "an insult",
  "schop": "stratagem 38, the ‘last resort’",
  "q": "That’s not a reason, it’s an insult. Ask them to talk about the topic, not about you."
 },
 "ira": {
  "t": "“Of course, you’re always so slow at everything; no wonder you don’t get it.”",
  "nombre": "provoking your anger",
  "schop": "stratagem 8",
  "q": "‘When angry, no one judges well.’ Breathe: don’t take the bait."
 },
 "persona": {
  "t": "“You have no idea about life, so you’d better not weigh in on this.”",
  "nombre": "a personal attack",
  "schop": "ad hominem, stratagem 21",
  "q": "Who is saying it doesn’t change whether the idea is good or bad."
 },
 "categoria": {
  "t": "“That’s typical of a fascist. Only a loser would think like that.”",
  "nombre": "stuffing you into a hateful category",
  "schop": "subsuming under a hateful category",
  "q": "A label refutes nothing. Where is the reason?"
 },
 "miedo": {
  "t": "“If you keep contradicting me, you’ll end up with no friends.”",
  "nombre": "a threat",
  "schop": "appeal to fear (ad baculum)",
  "q": "Fear is not a reason. Why would what they say be true?"
 },
 "desvio": {
  "t": "“What about you? The other day you did the same thing. Let’s talk about that instead.”",
  "nombre": "changing the subject and pointing at you",
  "schop": "stratagems 18 and 29",
  "q": "Me slipping up doesn’t answer the question. Let’s get back to the topic."
 },
 "autoridad": {
  "t": "“A Nobel Prize winner said it and it’s been proven. End of discussion.”",
  "nombre": "authority used to silence you",
  "schop": "stratagem 30",
  "q": "Who, where and why? A quotation without a reason doesn’t close the topic."
 }
};
const DUELO_REACCIONES = [
 {
  "lbl": "Insult them back",
  "t": "“Well, you’re even dumber, come on!”"
 },
 {
  "lbl": "Give in and agree with them",
  "t": "“Fine, fine… whatever you say.”"
 },
 {
  "lbl": "Run away from the topic",
  "t": "“I’m out, let’s talk about something else.”"
 }
];
const DUELO_TEMAS = [
 {
  "id": "moviles",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Should phones be kept out of class?",
  "cpuLado": "The computer defends: ‘let them be used freely in class’.",
  "tuLado": "You defend: ‘better outside the classroom’.",
  "opp": [
   {
    "t": "A phone gives you a dictionary and a calculator instantly; used well, it is a study tool.",
    "f": null
   },
   {
    "t": "A tech guru said so in a talk: banning phones is for digital illiterates.",
    "f": "famoso",
    "peso": 1,
    "interes": "That guru advises a company that sells tablets and apps to schools."
   },
   {
    "t": "They’re already used in every modern school; falling behind is for backwaters.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "Either phones are free, or we’ll raise kids who can’t cope with life in the 21st century.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "I know two people who passed by looking things up on their phones; it clearly helps everyone.",
    "f": "pocos",
    "peso": 2
   },
   {
    "t": "If we teach them to use it with rules, they learn to regulate themselves better than if it’s banned outright.",
    "f": null
   }
  ],
  "counters": [
   {
    "t": "In the classes where phones were collected, attention went up and copying went down: there is data.",
    "str": 3
   },
   {
    "t": "A useful tool can be used at specific moments; you don’t need it on you the whole lesson.",
    "str": 2
   },
   {
    "t": "For whatever is needed there are the school’s tablets, with no personal notifications.",
    "str": 2
   },
   {
    "t": "Lots of people are glad to switch off for a while; the classroom can be that place.",
    "str": 1
   },
   {
    "t": "Either phones out, or this will be an internet café and nobody will learn anything.",
    "f": "dos"
   },
   {
    "t": "My uncle says so, and he’s been a teacher for 30 years, so phones out and that’s that.",
    "f": "famoso"
   }
  ]
 },
 {
  "id": "comida",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Is it a good idea to eat fast food every day?",
  "cpuLado": "The computer defends: ‘yes, go for it, every day’.",
  "tuLado": "You defend: ‘now and then, yes; every day, no’.",
  "opp": [
   {
    "t": "It’s cheap and quick; for someone short of time, it solves lunch.",
    "f": null
   },
   {
    "t": "The most famous footballer in the world advertises it, so it can’t be that bad.",
    "f": "famoso",
    "peso": 1,
    "interes": "The footballer is paid millions to advertise that fast-food chain."
   },
   {
    "t": "The whole class eats there on Fridays; there must be a reason.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "My cousin eats burgers and he’s really strong: this food makes you strong.",
    "f": "causa",
    "peso": 2
   },
   {
    "t": "Either you eat this, or you go hungry; there’s no other cheap option.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "Don’t take away the only treat of my day, I’m having such a hard time already.",
    "f": "pena",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "The label says one meal has almost all the salt and fat for a whole day: eaten daily, it takes its toll.",
    "str": 3
   },
   {
    "t": "Eating it now and then isn’t the problem; the problem is every day.",
    "str": 2
   },
   {
    "t": "For what a daily meal deal costs, you can cook a varied week for less.",
    "str": 2
   },
   {
    "t": "There are sandwiches and fruit that are just as quick and cheaper.",
    "str": 1
   },
   {
    "t": "I know someone who got ill eating that; so everyone who eats it gets ill.",
    "f": "pocos"
   },
   {
    "t": "If you keep eating that, you’ll definitely end up in hospital.",
    "f": "miedo"
   }
  ]
 },
 {
  "id": "mascota",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Should we adopt a pet today?",
  "cpuLado": "The computer defends: ‘yes, today’.",
  "tuLado": "You defend: ‘prepare properly first, not today on a whim’.",
  "opp": [
   {
    "t": "There are animals at the shelter that need a home as soon as possible; waiting costs them too.",
    "f": null
   },
   {
    "t": "Look at that little face; if we don’t bring him home today I’m going to be so sad.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "My family has always had a dog, so we have to get one now.",
    "f": "siempre",
    "peso": 1
   },
   {
    "t": "All my friends have a pet; I’m the only one who doesn’t.",
    "f": "todos",
    "peso": 1
   },
   {
    "t": "Either we adopt him today, or we’ll never have a pet.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "The vet says to wait, but since she has no children, she knows nothing about families.",
    "f": "persona",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "A dog lives ten or fifteen years, and every day it needs feeding, walking and vet bills: it has to be organised beforehand.",
    "str": 3
   },
   {
    "t": "We can adopt as soon as we know who will walk it every day; it’s preparing, not giving up.",
    "str": 2
   },
   {
    "t": "If we bring it home with no plan and then can’t look after it, the animal is the one who suffers most.",
    "str": 2
   },
   {
    "t": "A week to get the house and the schedule ready isn’t that much.",
    "str": 1
   },
   {
    "t": "So according to you, animals don’t matter at all.",
    "f": "deformar"
   },
   {
    "t": "An influencer vet said the sooner the better, so today.",
    "f": "famoso"
   }
  ]
 },
 {
  "id": "trasimaco",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Is justice just the interest of the stronger? · Socrates vs. Thrasymachus",
  "cpuLado": "The computer is Thrasymachus: being unjust pays better and makes you happier; justice only serves the powerful.",
  "tuLado": "You are Socrates: justice is a virtue that benefits whoever has it, and the just life is happier.",
  "estrat": [
   {
    "t": "He bursts in like a wild beast: “What a load of nonsense you’ve been spouting all this time!”",
    "nombre": "the brutish entrance",
    "schop": "intimidating before arguing",
    "q": "Tone is not an argument. What does he have to say about the topic?"
   },
   {
    "t": "He lets out a guffaw: “There’s Socrates’ usual irony; I knew you’d slip away.”",
    "nombre": "mockery",
    "schop": "ridiculing instead of refuting",
    "q": "Laughing refutes nothing. Ask him for the reason."
   },
   {
    "t": "“Socrates, do you still have a nurse? Because she leaves you with a runny nose and doesn’t wipe it.”",
    "nombre": "the nurse insult",
    "schop": "stratagem 38, the ‘last resort’",
    "q": "It’s an insult, not an answer. Go back to the topic."
   }
  ],
  "opp": [
   {
    "t": "The just person always comes off worse: he doesn’t cheat in business, he pays his taxes and, when he governs, he benefits others and not himself.",
    "f": null
   },
   {
    "t": "When a doctor makes a mistake, at that moment he isn’t acting as a doctor. Same with the ruler: strictly speaking, a ruler never errs.",
    "f": "notrue",
    "peso": 1
   },
   {
    "t": "You only ask questions to win, out of love of honour; you aren’t looking for the truth, so your questions don’t count.",
    "f": "persona",
    "peso": 3
   },
   {
    "t": "Look who succeeds: tyrants and cheats. It’s perfectly clear that injustice is what makes you happy.",
    "f": "pocos",
    "peso": 2
   },
   {
    "t": "Either you’re unjust and make a profit, or you’re just and get eaten alive; there is no middle ground.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "The just man is a sucker who gets exploited; the unjust one is the clever one who does the exploiting. It’s one or the other. That’s why injustice is the virtue.",
    "f": "dos",
    "fAlt": [
     "persona"
    ],
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Even a band of thieves needs some justice among themselves to achieve anything; injustice sets them against each other and destroys them.",
    "str": 3
   },
   {
    "t": "Rulers make mistakes and pass laws that harm them; then obeying those laws does not benefit the stronger.",
    "str": 2
   },
   {
    "t": "A doctor, as a doctor, seeks the good of the patient, not his own; whoever rules well seeks the good of the ruled.",
    "str": 2
   },
   {
    "t": "If the function of the soul is to live, and justice is its virtue, the just person lives well; and living well is being happy.",
    "str": 2
   },
   {
    "t": "A sophist charges for teaching how to be right without being right; how are we supposed to believe you?",
    "f": "persona"
   },
   {
    "t": "Either you admit that justice is a virtue, or you admit you would like to be robbed; choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "atheismusstreit",
  "grupo": "contemporanea",
  "nivel": [
   "hf"
  ],
  "claim": "The Atheismusstreit (1798): is it atheist to identify God with the moral order of the world?",
  "cpuLado": "The computer is Fichte’s accusers: that is atheism, and atheism must be banned.",
  "tuLado": "You are Fichte: the God worthy of faith is the living moral order of the world; a separate God-thing would be an idol.",
  "estrat": [
   {
    "t": "An anonymous pamphlet circulates, “Letter from a Father to His Student Son”: whoever reads your journal will lose his faith and his soul.",
    "nombre": "the anonymous pamphlet",
    "schop": "attacking without showing your face (poisoning the well)",
    "q": "Whoever accuses from the shadows is not arguing. What do they claim, and what is their proof?"
   },
   {
    "t": "The government of Saxony threatens to confiscate the journal and punish whoever reads it.",
    "nombre": "the threat of censorship",
    "schop": "force instead of reasons (ad baculum)",
    "q": "Gagging an idea does not refute it. Where is the argument?"
   },
   {
    "t": "“Atheist!” That one word is enough; there’s nothing more to discuss with you.",
    "nombre": "the infamous label",
    "schop": "subsuming under a hateful category",
    "q": "A label refutes nothing. What exactly does what I say amount to?"
   }
  ],
  "opp": [
   {
    "t": "A God who is not a substance, nor a person, nor a creator, but only “the moral order” — how does that differ from having no God?",
    "f": null
   },
   {
    "t": "Fichte says God is just an idea we make for ourselves; in other words, he denies God. He is an atheist.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "If you take away the personal God, morality, the oath and the State collapse. It must be banned at once.",
    "f": "miedo",
    "peso": 3
   },
   {
    "t": "Fichte is a Jacobin and a troublemaker; we all know what kind of philosophy comes from a man like that.",
    "f": "persona",
    "peso": 2
   },
   {
    "t": "The catechism that all Christendom professes says God is a person and creator; who is he to amend it?",
    "f": "siempre",
    "peso": 1
   },
   {
    "t": "All decent people are scandalised by that journal; there must be a reason.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "The true God is the living moral order of the world, that in which you trust when you act well: that is not “an idea of mine”, it is the most real thing there is.",
    "str": 3
   },
   {
    "t": "Making God a thing or a person, one more being among beings, lowers him to an idol; denying that idol is not denying God.",
    "str": 3
   },
   {
    "t": "Punishing an idea with censorship does not refute it: if I am wrong, prove it, don’t gag me.",
    "str": 2
   },
   {
    "t": "Judge my reasons, not my politics: whether I am a Jacobin or not says nothing about whether I am right.",
    "str": 2
   },
   {
    "t": "Either you accept my idealism whole, or you are superstitious fanatics.",
    "f": "dos"
   },
   {
    "t": "Whoever accuses me is an ignorant priest who hasn’t read a line of Kant.",
    "f": "persona"
   }
  ]
 },
 {
  "id": "descartes-dualismo",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Descartes’ dualism: are mind and body two substances or just one?",
  "cpuLado": "The computer is the monist (Spinoza, La Mettrie): there is only one substance; a separate soul is superfluous.",
  "tuLado": "You are Descartes: the mind is a thinking thing, really distinct from the extended body.",
  "estrat": [
   {
    "t": "“Those are priests’ tales: the immortal soul is a superstition to frighten people.”",
    "nombre": "contempt",
    "schop": "subsuming under a hateful category",
    "q": "Contempt is not an argument. What exactly is wrong with the distinction?"
   },
   {
    "t": "“You, hiding behind ‘I think, therefore I am’, don’t dare look the body in the face.”",
    "nombre": "the personal jab",
    "schop": "ad hominem",
    "q": "My character does not decide whether mind and body are distinct."
   },
   {
    "t": "“Stop harping on about your ‘clear and distinct’ and talk like a normal person.”",
    "nombre": "mockery",
    "schop": "ridiculing instead of refuting",
    "q": "Laughing at the vocabulary does not refute the idea."
   }
  ],
  "opp": [
   {
    "t": "If the soul is not extended, it cannot push or move the body; contact requires extension. How do they interact, then?",
    "f": null
   },
   {
    "t": "A single substance with two attributes, thought and extension, is enough to explain everything, without two worlds that no one knows how to connect.",
    "f": null
   },
   {
    "t": "According to you the body is a worthless prison and only the soul counts; you despise the flesh entirely.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Either the soul is a separate substance, or you are nothing but a machine without freedom: choose.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "A glass of wine changes your thoughts; so thinking is just body chemistry, there is no soul.",
    "f": "causa",
    "peso": 2
   },
   {
    "t": "Doctors and modern scholars are all materialists; are you going to be right all on your own?",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "I can doubt that I have a body, but not that I think; and what I conceive clearly and distinctly as separate can exist separately.",
    "str": 3
   },
   {
    "t": "That the body influences the mind does not prove they are the same: the musician is not his instrument, even though he plays it.",
    "str": 3
   },
   {
    "t": "I do not despise the body: I say I form a very close union with it, not that it is a prison.",
    "str": 2
   },
   {
    "t": "That a single substance is simpler does not make it true: we still have to explain why I think in the first person.",
    "str": 2
   },
   {
    "t": "Either you admit an immortal soul, or you are an animal without dignity: there is no middle ground.",
    "f": "dos"
   },
   {
    "t": "Spinoza was expelled from his community; how can you believe a man like that?",
    "f": "persona"
   }
  ]
 },
 {
  "id": "hegel-kant",
  "grupo": "contemporanea",
  "nivel": [
   "hf"
  ],
  "claim": "Hegel against Kant: does reason have insurmountable limits, or can it think everything?",
  "cpuLado": "The computer defends Kant: we only know phenomena; about the thing in itself we must stay silent.",
  "tuLado": "You are Hegel: those limits are a prejudice; the thing in itself is an empty void and contradiction drives thought.",
  "estrat": [
   {
    "t": "“Your sentences are so obscure that no one can understand you; it’s easy to play the profound this way.”",
    "nombre": "mockery for being obscure",
    "schop": "ridiculing instead of refuting",
    "q": "That you find me hard to read does not refute what I say. What exactly is false?"
   },
   {
    "t": "“You write to look important, not to clarify anything.”",
    "nombre": "the personal jab",
    "schop": "ad hominem",
    "q": "My style does not decide whether Kant was right or not."
   },
   {
    "t": "“Stop harping on about ‘dialectics’ and give me a yes or a no.”",
    "nombre": "impatience",
    "schop": "forcing and diverting",
    "q": "Forcibly simplifying does not answer the question."
   }
  ],
  "opp": [
   {
    "t": "We only know phenomena, never the thing in itself: space, time and the categories are ours, not the things’.",
    "f": null
   },
   {
    "t": "When reason leaves experience it falls into antinomies: it proves a thesis and its opposite with equal force. That marks a limit.",
    "f": null
   },
   {
    "t": "So according to you reason already knows everything and we can invent the world at will.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Either you accept my limits, or you go back to the old delirious metaphysics of souls and worlds. There is nothing else.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "The Critique of Pure Reason is the supreme work of philosophy; who are you to correct Kant?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Without those limits, philosophy goes back to fanaticism and superstition: it is dangerous.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Examining the faculty of knowing before knowing is like wanting to learn to swim without going into the water.",
    "str": 3
   },
   {
    "t": "The thing in itself, what is left when you strip from the object everything you think of it, is no mystery: it is the emptiest abstraction.",
    "str": 3
   },
   {
    "t": "The contradiction of the antinomies is not the end of reason but its engine: the truth is the whole that overcomes them.",
    "str": 2
   },
   {
    "t": "I am not saying we invent the world: I am saying thought and reality are not two worlds separated by a wall.",
    "str": 2
   },
   {
    "t": "Either you think the totality as I do, or you are nothing but a cowardly sceptic: choose.",
    "f": "dos"
   },
   {
    "t": "Kant was a creature of habit who never left Königsberg; what could he know about becoming?",
    "f": "persona"
   }
  ]
 },
 {
  "id": "calicles",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates against Callicles (Gorgias): is the law of the stronger right?",
  "cpuLado": "The computer is Callicles: by nature, the strong should rule and have more; holding back is for the weak.",
  "tuLado": "You are Socrates: it is worse to commit an injustice than to suffer one, and a life without measure is not happy.",
  "estrat": [
   {
    "t": "“Stop asking those little slave questions and talk like a man.”",
    "nombre": "the macho contempt",
    "schop": "subsuming under a hateful category",
    "q": "A manly tone is not an argument. What is false in what I say?"
   },
   {
    "t": "“Aren’t you ashamed, at your age, to waste time playing with words?”",
    "nombre": "the jab about age",
    "schop": "ad hominem",
    "q": "My age does not decide whether I am right."
   },
   {
    "t": "“This is ridiculous, you’re boring me; you answer, since you know so much.”",
    "nombre": "impatience",
    "schop": "diverting and forcing",
    "q": "Being bored refutes nothing. Let’s get back to the question."
   }
  ],
  "opp": [
   {
    "t": "The justice of equality is invented by the many weak to tie down the strong out of fear; by nature, the best should have more.",
    "f": null
   },
   {
    "t": "Look at nature: the lion respects no laws and the strong State imposes itself on the weak. That’s how things are, and how they should be.",
    "f": "pocos",
    "peso": 1
   },
   {
    "t": "Philosophy is fine for children; a grown man who still goes on philosophising is ridiculous and deserves a beating.",
    "f": "persona",
    "peso": 3
   },
   {
    "t": "Either you rule and enjoy, or you are ruled and put up with it: there is no good life halfway.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "If you don’t learn rhetoric and keep up your questions, anyone could take you to court and have you killed without you knowing how to defend yourself.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "According to you we should let ourselves be trampled and never defend ourselves; you preach cowardice.",
    "f": "deformar",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "If the stronger is the one who can do more, and the many can do more than one, then the justice of the many is that of nature: your own law contradicts you.",
    "str": 3
   },
   {
    "t": "A soul without measure is a leaky barrel: however much you pour in, it never fills; that life is not bliss, it is an endless lack.",
    "str": 3
   },
   {
    "t": "Pleasure and pain are felt at the same time (the thirsty man drinks with pleasure while still suffering thirst), but good and evil are not; so pleasure is not the good.",
    "str": 2
   },
   {
    "t": "I am not saying let yourself be trampled: I am saying that committing injustice harms the soul more than suffering it; that is why I prefer to take the blow than to deal it.",
    "str": 2
   },
   {
    "t": "You defend this because you are an unscrupulous social climber; that is why I don’t believe you.",
    "f": "persona"
   },
   {
    "t": "Either you admit that justice has value, or you admit you are nothing but a tyrant: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "eutifron",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates against Euthyphro: what is piety?",
  "cpuLado": "The computer is Euthyphro: a seer who thinks himself an expert in religion and is about to prosecute his own father; he claims to know what ‘the pious’ is.",
  "tuLado": "You are Socrates: you are not looking for examples but for the definition: the feature by which every pious action is pious.",
  "estrat": [
   {
    "t": "“I know much more about these things than you, Socrates; that’s what being a seer is for.”",
    "nombre": "the expert’s smugness",
    "schop": "appealing to one’s own authority",
    "q": "Being a seer does not answer the question: tell me what the pious is."
   },
   {
    "t": "“You tire me with all these little questions; anyone understands this except you.”",
    "nombre": "impatience",
    "schop": "disdain / ad hominem",
    "q": "Tiring you refutes nothing. Let’s get back to the question."
   },
   {
    "t": "“I’m in a hurry, Socrates, they’re waiting for me; we’ll leave it for another day.”",
    "nombre": "the flight",
    "schop": "dodging the question",
    "q": "Leaving is not answering: running away leaves the question standing."
   }
  ],
  "opp": [
   {
    "t": "What is the pious? The pious is what I am doing right now: prosecuting whoever commits a crime. There you have it.",
    "f": null
   },
   {
    "t": "Zeus himself bound his father Cronus in chains; if the gods do these things, who am I not to imitate them?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "It’s perfectly clear: the pious is what is dear to the gods, and the impious what is hateful to them.",
    "f": null
   },
   {
    "t": "Then the pious will be what ALL the gods love without exception; none who is truly a god would love a crime.",
    "f": "notrue",
    "peso": 2
   },
   {
    "t": "It is pious because the gods love it, and that’s that; that’s enough for you to know what it is.",
    "f": null
   },
   {
    "t": "All of Athens knows full well what piety is; only you pretend not to understand.",
    "f": "todos",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "I asked you WHAT piety is, not for an example of something pious. Give me the feature by which every pious action is pious, so we can measure any act against it.",
    "str": 3
   },
   {
    "t": "If the gods quarrel among themselves, as the poets tell, the same thing will be loved by some and hated by others: pious and impious at once. Your definition contradicts itself.",
    "str": 3
   },
   {
    "t": "Is the pious loved by the gods BECAUSE it is pious, or is it pious BECAUSE they love it? If they love it because it is already pious, being loved is not what makes it pious: you are telling me what happens to it, not what it is.",
    "str": 3
   },
   {
    "t": "Your ‘trade’ with the gods goes back to the start: pleasing them is nothing but being loved by them, and we already refuted that. You are going round in circles.",
    "str": 2
   },
   {
    "t": "A man capable of taking his own father to court has no heart; I don’t trust anything he says.",
    "f": "persona"
   },
   {
    "t": "Either you define piety here and now, or admit you are impious: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "eutidemo",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates against Euthydemus and Dionysodorus: the art of winning with words",
  "cpuLado": "The computer is the eristic brothers Euthydemus and Dionysodorus: they boast of refuting anything, whatever the other says, by playing on the double meaning of words.",
  "tuLado": "You are Socrates: distinguish the senses of each word and show that they refute the term, not the thing.",
  "estrat": [
   {
    "t": "They laugh in unison: “See? The great Socrates can’t even answer a child’s question.”",
    "nombre": "the duet laughter",
    "schop": "ridiculing instead of refuting",
    "q": "Laughing refutes nothing. Where is the flaw in what I say?"
   },
   {
    "t": "They harass you in turns without letting you think: “Answer now! Yes or no! Quick!”",
    "nombre": "the harassment in turns",
    "schop": "steamrolling so you can’t distinguish",
    "q": "Steamrolling is not arguing. Give me time to distinguish the senses."
   },
   {
    "t": "“It makes no difference what you answer, you’ll fall just the same; you’d better give up now.”",
    "nombre": "the bluff of invincibility",
    "schop": "intimidating with false invincibility",
    "q": "That you boast of winning does not prove you are right."
   }
  ],
  "opp": [
   {
    "t": "Do those who learn learn as the wise or as the ignorant? If they are wise, they learn what they already know; if ignorant, they learn without understanding anything. So learning is impossible.",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Do you know anything? Then you are wise. And whoever knows, knows. So you know EVERYTHING, and have always known it.",
    "f": "equivoco",
    "peso": 2,
    "interes": "The two brothers charge for teaching this art: the more dazzling the trick, the more paying pupils."
   },
   {
    "t": "Do you have a dog, and is it a father of puppies? Then it is a father and it is yours: it is your father. And you are brother to the puppies.",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "You want the young man to become wise, that is, to stop being what he is; you want him to stop being: you want him to die!",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Every question is answered yes or no. Answer only yes or no and you’ll see how you fall; qualifying is for cheats.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Earlier you said one thing and now another; so you contradict yourself and have lost, whatever you say.",
    "f": "deformar",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "I distinguish: ‘to learn’ means two things, acquiring new knowledge and understanding what one already has. The ignorant learn in the first sense. Once the equivocation is undone, there is no paradox.",
    "str": 3
   },
   {
    "t": "‘Knowing something’ is not ‘knowing everything’: from knowing one thing it does not follow that I know them all. You are playing on the word ‘know’.",
    "str": 3
   },
   {
    "t": "‘Is a father’ and ‘is mine’ are each true separately, but they do not add up: the dog is father to its puppies and mine as an animal, not my father. You confuse two senses of ‘to be’.",
    "str": 3
   },
   {
    "t": "Wanting someone to become wise is not wanting him to ‘stop being’: it is wanting him to go on being himself and also to know. You are refuting a word, not my wish.",
    "str": 2
   },
   {
    "t": "Only a couple of fairground tricksters would say something like that; I’m not going to pay you the slightest attention.",
    "f": "persona"
   },
   {
    "t": "Either you admit that your game is pure verbiage, or you are a pair of frauds: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "criton",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrates against Crito: should one escape an unjust sentence?",
  "cpuLado": "The computer is Crito: a friend who enters the prison before dawn to convince Socrates to flee; he has money, contacts and a plan.",
  "tuLado": "You are Socrates: the question is not what people will say or what is convenient, but whether fleeing is just; and one must never commit injustice.",
  "estrat": [
   {
    "t": "“You will break my heart; if you die I lose an irreplaceable friend and no one will believe I did all I could.”",
    "nombre": "the friend’s blackmail",
    "schop": "appeal to pity / guilt-tripping",
    "q": "Your pain matters to me, but it does not decide what is just."
   },
   {
    "t": "“Hurry up, the ship is about to arrive, it’s tonight or never; there’s no time to philosophise!”",
    "nombre": "the rush",
    "schop": "steamrolling so you don’t think",
    "q": "Haste is not an argument; precisely because it is serious, it must be thought through."
   },
   {
    "t": "“Are you going to stay there so calm while your children are left orphans? What kind of father are you?”",
    "nombre": "the father’s reproach",
    "schop": "blaming instead of arguing",
    "q": "Hinting that I am a bad father does not answer whether escaping is just."
   }
  ],
  "opp": [
   {
    "t": "If you don’t escape, people will say your friends were tightfisted cowards for not spending money to save you. Think of our reputation.",
    "f": "todos",
    "peso": 2,
    "interes": "Crito is worried about his own reputation: he fears people will say he refused to pay for the escape."
   },
   {
    "t": "Think of your children: you leave them orphans, without upbringing or education. Abandoning them like that is selfish.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Either you escape and live, or you stay and hand victory to those who unjustly condemned you: there is no other way.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Staying is choosing the comfortable path; anyone with guts would have fled already.",
    "f": "persona",
    "fAlt": [
     "todos"
    ],
    "peso": 1
   },
   {
    "t": "We have the means and friends willing to get you out; we gladly take on the risk ourselves.",
    "f": null
   },
   {
    "t": "Your death benefits those who unjustly condemned you and hurts those of us who love you.",
    "f": null
   }
  ],
  "counters": [
   {
    "t": "We should not heed what the majority thinks but whoever knows: in matters of health we follow the doctor, not the crowd; in matters of justice, the same. The mob can kill, but it does not decide what is just.",
    "str": 3
   },
   {
    "t": "The question is not what people will say, but whether escaping is just; and one must never commit injustice, not even to repay a harm received.",
    "str": 3
   },
   {
    "t": "If every individual overrides the sentences he dislikes, no city can stand. By living here I accepted to obey the laws, and I could have left if I disagreed: breaking that pact now would be unjust.",
    "str": 3
   },
   {
    "t": "A father who does not break his pacts raises my children better: fleeing would teach them the opposite. I would rather leave them good friends and a good example than a fugitive father.",
    "str": 2
   },
   {
    "t": "Only a coward like you, who fears what people will say, asks me to flee.",
    "f": "persona"
   },
   {
    "t": "Either we flee tonight, or you abandon me to death: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-erasmo-lutero",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Erasmus against Luther (1524-1525): do we have free will?",
  "cpuLado": "The computer is Luther: without grace, the will is enslaved to sin and salvation comes from God alone.",
  "tuLado": "You are Erasmus: human beings have a small strength of their own that cooperates with grace; and where things are obscure, prudence.",
  "estrat": [
   {
    "t": "“The Holy Spirit is no sceptic: you don’t dare to assert anything.”",
    "nombre": "the sceptic jibe",
    "schop": "ridiculing instead of refuting",
    "q": "Being cautious where Scripture is obscure is not being a sceptic. Answer what I have said."
   },
   {
    "t": "“You write like an elegant rhetorician who never risks anything.”",
    "nombre": "the dig at the humanist",
    "schop": "ad hominem",
    "q": "My style does not decide whether we have free will."
   },
   {
    "t": "“Whoever doubts this is no longer a good Christian.”",
    "nombre": "the pocket excommunication",
    "schop": "subsuming under a hateful category",
    "q": "Disagreeing on this point does not put me outside the faith. Tell me what is wrong with my reasoning."
   }
  ],
  "opp": [
   {
    "t": "Without grace, the human will is subject to sin: it cannot choose the good by itself.",
    "f": null
   },
   {
    "t": "If salvation depended partly on our own effort, nobody could be sure of it and everyone would end up boasting of their merits before God.",
    "f": null
   },
   {
    "t": "Either salvation is entirely God’s work, or it is entirely ours: there is no middle ground.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "According to you, the human being saves himself all on his own, by his own strength, and God’s grace is superfluous.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "If you grant a little free will, tomorrow everyone will want to buy heaven with works and alms, as with indulgences.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Augustine already settled this against Pelagius: who are you to correct a Father of the Church?",
    "f": "famoso",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If we could choose nothing, the commandments, rewards and punishments of Scripture would make no sense, and God would punish us for what we cannot avoid.",
    "str": 3
   },
   {
    "t": "I do not say we save ourselves alone: I say the will cooperates with grace, like the child whose father helps him take the steps towards the fruit he is showing him.",
    "str": 3
   },
   {
    "t": "That salvation is not our work alone does not force us to say we do nothing: between all and nothing there is room to cooperate.",
    "str": 2
   },
   {
    "t": "Where Scripture leaves things obscure, it is better not to make sweeping assertions that divide Christians.",
    "str": 2
   },
   {
    "t": "Either you accept free will, or you will have to admit that God is a cruel tyrant: choose.",
    "f": "dos"
   },
   {
    "t": "You talk like that because you are a rebel friar who only wants to split the Church.",
    "f": "persona"
   }
  ]
 },
 {
  "id": "pol-leibniz-newton-clarke",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Leibniz against Newton and Clarke (1715-1716): what is space?",
  "cpuLado": "The computer is Clarke, Newton’s spokesman: space is absolute and real, and God governs the world unceasingly.",
  "tuLado": "You are Leibniz: space is merely the order of things that coexist, and a perfect God does not need to mend his work.",
  "estrat": [
   {
    "t": "“The Royal Society has already ruled that the calculus is Newton’s; why should anyone believe you now?”",
    "nombre": "the court that is a party to the case",
    "schop": "appealing to an interested authority",
    "q": "That report was largely written by Newton himself, and besides, it is not about space. Let’s get back to the subject."
   },
   {
    "t": "“Your clockmaker God smacks of materialism: that is how it starts, and it ends without God.”",
    "nombre": "the dangerous label",
    "schop": "subsuming under a hateful category",
    "q": "Calling it materialism does not refute it. What is wrong with my argument?"
   },
   {
    "t": "“A philosopher from the German courts is not going to teach physics to England.”",
    "nombre": "the national sneer",
    "schop": "ad hominem",
    "q": "Where I come from does not decide what space is."
   }
  ],
  "opp": [
   {
    "t": "Space is real and independent of bodies: even if there were nothing, it would still be there.",
    "f": null
   },
   {
    "t": "In Newton’s physics there are effects, such as the forces that appear when you spin a bucket of water, that seem to require absolute space.",
    "f": null
   },
   {
    "t": "So, according to you, God made the world and then washed his hands of it: we have no need of him at all.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "If the world runs by itself, like a clock, tomorrow nobody will believe in God: your philosophy leads to atheism.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Newton is the greatest mind of our age and he thinks as I do; are you going to contradict him?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "All of England already accepts Newton’s physics.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If space were absolute, God could have placed the whole universe a few metres further along without anything changing, and he would have no reason to choose. But nothing happens without a sufficient reason.",
    "str": 3
   },
   {
    "t": "Space is an order of coexisting things, as time is an order of successions: without things, there is nothing left to order.",
    "str": 3
   },
   {
    "t": "If God had to wind up his machine and mend it from time to time, he would be a clumsy clockmaker. A perfect God makes a work that needs no mending.",
    "str": 2
   },
   {
    "t": "I do not say that God withdraws: he conserves the world at every moment. What I deny is that he has to correct it like a bad craftsman.",
    "str": 2
   },
   {
    "t": "Your Newton plagiarised my calculus; that says it all.",
    "f": "persona"
   },
   {
    "t": "Either space is merely a relation, or you will have to say that God is an extended being, like a body: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-voltaire-rousseau-lisboa",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Voltaire against Rousseau after the Lisbon earthquake (1755): is ‘all well’?",
  "cpuLado": "The computer is Voltaire: saying ‘All is well’ in the face of thousands of innocent dead is an insult to the victims.",
  "tuLado": "You are Rousseau: Providence is not to blame; many of our ills are of our own making.",
  "estrat": [
   {
    "t": "“Ah, the optimist! Just like a Doctor Pangloss: all is for the best in the best of all possible worlds.”",
    "nombre": "the caricature",
    "schop": "ridiculing instead of refuting",
    "q": "A caricature does not answer what I have said about how Lisbon was built."
   },
   {
    "t": "“You, who wrote against the sciences and the arts, presume to lecture me?”",
    "nombre": "the personal jab",
    "schop": "ad hominem",
    "q": "Whatever I may have written before does not decide who is right about Lisbon."
   },
   {
    "t": "“Even in the salons of Paris they laugh at optimism now.”",
    "nombre": "the audience’s laughter",
    "schop": "appealing to the audience instead of to reasons",
    "q": "People laughing is not an argument."
   }
  ],
  "opp": [
   {
    "t": "A child crushed in its mother’s arms has done nothing wrong: no theory about the order of the universe will convince someone who suffers that their pain was necessary.",
    "f": null
   },
   {
    "t": "Evil is real and reason cannot explain it: the honest thing is to admit it, instead of disguising it.",
    "f": null
   },
   {
    "t": "According to you, the people of Lisbon brought it on themselves and deserved to die.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Imagine yourself under the rubble, hearing your children scream: do you still believe in Providence?",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Either you accept that all is well, or you admit that the world is a chaos without any order: choose.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Look at Lisbon: that is enough to know that there is no order in nature.",
    "f": "pocos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "The earthquake is natural, but the disaster is not entirely so: it was not nature that had gathered twenty thousand houses of six and seven storeys there.",
    "str": 3
   },
   {
    "t": "If the inhabitants had lived more spread out and in lower houses, far fewer would have died: the number of victims also depends on how we build and how we live.",
    "str": 3
   },
   {
    "t": "Many died because they went back for their clothes, their papers or their money: that too is our doing, not nature’s.",
    "str": 2
   },
   {
    "t": "Your poem takes away from the sufferer the only hope he has left. I prefer a reasonable consolation to a despair that helps nobody.",
    "str": 2
   },
   {
    "t": "You live rich and comfortable in your château: what do you know of suffering?",
    "f": "persona"
   },
   {
    "t": "Either you believe in Providence, or you are an atheist: there is nothing else.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-sartre-camus",
  "grupo": "contemporanea",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Sartre against Camus (1952): can violence be justified in the name of history?",
  "cpuLado": "The computer is Sartre: nobody stands outside history, and criticising the USSR without nuance plays into the hands of the right.",
  "tuLado": "You are Camus: rebellion against injustice has limits; no future end justifies the camps.",
  "estrat": [
   {
    "t": "“You carry a portable pedestal with you wherever you go.”",
    "nombre": "the pedestal jibe",
    "schop": "ridiculing the person",
    "q": "My character does not answer what I have said about the camps."
   },
   {
    "t": "“You don’t know philosophy: you haven’t read Hegel or Marx properly.”",
    "nombre": "the charge of incompetence",
    "schop": "ad hominem",
    "q": "If I read them badly, tell me where. If not, answer the argument."
   },
   {
    "t": "“Carry on like this and you’ll end up on the side of the bourgeoisie.”",
    "nombre": "the enemy label",
    "schop": "subsuming under a hateful category",
    "q": "Putting me on a side does not refute what I say."
   }
  ],
  "opp": [
   {
    "t": "Nobody stands outside history: keeping silent or staying pure also has consequences, and it usually favours those already in power.",
    "f": null
   },
   {
    "t": "You cannot judge history from outside, with pure principles: you have to commit yourself to it, even if you get your hands dirty.",
    "f": null
   },
   {
    "t": "According to you, since the revolution might go wrong, the best thing is to do nothing and leave the workers as they are.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Either you are with the workers and with the Party, or you are with the bourgeoisie: there is no room in between.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Every word you say against the camps will be used by the right to attack the workers.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "You talk about morality from the heights of your success as a writer; the workers have no time for such luxuries.",
    "f": "persona",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If a future end justifies killing today, any crime can be justified. That is why the camps must be named, whoever runs them.",
    "str": 3
   },
   {
    "t": "‘I rebel — therefore we exist’: rebellion is born defending something common to all, and that is why it cannot turn against others without betraying itself.",
    "str": 3
   },
   {
    "t": "I do not say we should not commit ourselves: I say commitment has limits, and the first is refusing to accept planned murder.",
    "str": 2
   },
   {
    "t": "Keeping quiet about an injustice because your own side commits it is not committing yourself to history: it is giving up judging it.",
    "str": 2
   },
   {
    "t": "You defend the USSR because it suits your magazine.",
    "f": "persona"
   },
   {
    "t": "Either you condemn all the camps, or you are an accomplice of murderers: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-maniqueos",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustine against the Manichaeans (Hippo, 392): where does evil come from?",
  "cpuLado": "The computer is Fortunatus, a Manichaean priest: there are two eternal substances at war, light and darkness.",
  "tuLado": "You are Augustine: there is only one good God, everything he made is good, and evil is born of our free will.",
  "estrat": [
   {
    "t": "“You were one of us for nine years: how dare you criticise us now?”",
    "nombre": "the reproach about the past",
    "schop": "ad hominem",
    "q": "Having thought otherwise before does not decide who is right now. Get back to the argument."
   },
   {
    "t": "“Everyone here knows that we Manichaeans are honest people; you just repeat slanders.”",
    "nombre": "the detour to reputation",
    "schop": "changing the subject",
    "q": "I am not discussing your way of life, but where evil comes from."
   },
   {
    "t": "“What you’re saying is Greek philosophy, not the faith of Christ.”",
    "nombre": "the suspicious label",
    "schop": "subsuming under a hateful category",
    "q": "Calling it ‘Greek’ does not refute it. What is false about it?"
   }
  ],
  "opp": [
   {
    "t": "We all feel inside us a struggle between two forces pulling in opposite directions: that shows there are two natures.",
    "f": null
   },
   {
    "t": "If everything comes from a good and almighty God, where does so much evil that nobody wants come from?",
    "f": null
   },
   {
    "t": "Either evil is a substance as real as good, or it does not exist and all suffering is an illusion: choose.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "According to you, God is the author of evil, because he made everything.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Mani was sent as the Paraclete promised by Christ: are you going to correct him?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "If you deny the principle of darkness, you alone will bear the guilt of all your sins: is that what you want?",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If nothing can harm God, why would he send a part of himself to suffer in this world? And if something could harm him, he would not be God.",
    "str": 3
   },
   {
    "t": "If evil is not our fault but that of another nature, there is no sense in repenting, or punishing, or rewarding.",
    "str": 3
   },
   {
    "t": "God made all things good; the only thing called evil is our voluntary sin, which is not a substance but a twisted will.",
    "str": 2
   },
   {
    "t": "The struggle we feel inside does not prove two natures: it proves a divided will, which wants and does not quite want.",
    "str": 2
   },
   {
    "t": "You Manichaeans are hypocrites who preach purity and live like everyone else.",
    "f": "persona"
   },
   {
    "t": "Either you accept one God, or you worship the devil: there is nothing else.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-jeronimo",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustine against Jerome (394-405): can you lie for a good cause?",
  "cpuLado": "The computer is Jerome: Paul’s rebuke of Peter was a prudent accommodation, not a lie.",
  "tuLado": "You are Augustine: if a single ‘useful’ lie is admitted in Scripture, no passage can be trusted any more.",
  "estrat": [
   {
    "t": "“A young man should not provoke an old one on the field of the Scriptures: the tired ox treads more heavily.”",
    "nombre": "the weight of age",
    "schop": "appealing to one’s own authority",
    "q": "Age does not decide whether a text lies. Answer me that."
   },
   {
    "t": "“Your letter went round half of Italy before it reached me: are you seeking fame at my expense?”",
    "nombre": "the suspicion of motives",
    "schop": "ad hominem",
    "q": "My motives do not change the argument. Was there a lie or not?"
   },
   {
    "t": "“Do you know Hebrew? Then don’t teach me how to read the Bible.”",
    "nombre": "the expert’s contempt",
    "schop": "appealing to one’s own authority",
    "q": "I am not questioning your Hebrew, but whether a useful lie can be accepted."
   }
  ],
  "opp": [
   {
    "t": "Peter and Paul, out of prudence, acted as if they kept the Law so as not to scandalise the Jews: adapting is not lying.",
    "f": null
   },
   {
    "t": "Texts must be read with the best interpreters and in their original language, not in translations of translations.",
    "f": null
   },
   {
    "t": "Origen and the great commentators read it this way before me: are you going to correct them all?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "According to you, then, the apostles squabbled like children and the Church began with a scandal.",
    "f": "deformar",
    "peso": 2
   },
   {
    "t": "Either you accept my reading, or you prove right pagans like Porphyry, who mock the apostles.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "It has always been read this way in the schools of Alexandria.",
    "f": "siempre",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Once a useful lie is admitted even once in so high an authority, anyone will be able to call ‘useful’ any sentence that bothers them: no passage will be safe.",
    "str": 3
   },
   {
    "t": "The authority of a text depends on its never lying; that is why Paul really had to rebuke Peter, because Peter had acted wrongly.",
    "str": 3
   },
   {
    "t": "Keeping quiet about something out of prudence is one thing, and asserting what is false is another: the first may be wise, the second is lying.",
    "str": 2
   },
   {
    "t": "That the pagans mock is no reason to change the meaning of the text: the truth does not bend to the fear of mockery.",
    "str": 2
   },
   {
    "t": "You defend this because you are a proud old man who cannot bear to be corrected.",
    "f": "persona"
   },
   {
    "t": "Either you agree with me, or you are an enemy of the truth of Scripture: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-petiliano",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustine against the Donatists (c. 400-411): is a sacrament valid if a bad priest gives it?",
  "cpuLado": "The computer is Petilian, a Donatist bishop: a stained minister cannot cleanse anyone; the true Church is the Church of the pure.",
  "tuLado": "You are Augustine: the one who truly baptises is Christ; the priest is only an instrument, and the sacrament is valid even if he is unworthy.",
  "estrat": [
   {
    "t": "“You were a priest of the Manichaeans: who are you to talk about sacraments?”",
    "nombre": "the false accusation",
    "schop": "ad hominem",
    "q": "I was never a Manichaean priest, and even if I had been, that does not answer the argument."
   },
   {
    "t": "“You’re a dialectician, an artist of deception: with twisted words you can prove anything.”",
    "nombre": "contempt for logic",
    "schop": "discrediting the method",
    "q": "Reasoning carefully is not deceiving. Point out where the error is."
   },
   {
    "t": "“Your Church made a pact with the traitors: you have no authority to speak.”",
    "nombre": "discrediting the group",
    "schop": "ad hominem",
    "q": "What others may have done does not decide whether the sacrament depends on the minister."
   }
  ],
  "opp": [
   {
    "t": "What counts is the conscience of the one who gives the sacrament: a stained conscience cannot wash the conscience of the one who receives it.",
    "f": null
   },
   {
    "t": "A Church that welcomes as pastors those who betrayed the faith to save themselves loses its holiness.",
    "f": null
   },
   {
    "t": "According to you, it makes no difference if the priest is a criminal: how pastors live does not matter at all.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Either the Church is pure, or it is the synagogue of the devil: there is no middle ground.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "The martyrs died rather than betray: if you accept the traitors, you spit on their blood.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Throughout Numidia the people are with us.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If baptism depended on the priest’s conscience, nobody could be sure of being baptised, because another person’s conscience cannot be seen.",
    "str": 3
   },
   {
    "t": "The one who truly baptises is Christ: the minister, good or bad, only lends his hands. That is why hope is placed in Christ, not in a man.",
    "str": 3
   },
   {
    "t": "I am not saying it makes no difference how pastors live: I am saying that their sin condemns them, it does not cancel what Christ gives through their hands.",
    "str": 2
   },
   {
    "t": "If only the sacraments of the pure are valid, you would have to repeat yours every time a sin is discovered in one of your bishops.",
    "str": 2
   },
   {
    "t": "You Donatists are violent fanatics, so you are not right.",
    "f": "persona"
   },
   {
    "t": "Either you return to the Catholic Church, or you are condemned heretics: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-volusiano",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustine against the pagans (408-412): does Christianity make worse citizens?",
  "cpuLado": "The computer is Volusian, an educated pagan: forgiving the enemy and turning the other cheek do not suit a State that has to defend itself.",
  "tuLado": "You are Augustine: Christian teaching does not forbid serving one’s homeland; if everyone lived by it, the State would be healthier.",
  "estrat": [
   {
    "t": "“Ever since the emperors became Christian, Rome has fallen into the hands of Alaric. Need I say more?”",
    "nombre": "the cause of the catastrophe",
    "schop": "insinuating without arguing",
    "q": "That one thing comes after another does not prove that it causes it. Let’s keep to the reasons."
   },
   {
    "t": "“You, a provincial African, are going to teach a Roman what the homeland is?”",
    "nombre": "contempt for origins",
    "schop": "ad hominem",
    "q": "My origins do not decide whether the Gospel harms the State."
   },
   {
    "t": "“Cicero said it long ago: the first duty is to the homeland. Do you dare contradict Cicero?”",
    "nombre": "the great name",
    "schop": "appealing to authority",
    "q": "I respect Cicero, but the question is whether Christian teaching destroys that duty, and it does not."
   }
  ],
  "opp": [
   {
    "t": "A morality that commands us not to return evil for evil leaves the city defenceless against whoever plunders it.",
    "f": null
   },
   {
    "t": "A religion is also judged by what it does to public life, not only by what it promises for after death.",
    "f": null
   },
   {
    "t": "Rome was sacked after abandoning its gods: the gods have punished it.",
    "f": "causa",
    "peso": 3
   },
   {
    "t": "According to you, soldiers should throw down their weapons and let themselves be killed.",
    "f": "deformar",
    "peso": 2
   },
   {
    "t": "Our ancestors always honoured the gods of Rome, and that is how it became great.",
    "f": "siempre",
    "peso": 2
   },
   {
    "t": "If you keep preaching that, tomorrow there will be no one left to defend your Hippo from the barbarians.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Let those who say that Christ’s teaching is opposed to the State provide an army such as that teaching asks for: soldiers who do not abuse, do not steal and are content with their pay.",
    "str": 3
   },
   {
    "t": "Rome’s ills did not begin with the Christians: its own authors, such as Sallust, already lamented the corruption of morals.",
    "str": 3
   },
   {
    "t": "The Gospel does not order soldiers to lay down their weapons, but not to abuse them: John the Baptist told them to be content with their pay, not to desert.",
    "str": 2
   },
   {
    "t": "Turning the other cheek is a disposition of the heart not to take revenge, not a law obliging a State not to punish criminals.",
    "str": 2
   },
   {
    "t": "You pagans are superstitious people who worship statues; what would you know?",
    "f": "persona"
   },
   {
    "t": "Either you become a Christian, or you will remain guilty of the ruin of Rome.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-pelagio",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Pelagius against Augustine (411-418): can we do good by our own strength?",
  "cpuLado": "The computer is Augustine: since Adam we are born wounded; without God’s grace, the will cannot manage to will or to do good.",
  "tuLado": "You are Pelagius: God made us capable of not sinning; if God commands something, it is because we can fulfil it.",
  "estrat": [
   {
    "t": "“At Diospolis you condemned in words what you go on defending in your writings.”",
    "nombre": "the charge of double-dealing",
    "schop": "ad hominem",
    "q": "If I contradict myself, point it out in the argument. Whatever was said at a council does not answer the question."
   },
   {
    "t": "“You’re a proud monk who thinks he can save himself on his own.”",
    "nombre": "the jab at character",
    "schop": "ad hominem",
    "q": "My character does not decide whether the will can do good."
   },
   {
    "t": "“The councils of Africa and the Bishop of Rome have condemned you: what more do you want?”",
    "nombre": "the weight of condemnation",
    "schop": "appealing to authority",
    "q": "A condemnation is not a reason. What is false about what I say?"
   }
  ],
  "opp": [
   {
    "t": "We often know what is good and still do not do it: the will is divided and needs to be healed.",
    "f": null
   },
   {
    "t": "If we could be good by our own strength alone, Christ would have come only to set an example, not to save.",
    "f": null
   },
   {
    "t": "According to you, human beings do not need God for anything.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Either everything is God’s grace, or everything is human merit: there is no middle ground.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "The apostle Paul said it long ago, and whoever does not accept it is not a Christian.",
    "f": "notrue",
    "peso": 2
   },
   {
    "t": "If they listen to you, people will be filled with pride and nobody will pray.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If we cannot avoid sin, we are not responsible for it, and there is no sense in demanding anything of us.",
    "str": 3
   },
   {
    "t": "If God commands something, it is because we can fulfil it: commanding the impossible would be unjust.",
    "str": 3
   },
   {
    "t": "Grace is the capacity God gave us when he created us, together with the law and the example of Christ: I do not deny grace, I say what it consists of.",
    "str": 2
   },
   {
    "t": "Saying that without grace we do no good gives a perfect excuse to anyone who does not want to make an effort.",
    "str": 2
   },
   {
    "t": "Deep down you are still a Manichaean: that is why you see evil everywhere.",
    "f": "persona"
   },
   {
    "t": "Either human beings are completely free, or they are God’s puppets: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-julian",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Julian of Eclanum against Augustine (419-430): can a newborn baby bear someone else’s sin?",
  "cpuLado": "The computer is Augustine: we are all born with original sin inherited from Adam, and that is why children are baptised too.",
  "tuLado": "You are Julian of Eclanum: there is no sin without one’s own will, and a just God cannot blame anyone for someone else’s sin.",
  "estrat": [
   {
    "t": "“What a great protector of children! And you leave them without baptism?”",
    "nombre": "irony",
    "schop": "ridiculing instead of refuting",
    "q": "Irony is not an argument. How can someone who has willed nothing be guilty?"
   },
   {
    "t": "“You’re a deposed and exiled bishop: your opinion doesn’t count.”",
    "nombre": "the disqualification",
    "schop": "ad hominem",
    "q": "My exile does not decide whether there is sin without will."
   },
   {
    "t": "“You defend the same as Pelagius, and Pelagius has already been condemned.”",
    "nombre": "guilt by association",
    "schop": "subsuming under a hateful category",
    "q": "Agreeing with someone who has been condemned does not prove I am wrong. Answer the argument."
   }
  ],
  "opp": [
   {
    "t": "All of us, from the very beginning, are inclined to evil and suffer pain, ignorance and death without having chosen them: that calls for an explanation.",
    "f": null
   },
   {
    "t": "If children had nothing to be saved from, Christ would not be the saviour of all.",
    "f": null
   },
   {
    "t": "According to you, human beings are born perfect and do not need Christ.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "The Church has always baptised children for the forgiveness of sins: so they have sin.",
    "f": "siempre",
    "peso": 2
   },
   {
    "t": "If we listen to you, parents will stop baptising their children and they will be lost.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Either you accept original sin, or you deny the whole of Scripture.",
    "f": "dos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Blaming someone for what they have not done is the very definition of injustice, and it cannot be attributed to God.",
    "str": 3
   },
   {
    "t": "There is no sin in a human being if there is nothing of their own will or consent, and a newborn baby has not yet willed anything.",
    "str": 3
   },
   {
    "t": "Sexual desire is a natural force created by God, good if it is used in moderation: it is not the mark of a sin.",
    "str": 2
   },
   {
    "t": "If human nature is bad from birth, that looks too much like the evil principle of the Manichaeans.",
    "str": 2
   },
   {
    "t": "You are nothing but the Aristotle of the Punics, an African rhetorician.",
    "f": "persona"
   },
   {
    "t": "Either you agree with me, or you make God guilty of a crime: choose.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-maximino",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustine against Maximinus (c. 427-428): is the Son equal to the Father?",
  "cpuLado": "The computer is Maximinus, an Arian bishop: only the Father is God without origin; the Son is God, but begotten and subordinate to him.",
  "tuLado": "You are Augustine: the Father, the Son and the Holy Spirit are each God, with the same power, and the three together are one God.",
  "estrat": [
   {
    "t": "“You speak under the protection of the emperors’ power: that way anyone can win a debate.”",
    "nombre": "the suspicion of an unfair advantage",
    "schop": "ad hominem",
    "q": "Who protects whom does not decide what Scripture says. Get back to the argument."
   },
   {
    "t": "(He talks on and on without answering, until the time runs out.)",
    "nombre": "using up the time",
    "schop": "diverting and dragging out",
    "q": "Dragging out the speech does not answer the question. Is the Son equal to the Father or not?"
   },
   {
    "t": "“You’re a seventy-year-old clinging to formulas.”",
    "nombre": "the jab about age",
    "schop": "ad hominem",
    "q": "My age does not change the argument."
   }
  ],
  "opp": [
   {
    "t": "A son proceeds from his father, and what has its origin in another is not equal to it.",
    "f": null
   },
   {
    "t": "Scripture shows the Son sent by the Father and obedient to him: read as it stands, it teaches subordination.",
    "f": null
   },
   {
    "t": "Three hundred and thirty bishops signed at Rimini what I defend.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "According to you, the Father and the Son are the same person in disguise.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Either the Son is less than the Father, or there are two gods: there is no other way out.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "The Goths, who defend Rome, believe as I do: are you going to take them on?",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "If the Father is God and the Son is also God, but another and inferior one, then you worship two gods; and if there is only one God, you do not worship Christ.",
    "str": 3
   },
   {
    "t": "‘Hear, O Israel: the Lord your God is one’: the Father is God, the Son is God, the Holy Spirit is God, and the Trinity itself is one God.",
    "str": 3
   },
   {
    "t": "That the Son proceeds from the Father does not make him inferior: the light that comes from a lamp is as much light as the lamp.",
    "str": 2
   },
   {
    "t": "I am not saying they are the same person: they are three, distinct from one another, but of one power and one nature.",
    "str": 2
   },
   {
    "t": "You Arians are barbarians who understand nothing.",
    "f": "persona"
   },
   {
    "t": "Either you accept Nicaea, or you are outside the Church: choose.",
    "f": "dos"
   }
  ]
 }
];
