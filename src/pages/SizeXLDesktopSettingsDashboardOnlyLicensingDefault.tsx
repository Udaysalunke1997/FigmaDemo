import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import HomeIcon from "../components/HomeIcon";
import CloseButton from "../components/CloseButton";
import SettingsButton from "../components/SettingsButton";
import PatientEngagementIcon from "../components/PatientEngagementIcon";
import "./SizeXLDesktopSettingsDashboardOnlyLicensingDefault.css";

const SizeXLDesktopSettingsDashboardOnlyLicensingDefault: FunctionComponent =
  () => {
    return (
      <div className="size-xl-desktop-settings-das">
        <main className="size-xl-desktop-settings-das-inner">
          <section className="home-wrapper">
            <div className="home">
              <section className="nav-bar-wrapper">
                <NavBar expand size="L" type="Single Location" />
              </section>
              <main className="breadcrums-parent">
                <header className="breadcrums">
                  <div className="tab-container">
                    <div className="tab-ui">
                      <div className="home-tab">
                        <HomeIcon selected="Off" size="M" style="Nav Bar" />
                        <CloseButton size="22x22" showCloseButton={false} />
                      </div>
                      <div className="tab-ui-child" />
                    </div>
                    <div className="tab-ui1">
                      <b className="practice-settings">Practice Settings</b>
                      <CloseButton size="22x22" showCloseButton />
                    </div>
                  </div>
                </header>
                <section className="frame-wrapper">
                  <div className="practice-settings-parent">
                    <h3 className="practice-settings1">Practice Settings</h3>
                    <div className="frame-container">
                      <div className="frame-parent">
                        <div className="settings-button-parent">
                          <SettingsButton
                            state="Default"
                            settingName="Practice Information"
                            description="Practice name, logo, address, default reply email, and schedule"
                          />
                          <div className="settings-button">
                            <div className="frame-group">
                              <div className="group-div">
                                <div className="rectangle-wrapper">
                                  <div className="frame-child" />
                                </div>
                                <PatientEngagementIcon
                                  selected="Off"
                                  size="S"
                                  style="Disabled"
                                />
                              </div>
                              <div className="setting-name-parent">
                                <b className="setting-name">
                                  Patient Reminders
                                </b>
                                <div className="setting-name">
                                  Appointment and Recall reminders
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="settings-button-parent">
                          <SettingsButton
                            state="Disabled"
                            settingName="Online Scheduling"
                            description="Scheduling reply email, treatments, operatories, accepted insurances, and scheduling rules"
                          />
                          <textarea
                            className="settings-button1"
                            placeholder="Reviews"
                            rows={6}
                            cols={36}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </section>
        </main>
      </div>
    );
  };

export default SizeXLDesktopSettingsDashboardOnlyLicensingDefault;
