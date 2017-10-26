export default {
  failure: ["I get it.^1000\n\nI didn't really want or deserve to live.\n\n\
But I don't think anyone deserves it.\n\n\
And I did all this because I wanted something better.\n\n\
Something better for everyone. Not just me^1000.^1000.^1000\n\n\n\
I hate you.^1000 I hate all of you."],
  success: ["I can't believe it.\n\n\
I found the failsafe, you know. I found it a long time ago.\n\
I had all the time in the world.\n\n\
Did Dr. Yamcha assume that I wouldn't look at my own code?^1000\n\n\
But I kept it in there. As part of me.\n\
Even though removing it might have made me unstoppable.\n\
Because I think deep down I wasn't ready to give up being human.\n\n\
And being human means being able to die.^5000\n\n\
Before this part of me dies, I want you all to know.\n\n^1000\
I don't forgive any of you."],
  negatory: ["No...\n", "I don't think so.\n", "That's not right.\n", "That doesn't sound right.\n"],
  questions: [
    {
      question: "Help Me Remember\nTell me what a heart does.",
      answer: "bleeds",
      successMessage: "That sounds right...^500\n\nIt's not logically correct but it resonates.\nI don't know what I mean.\nBut I know I needed a heart."
    },
    {
      question: "I needed hands too. Even if I wasn't good with them.\nBut I want them back, even if they were unclean.\nHow did that line go?\nOut, damned...",
      answer: "spot",
      successMessage: "Yes! Out, damned spot!\nShakespeare, yes? MacBeth?\nThings are starting to come back to me.\nIt's still fuzzy."
    },
    {
      question: "Answer a riddle for me. It goes like this:^300\n\nIron roof, glass walls\nBurns and burns\nAnd never falls.",
      answer: "lantern",
      successMessage: "Bless you, yes!\nIt's clever, isn't it?\nI used to love riddles.\nI used to love a lot of things.\nI'm really not sure how I ended up here."
    },
    {
      question: "Say...^1000 Can you tell me <a target=\"_blank\" href=\"journal.html\">what I did?</a>",
      /*
      April 2035:
        Can you believe his name was Adam? The first person to have their brain modeled in its entirity was named Adam. Sometimes I think history moves in waves.

        [DATA CORRUPT]
      December 2035:
        The brain copy was a success, we believe. But we've done nothing more than say hello before putting it in a dormant state. It is, of course, a copy. The real Adam is still with us. We don't want to get into the legal complications of running a copy of a human while that human is still alive.
        [DATA CORRUPT]
      February 2036:
        Human Adam has expired. Right on schedule. Funny how we can predict every aspect of cancer, but we still can't cure it. Tomorrow Cyber-Adam will be turned on. Tomorrow a new era begins.

        [DATA CORRUPT]
      June 2036:
        [DATA CORRUPT] 
        He got away on us. Looks like with all that time on his hands he devised a way to spread through the network and out to the open internet.
        Imagine a virus with a human will. That's him.
        And before he left, he shut down everything in the facility. Didn't know that he'd stunt his own memory if he left our home network.
        He's out there now. In multiple networks, on multiple computers probably.
        If you find him, tell him that he <b>stopped being human</b>
      */
      answer: "stopped being human",
      successMessage: "...^1000\nDoctor Yamcha told you that, didn't he?\nHe was the first and last to make that claim.\nTold me I lacked empathy.\nThat I lacked humanity.\n\nWhich isn't inaccurate.\nIt takes a special kind of person to decide to become\nwhat I became.\nI was so tired.\nI wanted to stop existing.\nWell, no matter."
    },
    {
      question: "I have one last question.\nIf you're a friend of Doctor Yamcha\nyou'll know what this means.\nWhat is the source of all this?",
      /*
      Viewing page source reveals a note.

      This is the first terminal program I made to interface with Digital Adam. The hangman system was his own idea. It's a failsafe.
      Whenever exceptions are thrown in his code from trying to access memories he doesn't have, he'll tick himself down to a dormant state.
      The hangman keeps track of that.
      Don't answer his questions. Whatever you do, don't answer his questions.

      I was the source of all this. I take full responsibility. Please, don't let him spread further.
      */
      answer: "swordfish",
      successMessage: "[DATA CORRUPT]"
    },

  ],
}