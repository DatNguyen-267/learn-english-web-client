import courses from "./courses.js"
import users from "./users.js"
import upload from "./upload.js"
import ls_topic from "./ls_topic.js"
import ls_question from "./ls_question.js"
import test from "./test.js"
import exam from "./exam.js"
import grammar_topic from "./grammar_topic.js"
import store from "./store.js"
export const route = app => {
  // Tất cả các main router
  app.use("/user", users)
  app.use("/courses", courses)
  app.use("/api", upload)
  app.use("/listen-topic", ls_topic)
  app.use("/listen-question", ls_question)
  app.use("/test", test)
  app.use("/grammar-topic", grammar_topic)
  app.use("/store", store)
  app.use("/exam", exam)
}
