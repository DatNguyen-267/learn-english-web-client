import { AnswerModel } from "../models/AnswerModel.js"
import { LsMinQuestionModel } from "../models/LsMinQuestionModel.js"
import { LsQuestionModel } from "../models/LsQuestionModel.js"

export const getAllLsQuestion = async (req, res) => {
  try {
    // =========Dữ liệu PART1=========
    // const answer1=AnswerModel({
    //   content: "He's watering some flowers",
    // })
    // await answer1.save()
    // const answer2=AnswerModel({
    //   content: "He's talking on a phone",
    // })
    // await answer2.save()
    // const answer3=AnswerModel({
    //   content: "He's drinking from a coffee mug",
    // })
    // await answer3.save()
    // const answer4=AnswerModel({
    //   content: "He's tying his shoe",
    // })
    // await answer4.save()
    // const answer5=AnswerModel({
    //   content: "The woman is using a broom",
    // })
    // await answer5.save()
    // const answer6=AnswerModel({
    //   content: "The woman is trying on a helmet",
    // })
    // await answer6.save()
    // const answer7=AnswerModel({
    //   content: "The man is measuring a cabinet",
    // })
    // await answer7.save()
    // const answer8=AnswerModel({
    //   content: "The man is painting a wall",
    // })
    // await answer8.save()
    // const answer9=AnswerModel({
    //   content: "A kayak is being paddled down a river",
    // })
    // await answer9.save()
    // const answer10=AnswerModel({
    //   content: "A pile of bricks has been left on a walkway",
    // })
    // await answer10.save()
    // const answer11=AnswerModel({
    //   content: "Some roofs are being repaired",
    // })
    // await answer11.save()
    // const answer12=AnswerModel({
    //   content: "Some chairs have been placed along a canal",
    // })
    // await answer12.save()

    // const ls_min_question1 = LsMinQuestionModel({
    //   content: "",
    //   hide_content: true,
    //   list_answer:[answer1, answer2, answer3, answer4],
    //   hide_answer: true,
    //   true_answer: answer2,
    // })
    // await ls_min_question1.save()
    // const ls_min_question2 = LsMinQuestionModel({
    //   content: "",
    //   hide_content: true,
    //   list_answer:[answer5, answer6, answer7, answer8],
    //   hide_answer: true,
    //   true_answer: answer6,
    // })
    // await ls_min_question2.save()
    // const ls_min_question3 = LsMinQuestionModel({
    //   content: "",
    //   hide_content: true,
    //   list_answer:[answer9, answer10, answer11, answer12],
    //   hide_answer: true,
    //   true_answer: answer12,
    // })
    // await ls_min_question3.save()

    // const ls_question1 = LsQuestionModel({
    //   img: "https://toeic24.net/upload/img/resized/1569289541.png",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569289541.mp3",
    //   transcript: "",
    //   list_min_question: [ls_min_question1]
    // })
    // await ls_question1.save()

    // const ls_question2 = LsQuestionModel({
    //   img: "https://toeic24.net/upload/img/resized/1569289633.png",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569289633.mp3",
    //   list_min_question: [ls_min_question2]
    // })
    // await ls_question2.save()

    // const ls_question3 = LsQuestionModel({
    //   img: "https://toeic24.net/upload/img/resized/1569289832.png",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569289832.mp3",
    //   list_min_question: [ls_min_question3]
    // })
    // await ls_question3.save()

    // =========Dữ liệu PART2=========

    // const answer1=AnswerModel({
    //   content: "A hard worker",
    // })
    // await answer1.save()
    // const answer2=AnswerModel({
    //   content: "On Monday",
    // })
    // await answer2.save()
    // const answer3=AnswerModel({
    //   content: "Yes, she is",
    // })
    // await answer3.save()
    // const answer4=AnswerModel({
    //   content: "Check the parking area",
    // })
    // await answer4.save()
    // const answer5=AnswerModel({
    //   content: "No, I've been here before",
    // })
    // await answer5.save()
    // const answer6=AnswerModel({
    //   content: "We won first prize!",
    // })
    // await answer6.save()
    // const answer7=AnswerModel({
    //   content: "One meter high",
    // })
    // await answer7.save()
    // const answer8=AnswerModel({
    //   content: "Because some machines were down for repairs",
    // })
    // await answer8.save()
    // const answer9=AnswerModel({
    //   content: "A few hundred units",
    // })
    // await answer9.save()

    // const answer10=AnswerModel({
    //   content: "Here's a copy of her resume",
    // })
    // await answer10.save()
    // const answer11=AnswerModel({
    //   content: "That's my computer",
    // })
    // await answer11.save()
    // const answer12=AnswerModel({
    //   content: "Some technical consultants",
    // })
    // await answer12.save()

    // const ls_min_question1 = LsMinQuestionModel({
    //   content: "When did they announce Barbara's promotion to vice president?",
    //   hide_content: true,
    //   list_answer:[answer1, answer2, answer3],
    //   hide_answer: true,
    //   true_answer: answer2,
    // })
    // await ls_min_question1.save()
    // const ls_min_question2 = LsMinQuestionModel({
    //   content: "This is your first visit to this location, right?",
    //   hide_content: true,
    //   list_answer:[answer4, answer5, answer6],
    //   hide_answer: true,
    //   true_answer: answer5,
    // })
    // await ls_min_question2.save()
    // const ls_min_question3 = LsMinQuestionModel({
    //   content: "Why are production numbers so low this month?",
    //   hide_content: true,
    //   list_answer:[answer7, answer8, answer9],
    //   hide_answer: true,
    //   true_answer: answer8,
    // })
    // await ls_min_question3.save()
    // const ls_min_question4 = LsMinQuestionModel({
    //   content: "Which software programs does Allison know how to use?",
    //   hide_content: true,
    //   list_answer:[answer10, answer11, answer12],
    //   hide_answer: true,
    //   true_answer: answer10,
    // })
    // await ls_min_question4.save()

    // const ls_question1 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569296071.mp3",
    //   transcript: "",
    //   list_min_question: [ls_min_question1]
    // })
    // await ls_question1.save()

    // const ls_question2 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569296144.mp3",
    //   list_min_question: [ls_min_question2]
    // })
    // await ls_question2.save()

    // const ls_question3 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569296530.mp3",
    //   list_min_question: [ls_min_question3]
    // })
    // await ls_question3.save()

    // const ls_question4 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1568877382/1569296736.mp3",
    //   list_min_question: [ls_min_question4]
    // })
    // await ls_question4.save()

    // =========Dữ liệu PART3=========

    // const answer1=AnswerModel({
    //   content: "terrible",
    // })
    // await answer1.save()
    // const answer2=AnswerModel({
    //   content: "exciting",
    // })
    // await answer2.save()
    // const answer3=AnswerModel({
    //   content: "uneventful",
    // })
    // await answer3.save()
    // const answer4=AnswerModel({
    //   content: "enjoyable",
    // })
    // await answer4.save()
    // const answer5=AnswerModel({
    //   content: "on the plane",
    // })
    // await answer5.save()
    // const answer6=AnswerModel({
    //   content: "Chicago",
    // })
    // await answer6.save()
    // const answer7=AnswerModel({
    //   content: "Boston",
    // })
    // await answer7.save()
    // const answer8=AnswerModel({
    //   content: "it has been lost",
    // })
    // await answer8.save()
    // const answer9=AnswerModel({
    //   content: "Bob's cousin",
    // })
    // await answer9.save()

    // const answer10=AnswerModel({
    //   content: "Bob's sister",
    // })
    // await answer10.save()
    // const answer11=AnswerModel({
    //   content: "Bob's wife",
    // })
    // await answer11.save()
    // const answer12=AnswerModel({
    //   content: "Bob's fiancee",
    // })
    // await answer12.save()
    //  const answer13=AnswerModel({
    //   content: "management",
    // })
    // await answer13.save()
    // const answer14=AnswerModel({
    //   content: "finance",
    // })
    // await answer14.save()
    // const answer15=AnswerModel({
    //   content: "design",
    // })
    // await answer15.save()
    // const answer16=AnswerModel({
    //   content: "administration",
    // })
    // await answer16.save()
    // const answer17=AnswerModel({
    //   content: "considerate",
    // })
    // await answer17.save()
    // const answer18=AnswerModel({
    //   content: "disrespectful ",
    // })
    // await answer18.save()
    // const answer19=AnswerModel({
    //   content: "sympathetic",
    // })
    // await answer19.save()
    // const answer20=AnswerModel({
    //   content: "excited",
    // })
    // await answer20.save()
    // const answer21=AnswerModel({
    //   content: "tired",
    // })
    // await answer21.save()

    // const answer22=AnswerModel({
    //   content: "frustrated",
    // })
    // await answer22.save()
    // const answer23=AnswerModel({
    //   content: "relaxed",
    // })
    // await answer23.save()
    // const answer24=AnswerModel({
    //   content: "sad",
    // })
    // await answer24.save()
    //  const answer25=AnswerModel({
    //   content: "vase",
    // })
    // await answer25.save()
    // const answer26=AnswerModel({
    //   content: "table",
    // })
    // await answer26.save()
    // const answer27=AnswerModel({
    //   content: "floor",
    // })
    // await answer27.save()
    // const answer28=AnswerModel({
    //   content: "flowers",
    // })
    // await answer28.save()
    // const answer29=AnswerModel({
    //   content: "enthusiastic",
    // })
    // await answer29.save()
    // const answer30=AnswerModel({
    //   content: "aggressive",
    // })
    // await answer30.save()
    // const answer31=AnswerModel({
    //   content: "unhelpful",
    // })
    // await answer31.save()
    // const answer32=AnswerModel({
    //   content: "sympathetic",
    // })
    // await answer32.save()
    // const answer33=AnswerModel({
    //   content: "go to another store",
    // })
    // await answer33.save()

    // const answer34=AnswerModel({
    //   content: "buy a new vase",
    // })
    // await answer34.save()
    // const answer35=AnswerModel({
    //   content: "leave the vase at the store",
    // })
    // await answer35.save()
    // const answer36=AnswerModel({
    //   content: "repair it himself",
    // })
    // await answer36.save()

    // const ls_min_question1 = LsMinQuestionModel({
    //   content: "What was the flight like?",
    //   hide_content: false,
    //   list_answer:[answer1, answer2, answer3, answer4],
    //   hide_answer: false,
    //   true_answer: answer3,
    // })
    // await ls_min_question1.save()
    // const ls_min_question2 = LsMinQuestionModel({
    //   content: "Where is Jackie's bag?",
    //   hide_content: false,
    //   list_answer:[answer5, answer6, answer7, answer8 ],
    //   hide_answer: false,
    //   true_answer: answer6,
    // })
    // await ls_min_question2.save()
    // const ls_min_question3 = LsMinQuestionModel({
    //   content: "Who is Jenny?",
    //   hide_content: false,
    //   list_answer:[answer9, answer10, answer11, answer12],
    //   hide_answer: false,
    //   true_answer: answer10,
    // })
    // await ls_min_question3.save()
    // const ls_min_question4 = LsMinQuestionModel({
    //   content: "Which department do the speakers work in?",
    //   hide_content: false,
    //   list_answer:[answer13, answer14, answer15, answer16],
    //   hide_answer: false,
    //   true_answer: answer15,
    // })
    // await ls_min_question4.save()
    // const ls_min_question5 = LsMinQuestionModel({
    //   content: "What is the woman's attitude towards the managers?",
    //   hide_content: false,
    //   list_answer:[answer17, answer18, answer19, answer20 ],
    //   hide_answer: false,
    //   true_answer: answer18,
    // })
    // await ls_min_question5.save()
    // const ls_min_question6 = LsMinQuestionModel({
    //   content: "How does the man feel?",
    //   hide_content: false,
    //   list_answer:[answer21, answer22, answer23, answer24],
    //   hide_answer: false,
    //   true_answer: answer22,
    // })
    // await ls_min_question6.save()
    // const ls_min_question7 = LsMinQuestionModel({
    //   content: " What was damaged?",
    //   hide_content: false,
    //   list_answer:[answer25, answer26, answer27, answer28],
    //   hide_answer: false,
    //   true_answer: answer25,
    // })
    // await ls_min_question7.save()
    // const ls_min_question8 = LsMinQuestionModel({
    //   content: "How could you describe the woman's attitude?",
    //   hide_content: false,
    //   list_answer:[answer29, answer30, answer31, answer32 ],
    //   hide_answer: false,
    //   true_answer: answer31,
    // })
    // await ls_min_question8.save()
    // const ls_min_question9 = LsMinQuestionModel({
    //   content: "What will the man do?",
    //   hide_content: false,
    //   list_answer:[answer33, answer34, answer35, answer36],
    //   hide_answer: false,
    //   true_answer: answer35,
    // })
    // await ls_min_question9.save()

    // const ls_question1 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1565665868/1565858002.mp3",
    //      transcript: `<div class="text-justify"><p>W: Hi Bob.</p>

    //                   <p>M: Hi Jackie, it's great to see you again. Did you have a good trip?</p>

    //                   <p>W: You know me, I'm a terrible flyer but it was actually smooth all the way. I'm very excited about your wedding.</p>

    //                   <p>M: Is that all the luggage you have?</p>

    //                   <p>W: Yes, because the airline forgot to put my bag on the plane. It's still in Chicago. It should arrive in Boston tomorrow.</p>

    //                   <p>M: Typical; that happened to my sister last year.</p>

    //                   <p>W: How is Jenny?</p>

    //                   <p>M: She's fine. She's getting married next year too.</p>

    //                   <p>W: I can't wait to meet Sue. I thought you'd never get married. My cousin, a married man at last.&nbsp;</p></div>`,
    //   list_min_question: [ls_min_question1, ls_min_question2, ls_min_question3]
    // })
    // await ls_question1.save()

    // const ls_question2 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1565665868/1565858691.mp3",
    //   transcript: `<div class="text-justify"><p>M: Did you get the memo about Tuesday's meeting?</p>

    // <p>W: The one about the Parson Project in the morning?</p>

    // <p>M: No, that's for the administration, I mean finance department. The design meeting is in the afternoon.</p>

    // <p>W: I guess management will be their usual annoying selves. They never contribute anything useful to the meetings.</p>

    // <p>M: I'm tired of these meetings. They should just let us get on with the job. I can't wait to really get involved with the main project but they keep delaying everything.&nbsp;</p></div>`,
    //   list_min_question: [ls_min_question4, ls_min_question5, ls_min_question6]
    // })
    // await ls_question2.save()

    // const ls_question3 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1565665868/1565858934.mp3",
    // transcript: `<div class="text-justify"><p>M: So do you think you can get it repaired before the weekend when my mother comes? The dog knocked it off the table and it broke on the marble floor. The flowers made a terrible mess.</p>

    // <p>W: Well, we don't usually fix things that quickly, you know. It's not as if we have nothing to do. It's already Wednesday.</p>

    // <p>M: Yes, I appreciate that, but I was only enquiring. You don't have to adopt that attitude. I can just leave it if you like and go to another store. I'd repair it myself if I could.</p>

    // <p>W: Well, it would be faster to buy a new one but maybe we can fix it by the weekend. Tell me your name and telephone number and I'll see what we can do. But I'm not making any promises.</p>

    // <p>M: OK.&nbsp;</p></div>`,
    //   list_min_question: [ls_min_question7, ls_min_question8, ls_min_question9]
    // })
    // await ls_question3.save()

    // =========Dữ liệu PART4=========

    // const answer1=AnswerModel({
    //   content: "Information Technology",
    // })
    // await answer1.save()
    // const answer2=AnswerModel({
    //   content: "Shipping and Receiving",
    // })
    // await answer2.save()
    // const answer3=AnswerModel({
    //   content: "Advertising",
    // })
    // await answer3.save()
    // const answer4=AnswerModel({
    //   content: "Manufacturing",
    // })
    // await answer4.save()
    // const answer5=AnswerModel({
    //   content: "A budget proposal",
    // })
    // await answer5.save()
    // const answer6=AnswerModel({
    //   content: "Product designs",
    // })
    // await answer6.save()
    // const answer7=AnswerModel({
    //   content: "A project delay",
    // })
    // await answer7.save()
    // const answer8=AnswerModel({
    //   content: "Sample photos",
    // })
    // await answer8.save()
    // const answer9=AnswerModel({
    //   content: "Review a schedule",
    // })
    // await answer9.save()

    // const answer10=AnswerModel({
    //   content: "Work overtime",
    // })
    // await answer10.save()
    // const answer11=AnswerModel({
    //   content: "Suggest some ideas",
    // })
    // await answer11.save()
    // const answer12=AnswerModel({
    //   content: "Prepare a presentation",
    // })
    // await answer12.save()
    //  const answer13=AnswerModel({
    //   content: "To complain about parking",
    // })
    // await answer13.save()
    // const answer14=AnswerModel({
    //   content: "To confirm a move-in date",
    // })
    // await answer14.save()
    // const answer15=AnswerModel({
    //   content: "To discuss a rent increase",
    // })
    // await answer15.save()
    // const answer16=AnswerModel({
    //   content: "To report a broken appliance",
    // })
    // await answer16.save()
    // const answer17=AnswerModel({
    //   content: "He started a new job.",
    // })
    // await answer17.save()
    // const answer18=AnswerModel({
    //   content: "He talked to his neighbors.",
    // })
    // await answer18.save()
    // const answer19=AnswerModel({
    //   content: "He helped a friend move.",
    // })
    // await answer19.save()
    // const answer20=AnswerModel({
    //   content: "He went to a party",
    // })
    // await answer20.save()
    // const answer21=AnswerModel({
    //   content: "Attend a music concert",
    // })
    // await answer21.save()

    // const answer22=AnswerModel({
    //   content: "Borrow a vehicle",
    // })
    // await answer22.save()
    // const answer23=AnswerModel({
    //   content: "Pay a late bill",
    // })
    // await answer23.save()
    // const answer24=AnswerModel({
    //   content: "Stop by an office",
    // })
    // await answer24.save()
    //  const answer25=AnswerModel({
    //   content: "At a library",
    // })
    // await answer25.save()
    // const answer26=AnswerModel({
    //   content: "At a fitness center",
    // })
    // await answer26.save()
    // const answer27=AnswerModel({
    //   content: "At a zoo",
    // })
    // await answer27.save()
    // const answer28=AnswerModel({
    //   content: "At a museum",
    // })
    // await answer28.save()
    // const answer29=AnswerModel({
    //   content: "Signing up for membership",
    // })
    // await answer29.save()
    // const answer30=AnswerModel({
    //   content: "Leading group tours",
    // })
    // await answer30.save()
    // const answer31=AnswerModel({
    //   content: "Agreeing to help with a project",
    // })
    // await answer31.save()
    // const answer32=AnswerModel({
    //   content: "Registering for a newsletter",
    // })
    // await answer32.save()
    // const answer33=AnswerModel({
    //   content: "$40",
    // })
    // await answer33.save()

    // const answer34=AnswerModel({
    //   content: "$80",
    // })
    // await answer34.save()
    // const answer35=AnswerModel({
    //   content: "$150",
    // })
    // await answer35.save()
    // const answer36=AnswerModel({
    //   content: "$500",
    // })
    // await answer36.save()

    // const ls_min_question1 = LsMinQuestionModel({
    //   content: "What industry does the speaker most likely work in?",
    //   hide_content: false,
    //   list_answer:[answer1, answer2, answer3, answer4],
    //   hide_answer: false,
    //   true_answer: answer3,
    // })
    // await ls_min_question1.save()
    // const ls_min_question2 = LsMinQuestionModel({
    //   content: "What is the speaker mainly talking about?",
    //   hide_content: false,
    //   list_answer:[answer5, answer6, answer7, answer8 ],
    //   hide_answer: false,
    //   true_answer: answer7,
    // })
    // await ls_min_question2.save()
    // const ls_min_question3 = LsMinQuestionModel({
    //   content: "What are the listeners asked to do?",
    //   hide_content: false,
    //   list_answer:[answer9, answer10, answer11, answer12],
    //   hide_answer: false,
    //   true_answer: answer9,
    // })
    // await ls_min_question3.save()
    // const ls_min_question4 = LsMinQuestionModel({
    //   content: "What is the main purpose of the message?",
    //   hide_content: false,
    //   list_answer:[answer13, answer14, answer15, answer16],
    //   hide_answer: false,
    //   true_answer: answer13,
    // })
    // await ls_min_question4.save()
    // const ls_min_question5 = LsMinQuestionModel({
    //   content: "What does the speaker say he did yesterday?",
    //   hide_content: false,
    //   list_answer:[answer17, answer18, answer19, answer20 ],
    //   hide_answer: false,
    //   true_answer: answer18,
    // })
    // await ls_min_question5.save()
    // const ls_min_question6 = LsMinQuestionModel({
    //   content: "What does the speaker plan to do tomorrow?",
    //   hide_content: false,
    //   list_answer:[answer21, answer22, answer23, answer24],
    //   hide_answer: false,
    //   true_answer: answer24,
    // })
    // await ls_min_question6.save()
    // const ls_min_question7 = LsMinQuestionModel({
    //   content: "Where does the speaker most likely work?",
    //   hide_content: false,
    //   list_answer:[answer25, answer26, answer27, answer28],
    //   hide_answer: false,
    //   true_answer: answer28,
    // })
    // await ls_min_question7.save()
    // const ls_min_question8 = LsMinQuestionModel({
    //   content: "What does the speaker thank the listeners for?",
    //   hide_content: false,
    //   list_answer:[answer29, answer30, answer31, answer32 ],
    //   hide_answer: false,
    //   true_answer: answer31,
    // })
    // await ls_min_question8.save()
    // const ls_min_question9 = LsMinQuestionModel({
    //   content: "Look at the graphic. Which amount has changed this year?",
    //   hide_content: false,
    //   list_answer:[answer33, answer34, answer35, answer36],
    //   hide_answer: false,
    //   true_answer: answer34,
    // })
    // await ls_min_question9.save()

    // const ls_question1 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1596618020/1596766810.mp3",
    //   transcript: `<div class="text-justify"><p>The next item on the agenda is an update on our advertising contracts.&nbsp;(71)&nbsp;<strong>We were planning on starting work on the video game console advertisement, but (72) the client called and said that the game console won't be ready in time. So it looks like we won't be able to start on the advertising campaign as originally planned.</strong>&nbsp;They won't be running the ads until next year. Since this will affect our schedule for the coming months, (73)&nbsp;<strong>here's a revised timeline. Take a moment and check the dates for any potential conflicts with your new assignments.</strong></p></div>`,
    //   list_min_question: [ls_min_question1, ls_min_question2, ls_min_question3]
    // })
    // await ls_question1.save()

    // const ls_question2 = LsQuestionModel({
    //   img: "",
    //   sound: "https://toeic24.net/upload/audio/1596618020/1596766899.mp3",
    //   transcript: `<div class="text-justify"><p>Hello, this is Conrad. I rent apartment 306. (74)<strong>&nbsp;I'm calling to complain about the people in the apartment next to me. For a while now, they've been parking in my parking space. (75) Yesterday I tried talking to them, but they were uncooperative.</strong>&nbsp;I sometimes come home late at night, and I need to know my space is available. This problem has to be fixed, and I'd like to discuss this in person. So (76)<strong>&nbsp;I'll come to your office after I finish work tomorrow</strong>.&nbsp;Thank you.</p></div>`,
    //   list_min_question: [ls_min_question4, ls_min_question5, ls_min_question6]
    // })
    // await ls_question2.save()

    // const ls_question3 = LsQuestionModel({
    //   img: "https://toeic24.net/upload/img/original/1596768707.gif",
    //   sound: "https://toeic24.net/upload/audio/1596618020/1596768707.mp3",
    // transcript: `<div class="text-justify"><p>Hi, everyone. (98)<strong>&nbsp;l'm Bo Chen, membership coordinator here at City Arts Museum. (99) We really appreciate staff from all of our departments putting in the time next week to assist with our membership drive.&nbsp;</strong>Over half of our museum's operating budget comes from membership fees, so next week's big push is crucial to our work. For the most part, you'll be greeting people as they come in the door and asking them if they'd like to purchase a membership. If they do, they'll fill out this form. As you can see, we have four membership categories. For anyone who did this task last year, (100)&nbsp;<strong>note that this year the fee for an individual membership has increased.&nbsp;</strong></p></div>`,
    //   list_min_question: [ls_min_question7, ls_min_question8, ls_min_question9]
    // })
    // await ls_question3.save()

    //=========================Xóa Dữ Liệu==============================
    // await AnswerModel.deleteMany()
    // await LsMinQuestionModel.deleteMany()
    // await LsQuestionModel.deleteMany()
    // --------------------------------
    const LsQuestion = await LsQuestionModel.find().populate({
      path: "list_min_question",
      populate: { path: "list_answer" }
    })
    res.status(200).json(LsQuestion)
  } catch (err) {
    res.status(500).json({ err: err })
  }
}
