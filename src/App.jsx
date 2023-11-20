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
import { AppContext } from "./context/AppContext";
function App() {
  return (
    <>
      <AppContext>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/services/request" element={<Service_request />} />
          <Route path="/shop" element={<Website_shop />} />
          <Route path="/smm-panel" element={<SmmPanel />} />
          <Route path="/web-order" element={<WebOrder />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carts" element={<Cart />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/community" element={<Community />} />
          <Route path="/view-all" element={<ViewProducts />} />
          {/* DAHSBOARD ROUTE START HERE */}
          <Route path="/seller_dashboard/*" element={<MainPage />}>
            <Route path="user-order" element={<UsersOrder />} />
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route
            path="/seller_dashboard/user_referr"
            element={<UserReferral />}
          />
          <Route
            path="/user/:slug/account/settings"
            element={<UserSettings />}
          />
          <Route
            path="/seller_dashboard/user/:slug"
            element={<UserProfile />}
          />
          <Route path="/seller_dashboard/chat/" element={<Chats />} />
          <Route path="/seller_dashboard/payout" element={<Payout />} />
          <Route
            path="/seller_dashboard/withdrawal_wizard"
            element={<WithdrawalWizard />}
          />
          <Route
            path="/seller_dashboard/daily-task"
            element={<DailyTaskAds />}
          />
          <Route path="/seller_dashboard/watch-ads" element={<WatchAds />} />
          <Route
            path="/seller_dashboard/active-plan"
            element={<IdActivePlan />}
          />
          <Route
            path="/seller_dashboard/rank-reword"
            element={<RankReword />}
          />
          <Route path="/seller_dashboard/team-list" element={<TeamList />} />
          <Route path="/user_logout" element={<UserLogout />} />
          <Route path="/super-admin" element={<AdminDashboard />} />
          <Route path="/:slugs" element={<SellerProfileView />} />
          {/* <Route path="/super-admin/:slugs/profile" element={<AdminProfile />} /> */}

          {/* DAHSBOARD ROUTE END HERE */}
        </Routes>
      </AppContext>
    </>
  );
}

export default App;
