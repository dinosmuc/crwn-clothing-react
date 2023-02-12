import CategoryMenu from "../../components/category-menu/category-menu.component";
import { Outlet } from "react-router-dom";

const Home = () => {


  return (
    <div>
      <Outlet />
      <CategoryMenu />
    </div>
    
  );
}

export default Home;
