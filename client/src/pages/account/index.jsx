import Topbar from "../../components/topbar";
import "../../styles/pages/account.css";
import { AccountConsumer } from "../../stores/account";
import Sidebar from "../../components/sidebar";

export default function AccountPage() {
  return (
    <div>
      <Topbar />
      <div className="account__container">
        <Sidebar />
        <AccountConsumer>
          {(context) => (
            <div className="account__page">
              <div className="account__profile">
                <div className="account__profileTop">
                  <div className="account__avatar">
                    <img
                      className="account__image"
                      src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-hai-doc.jpg"
                      alt="avatar"
                    />
                  </div>

                  <div className="account__info">
                    <div className="account__fullName--top">
                      {context.account.fullName || "TNT_FULLNAME"}
                    </div>

                    <div className="account__username--top">
                      {context.account.username || "TNT_USERNAME"}
                    </div>
                  </div>
                </div>

                <div className="account__profileBottom">
                  <div className="account__field--bot">
                    <label className="account__label--bot">Full name: </label>
                    <span>{context.account.fullName || "TNT_FULLNAME"}</span>
                  </div>

                  <div className="account__field--bot">
                    <label className="account__label--bot">Username: </label>
                    <span>{context.account.username || "TNT_USERNAME"}</span>
                  </div>

                  <div className="account__field--bot">
                    <label className="account__label--bot">Email: </label>
                    <span>{context.account.email || "TNT@DEMO"}</span>
              
                  </div>

                  <div className="account__field--bot">
                    <label className="account__label--bot">Phone: </label>
                    <span>{context.account.phone || "TNT_PHONE NUMBER"}</span>
                  </div>

                </div>
              </div>

              <div className="account__history"></div>
            </div>
          )}
        </AccountConsumer>
      </div>
    </div>
  );
}
