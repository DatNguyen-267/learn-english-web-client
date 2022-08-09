import { Route, Routes } from 'react-router-dom';
import { Loading_1 } from '~/components/Loading/Loading_1';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '~/api';
import { PopUpLogin } from '~/components/Common/PopUpLogin/PopUpLogin';
import { HeaderOnly } from '~/components/Layout';
import * as actions from '~/redux/actions/index';
import { publicRouter } from './routes';

axios.defaults.withCredentials = true;
function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const popup = useSelector((state) => state.popup);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.get(`http://localhost:5000/user/refresh_token`, {
          withCredentials: true,
        });
        dispatch(actions.getToken(res.data.access_token));
        dispatch(actions.login_success());
      };
      getToken();
    }
    dispatch(actions.unLoadingRequest());
  }, []);
  useEffect(() => {
    if (token) {
      const getUser = () => {
        return fetchUser(token).then((res) => {
          dispatch(actions.get_user(res.data));
          console.log(res);
        });
      };
      getUser();
    }
  }, [auth.isLogged, token]);
  return (
    <div>
      {popup.login && <PopUpLogin></PopUpLogin>}
      {loading.isLoading ? <Loading_1 /> : ''}

      <Routes>
        {publicRouter.map((route, index) => {
          let Page = route.component;
          let Layout = route.layout || HeaderOnly;
          if (route.layout) {
            Layout = route.layout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
