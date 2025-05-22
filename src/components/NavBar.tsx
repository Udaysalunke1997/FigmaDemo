import { FunctionComponent } from "react";
import PatientFinderIcon from "./PatientFinderIcon";
import NotificationsIcon from "./NotificationsIcon";
import DocumentsIcon from "./DocumentsIcon";
import EmailIcon from "./EmailIcon";
import SettingsIcon from "./SettingsIcon";
import DirectionalButton from "./DirectionalButton";
import ExpandCollapseMainNavOptio from "./ExpandCollapseMainNavOptio";
import LogOutIcon from "./LogOutIcon";
import "./NavBar.css";

export type NavBarType = {
  className?: string;

  /** Variant props */
  expand?: boolean;
  size?: string;
  type?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({
  className = "",
  expand = true,
  size = "M",
  type = "Single Location",
}) => {
  return (
    <div
      className={`nav-bar ${className}`}
      data-expand={expand}
      data-size={size}
      data-type={type}
    >
      <div className="nav-bar-inner">
        <div className="logo-parent">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          <div className="icons-container-parent">
            <div className="icons-container">
              <PatientFinderIcon selected="Off" size="M" style="Nav Bar" />
              <div className="patients">Patients</div>
            </div>
            <div className="icons-container1">
              <NotificationsIcon
                notifsBubble="On"
                selected="Off"
                size="M"
                style="Icon"
              />
              <div className="text-messages">Text Messages</div>
            </div>
            <div className="icons-container2">
              <div className="documents-icon1">
                <DocumentsIcon
                  alert1="Default"
                  selected="On"
                  size="M"
                  state="Default"
                  style="Icon"
                />
              </div>
              <div className="forms">Forms</div>
            </div>
            <div className="icons-container3">
              <img
                className="team-chat-icons"
                loading="lazy"
                alt=""
                src="/team-chat-icons.svg"
              />
              <div className="team-chat">Team Chat</div>
            </div>
            <div className="icons-container4">
              <div className="email-icon1">
                <EmailIcon size="M" state="Default" type="Icon" />
              </div>
              <div className="campaigns">Campaigns</div>
            </div>
            <div className="settings1">
              <div className="settings-icon-parent">
                <SettingsIcon selected="On" size="M" style="Nav Bar" />
                <div className="settings">Settings</div>
              </div>
              <DirectionalButton
                direction="Down"
                size="T and D"
                arrowTDDown="/arrow--td--down.svg"
              />
            </div>
          </div>
          <ExpandCollapseMainNavOptio option={1} type="Collapse" />
        </div>
      </div>
      <img
        className="official-logo-light-mode-sm"
        alt=""
        src="/official-logo--light-mode-sm.svg"
      />
      <div className="header-container">
        <img
          className="header-icons"
          loading="lazy"
          alt=""
          src="/vector-339.svg"
        />
        <div className="header-icons1">
          <div className="notifications-icon2">
            <div className="sign-out-action">
              <b className="empty-state">9+</b>
            </div>
            <div className="notifications-icon1">
              <img
                className="notifications-icon-child"
                loading="lazy"
                alt=""
                src="/group-175.svg"
              />
            </div>
          </div>
          <div className="notifications">Notifications</div>
        </div>
        <div className="header-icons2">
          <LogOutIcon selected="Off" size="M" style="Nav Bar" />
          <div className="log-out">Log Out</div>
        </div>
        <img
          className="header-icons3"
          loading="lazy"
          alt=""
          src="/vector-339.svg"
        />
      </div>
    </div>
  );
};

export default NavBar;
