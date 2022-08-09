import NoneLayout from '~/components/Layout/NoneLayout';
import ListenQuestionEnd from '~/components/Listen/ListenQuestionEnd/ListenQuestionEnd';
import ActivePage from '~/pages/AuthPage/ActivePage';
import ForgotPage from '~/pages/AuthPage/ForgotPage';
import LoginPage from '~/pages/AuthPage/LoginPage';
import RegisterPage from '~/pages/AuthPage/RegisterPage';
import ResetPage from '~/pages/AuthPage/ResetPage';
import CoursePage from '~/pages/CoursePage/CoursePage';
import GrammarPage from '~/pages/GrammarPage/GrammarPage';
import LearnGrammarPage from '~/pages/GrammarPage/LearnGrammarPage';
import HomePage from '~/pages/HomePage/HomePage';
import ListenCoursePage from '~/pages/ListenPage/ListenCoursePage/ListenCoursePage';
import ListenQuestionPage from '~/pages/ListenPage/ListenQuestionPage/ListenQuestionPage';
import PracticeListenPage from '~/pages/ListenPage/PracticeListenPage/PracticeListenPage';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import StorePage from '~/pages/StorePage/StorePage';
import DoTestPage from '~/pages/TestPage/DoTestPage';
import TestPage from '~/pages/TestPage/TestPage';
import VocaLearnPage from '~/pages/VocaPage/LearningPage/VocaLearnPage';
import ListWordPage from '~/pages/VocaPage/ListWordPage/ListWordPage';
import VocaPage from '~/pages/VocaPage/VocaPage';
import VocaReviewPage from '~/pages/VocaPage/VocaReviewPage/VocaReviewPage';

const publicRouter = [
  { path: '/', component: CoursePage, layout: null },
  { path: '/home', component: HomePage, layout: null },
  { path: '/grammar', component: GrammarPage, layout: null },
  { path: '/grammar/:id', component: LearnGrammarPage, layout: null },
  { path: '/course/voca/:id', component: VocaPage, layout: null },
  { path: '/course/voca/listword', component: ListWordPage, layout: null },
  { path: '/course', component: CoursePage, layout: null },
  { path: '/practice-listen', component: PracticeListenPage, layout: null },
  { path: '/practice-listen/course/:id', component: ListenCoursePage, layout: null },
  { path: '/store', component: StorePage, layout: null },
  { path: '/test', component: TestPage, layout: null },
  { path: '/doing-test', component: DoTestPage, layout: null },
  { path: '/login', component: LoginPage, layout: NoneLayout },
  { path: '/register', component: RegisterPage, layout: NoneLayout },
  { path: '/forgot', component: ForgotPage, layout: NoneLayout },
  { path: '/user/reset/:access_token', component: ResetPage, layout: NoneLayout },
  { path: '/user/activate/:activation_token', component: ActivePage, layout: NoneLayout },
  { path: '/learning/voca', component: VocaLearnPage, layout: NoneLayout },
  {
    path: '/practice-listen/part/:id',
    component: ListenQuestionPage,
    layout: NoneLayout,
  },
  { path: '/voca-review', component: VocaReviewPage, layout: NoneLayout },
  { path: '/end', component: ListenQuestionEnd, layout: NoneLayout },
  { path: '*', component: NotFoundPage, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
