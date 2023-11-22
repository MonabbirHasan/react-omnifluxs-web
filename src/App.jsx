import React from "react";
import WithdrawalWizard from "./page/seller_dashboard/components/withdrawal_wizard/WithdrawalWizard";
import DailyTaskAds from "./page/seller_dashboard/components/daily_task_ads/DailyTaskAds";
import IdActivePlan from "./page/seller_dashboard/components/id_active_plan/IdActivePlan";
import UserReferral from "./page/seller_dashboard/components/user_referral/UserReferral";
import UserSettings from "./page/seller_dashboard/components/user_settings/UserSettings";
import UserProfile from "../src/page/seller_dashboard/components/UserProfile/Profile";
import UserLogout from "./page/seller_dashboard/components/user_logout/UserLogout";
import RankReword from "./page/seller_dashboard/components/rank_reword/RankReword";
import UsersOrder from "./page/seller_dashboard/components/user-order/UsersOrder";
import TeamList from "./page/seller_dashboard/components/team_list/TeamList";
import WatchAds from "./page/seller_dashboard/components/watch_ads/WatchAds";
import Payout from "./page/seller_dashboard/components/payout/Pyaout";
import ProductDetails from "./page/yt_channel_details/ProductDetails";
import Service_request from "./page/service_request/Service_request";
import MainPage from "./page/seller_dashboard/HeaderFooter/MainPage";
import Posts from "./page/seller_dashboard/components/posts/Posts";
import Chats from "./page/seller_dashboard/components/chats/Chats";
import ViewProducts from "./page/view_products/ViewProducts";
import BlogDetails from "./page/blog_details/BlogDetails";
import Website_shop from "./page/website_shop/Shop";
import Community from "./page/community/Community";
import ForgotPass from "./auth/forgot/Forgot_pass";
import Wishlists from "./page/wishlist/Wishlists";
import WebOrder from "./page/web-order/WebOrder";
import { Route, Routes } from "react-router-dom";
import SmmPanel from "./page/smmpanel/SmmPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./page/service/Service";
import Courses from "./page/courses/Courses";
import Pricing from "./page/pricing/Pricing";
import Contact from "./page/contact/Contact";
import Signup from "./auth/signup/Signup";
import Blogs from "./page/blogs/Blogs";
import About from "./page/about/About";
import Login from "./auth/login/Login";
import Help from "./page/help/Help";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
/************************************************************/
import { AdminDashboard } from "./admin/pages";
import SellerProfileView from "./page/seller_profile_view/SellerProfileView";
// import AdminProfile from "./admin/pages/admin_profile/AdminProfile";
// import { AppContext } from "./context/AppContext";
import AdminLogin from "./admin/auth/login/AdminLogin";
import Error from "./components/error/Error";
import Forgot from "./admin/auth/forgot/Forgot";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot" element={<ForgotPass />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/product-details/:id" element={<ProductDetails />} />
        <Route exact path="/services/request" element={<Service_request />} />
        <Route exact path="/shop" element={<Website_shop />} />
        <Route exact path="/smm-panel" element={<SmmPanel />} />
        <Route exact path="/web-order" element={<WebOrder />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog-details/:id" element={<BlogDetails />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/carts" element={<Cart />} />
        <Route exact path="/wishlists" element={<Wishlists />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/view-all" element={<ViewProducts />} />
        {/* DAHSBOARD ROUTE START HERE */}
        <Route exact path="/seller_dashboard/*" element={<MainPage />}>
          <Route exact path="user-order" element={<UsersOrder />} />
          <Route exact path="posts" element={<Posts />} />
        </Route>
        <Route
          exact
          path="/seller_dashboard/user_referr"
          element={<UserReferral />}
        />
        <Route
          exact
          path="/user/:slug/account/settings"
          element={<UserSettings />}
        />
        <Route
          exact
          path="/seller_dashboard/user/:slug"
          element={<UserProfile />}
        />
        <Route exact path="/seller_dashboard/chat/" element={<Chats />} />
        <Route exact path="/seller_dashboard/payout" element={<Payout />} />
        <Route
          exact
          path="/seller_dashboard/withdrawal_wizard"
          element={<WithdrawalWizard />}
        />
        <Route
          exact
          path="/seller_dashboard/daily-task"
          element={<DailyTaskAds />}
        />
        <Route
          exact
          path="/seller_dashboard/watch-ads"
          element={<WatchAds />}
        />
        <Route
          exact
          path="/seller_dashboard/active-plan"
          element={<IdActivePlan />}
        />
        <Route
          exact
          path="/seller_dashboard/rank-reword"
          element={<RankReword />}
        />
        <Route
          exact
          path="/seller_dashboard/team-list"
          element={<TeamList />}
        />
        <Route exact path="/user_logout" element={<UserLogout />} />
        <Route exact path="/super-admin" element={<AdminLogin />} />
        <Route exact path="/super-forgot" element={<Forgot />} />
        <Route exact path="/seller/:slugs" element={<SellerProfileView />} />
        {/* <Route path="/super-admin/:slugs/profile" element={<AdminProfile />} /> */}
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
        {/*ERROR HANDLING ROUTE START HERE */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
