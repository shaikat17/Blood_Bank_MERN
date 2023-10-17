import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const Home = () => {
  return (
    <>
    <ToastContainer />
    <Outlet />
      </>
  )
}

export default Home