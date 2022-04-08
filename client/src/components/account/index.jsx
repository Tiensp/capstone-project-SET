import "../../styles/pages/account.css";
import { AccountConsumer } from "../../stores/account";
export default function Account() {
  return (
      <div className="account__container">
        <AccountConsumer>
          {(context) => {
            return (
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
                      {context.account.fullName}
                    </div>

                    <div className="account__username--top">
                      {context.account.username }
                    </div>
                  </div>
                </div>

                <div className="account__profileBottom">
                  <div className="account__field--bot">
                    <label className="account__label--bot">Full name: </label>
                    <span>{context.account.fullName }</span>
                  </div>

                  <div className="account__field--bot">
                    <label className="account__label--bot">Username: </label>
                    <span>{context.account.username }</span>
                  </div>

                  <div className="account__field--bot">
                    <label className="account__label--bot">Email: </label>
                    <span>{context.account.email}</span>
              
                  </div>

                  <div className="account__field--bot">
                    <label className="account__label--bot">Phone: </label>
                    <span>{context.account.phoneNumber }</span>
                  </div>

                </div>
              </div>

              <div className="account__payment"></div>
            </div>
          )}}
        </AccountConsumer>
      </div>
  );
}
