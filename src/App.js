import "bootstrap/dist/css/bootstrap.min.css";
import "react-tippy/dist/tippy.css";
import "./styles.scss";
import records from "./data/records.json";
import { Tooltip } from "react-tippy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faEllipsisV,
  faEye,
  faFlag,
  faUser,
  faCaretRight,
  faCaretDown,
  faCaretUp,
  faShoppingBag,
  faSortAmountDownAlt,
  faSortUp,
  faSquare,
  faMapMarkerAlt,
  faPlus,
  faPhoneAlt,
  faShare,
  faTimes,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faCaretSquareRight
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value),
  // which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

export default function App() {
  const [expanded, setExpanded] = useState(
    new Array(records.length).fill(false)
  );

  const [selected, setSelected] = useState(
    new Array(records.length).fill(false)
  );

  const toggleExpanded = (index) => {
    const draft = [...expanded];
    draft[index] = !draft[index];
    console.log(draft[index]);
    setExpanded(draft);
  };

  const toggleSelected = (index) => {
    const draft = [...selected];
    draft[index] = !draft[index];
    setSelected(draft);
  };

  const phoneIcons = {
    M: faMobile,
    B: faBriefcase,
    H: faUser
  };

  const emailIcons = {
    B: faBriefcase,
    P: faUser
  };

  return (
    <div className="app">
      <div className="">
        <div className="panel border-dark border-2 border-start">
          <div className="panel-header d-flex font-weight-bold t-6">
            <div className="">SalesIntel RevDriver</div>
            <div className="d-flex justify-content-end align-items-center ms-auto">
              <span className="pe-3">
                <FontAwesomeIcon icon={faEye} className="me-3" />
                4/10
              </span>
              <span>
                <button
                  className="btn btn-link"
                  style={{ color: "white", marginTop: "-5px" }}
                >
                  <FontAwesomeIcon icon={faEllipsisV} className="" />
                </button>
              </span>
            </div>
          </div>
          <div className="panel-body">
            <div className=""></div>
            <div className="d-flex flex-wrap p-3">
              {/* <div className="pe-3">Filters:</div> */}
              <button className="btn btn-sm btn-outline-secondary me-1">
                <FontAwesomeIcon icon={faTimes} className="me-1" /> Amazon
              </button>
              <button className="btn btn-sm btn-outline-secondary me-1">
                <FontAwesomeIcon icon={faTimes} className="me-1" /> Directors
              </button>
              <button className="btn btn-sm btn-outline-secondary me-1">
                <FontAwesomeIcon icon={faTimes} className="me-1" /> Managers
              </button>
              <button className="btn btn-sm btn-outline-secondary me-1">
                <FontAwesomeIcon icon={faPlus} className="" />
              </button>
            </div>

            <div className="">
              <div className="px-3 border-dark border-bottom border-2">
                <div className="d-flex justify-content-center">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Human Verified (7,654)
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" href="#">
                        Machine Verified (17,548)
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="d-flex align-items-center px-3 py-2 t-3">
                  <div className="d-flex flex-grow-1">
                    <label>
                      <input type="checkbox" className="me-2" /> Select all
                    </label>
                    <div className="ps-4">
                      {selected.filter(Boolean).length} selected
                    </div>
                    <div className="ps-4">
                      <button className="btn btn-link mx-1">
                        <Tooltip
                          title="Export"
                          arrow="true"
                          position="bottom"
                          theme="light"
                        >
                          <FontAwesomeIcon icon={faShare} className="mx-1" />
                        </Tooltip>
                      </button>
                      <button className="btn btn-link ms-1">
                        <Tooltip
                          title="Report (Pro license)"
                          arrow="true"
                          position="bottom"
                          theme="light"
                        >
                          <FontAwesomeIcon icon={faFlag} className="mx-1" />
                        </Tooltip>
                      </button>
                    </div>
                  </div>
                  <div className="ms-auto d-flex justify-content-end">
                    <Tooltip
                      title="Detailed view"
                      arrow="true"
                      position="bottom"
                      theme="light"
                    >
                      <button className="btn-link ms-2">
                        <FontAwesomeIcon
                          icon={faAddressCard}
                          className="fa-fw"
                        />
                      </button>
                    </Tooltip>
                    <Tooltip
                      title="Sort ascending"
                      arrow="true"
                      position="bottom"
                      theme="light"
                    >
                      <button className="btn-link ms-4">
                        <FontAwesomeIcon
                          icon={faSortAmountDownAlt}
                          className="fa-fw"
                        />
                      </button>
                    </Tooltip>
                    <Tooltip
                      html={
                        <div
                          className="d-flex flex-column align-items-start"
                          style={{ width: "100px" }}
                        >
                          <div>Sort by:</div>
                          <div>
                            <button className="btn-link">
                              <span>Name</span>
                            </button>
                          </div>
                          <div>
                            <button className="btn-link">
                              <span>Position</span>
                            </button>
                          </div>
                          <div>
                            <button className="btn-link">
                              <span>Company</span>
                            </button>
                          </div>
                          <div>
                            <button className="btn-link">
                              <span>Distance</span>
                            </button>
                          </div>
                        </div>
                      }
                      arrow="true"
                      position="bottom"
                      theme="light"
                      interactive="true"
                      trigger="click"
                    >
                      <button className="btn-link ms-1">
                        <span>Name</span>
                      </button>
                    </Tooltip>
                    {/* <Tooltip
                      title="Selected"
                      arrow="true"
                      position="bottom"
                      theme="light"
                    >
                      <button className="btn-link ms-4">
                        <FontAwesomeIcon
                          icon={faShoppingBag}
                          className="fa-fw"
                        />{" "}
                        <span>{selected.filter(Boolean).length}</span>
                      </button>
                    </Tooltip> */}
                  </div>
                </div>
                {records.map((record, recordIndex) => {
                  return (
                    <div
                      key={recordIndex}
                      className={`px-3 py-2 border-top ${
                        selected[recordIndex] && "selected"
                      }`}
                    >
                      <div className="d-flex pb-2">
                        <div className="pe-3 pt-1">
                          <div className="">
                            <input
                              type="checkbox"
                              checked={selected[recordIndex]}
                              onChange={(evt) => {
                                toggleSelected(recordIndex);
                              }}
                            />
                          </div>

                          {/* <div className="">
                            <button
                              className="btn-link"
                              onClick={() => {
                                toggleExpanded(recordIndex);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={
                                  expanded[recordIndex]
                                    ? faCaretDown
                                    : faCaretRight
                                }
                                className="fa-fw"
                              />
                            </button>
                          </div> */}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex">
                            <div className="t-5">{record.name}</div>
                            <div className="pt-1 t-3 ms-auto">
                              <Tooltip
                                title="Business phone available"
                                arrow="true"
                                position="bottom"
                                theme="light"
                              >
                                <FontAwesomeIcon
                                  icon={faBriefcase}
                                  className="fa-fw icon mx-1"
                                />
                              </Tooltip>
                              <Tooltip
                                title="Personal phone available"
                                arrow="true"
                                position="bottom"
                                theme="light"
                              >
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className="fa-fw icon mx-1"
                                />
                              </Tooltip>
                              <Tooltip
                                title="Headquarters phone available"
                                arrow="true"
                                position="bottom"
                                theme="light"
                              >
                                <FontAwesomeIcon
                                  icon={faPhoneAlt}
                                  className="fa-fw icon mx-1"
                                />
                              </Tooltip>
                              <Tooltip
                                title="LinkedIn profile available"
                                arrow="true"
                                position="bottom"
                                theme="light"
                              >
                                <FontAwesomeIcon
                                  icon={faSquare}
                                  className="fa-fw icon mx-1"
                                />
                              </Tooltip>
                              <a
                                className="mx-1"
                                href="https://maps.google.com"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <Tooltip
                                  title="Home address available"
                                  arrow="true"
                                  position="bottom"
                                  theme="light"
                                >
                                  <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="mx-1"
                                  />
                                </Tooltip>
                              </a>
                            </div>
                          </div>
                          <div className="byline t-3">{record.position}</div>
                          <div className="">
                            <div className="t-3">
                              <a
                                href="https://amazon.com"
                                rel="noreferrer"
                                target="_blank"
                              >
                                {record.company}
                              </a>
                            </div>
                          </div>

                          {expanded[recordIndex] && (
                            <div className="pt-2">
                              <div className="t-3">
                                <FontAwesomeIcon
                                  icon={faBriefcase}
                                  className="fa-fw icon me-1"
                                />
                                <Tooltip
                                  title="Open in Google Maps"
                                  arrow="true"
                                  position="right"
                                  theme="light"
                                >
                                  <a
                                    className="btn btn-link t-3"
                                    href="https://maps.google.com"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    {record.address}
                                  </a>
                                </Tooltip>
                              </div>
                              <div className="t-3">
                                <Tooltip
                                  title="Open LinkedIn profile"
                                  arrow="true"
                                  position="right"
                                  theme="light"
                                >
                                  <FontAwesomeIcon
                                    icon={faSquare}
                                    className="fa-fw icon me-1"
                                  />{" "}
                                  <a
                                    className="btn btn-link t-3"
                                    href="https://linkedin.com"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    {`linkedin.com/${record.name
                                      .replace(" ", "")
                                      .toLowerCase()}`}
                                  </a>
                                </Tooltip>
                              </div>
                              <div className="d-flex pt-2 t-3">
                                <div
                                  className="pe-3"
                                  style={{ width: "140px" }}
                                >
                                  <ul className="list-unstyled">
                                    {record.phoneNumbers.map(
                                      (phone, phoneIndex) => {
                                        return (
                                          <li key={phoneIndex}>
                                            <FontAwesomeIcon
                                              icon={phoneIcons[phone.type]}
                                              className="fa-fw icon me-1"
                                            />
                                            <Tooltip
                                              title="Copy to clipboard"
                                              arrow="true"
                                              position="right"
                                              theme="light"
                                            >
                                              <button
                                                className="btn btn-link t-3"
                                                onClick={copyToClipboard(
                                                  phone.value
                                                )}
                                              >
                                                {phone.value}
                                              </button>
                                            </Tooltip>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>

                                <div className="ms-auto flex-grow-1 t-3">
                                  <ul className="list-unstyled">
                                    {record.emails.map((email, emailIndex) => {
                                      return (
                                        <li key={emailIndex}>
                                          <FontAwesomeIcon
                                            icon={emailIcons[email.type]}
                                            className="fa-fw icon me-1"
                                          />
                                          <Tooltip
                                            title="Copy to clipboard"
                                            arrow="true"
                                            position="left"
                                            theme="light"
                                          >
                                            <button
                                              className="btn btn-link t-3"
                                              onClick={copyToClipboard(
                                                email.value
                                              )}
                                            >
                                              {email.value}
                                            </button>
                                          </Tooltip>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="d-flex pt-2">
                            <div className="">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-primary me-1"
                                onClick={(evt) => {
                                  toggleExpanded(recordIndex);
                                }}
                              >
                                {expanded[recordIndex] ? (
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faCaretUp}
                                      className="fa-fw me-1"
                                    />{" "}
                                    Collapse
                                  </span>
                                ) : (
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      className="fa-fw me-1"
                                    />{" "}
                                    Reveal
                                  </span>
                                )}
                              </button>
                            </div>
                            <div className="ms-auto">
                              <button className="btn btn-link mx-1">
                                <Tooltip
                                  title="Export"
                                  arrow="true"
                                  position="bottom"
                                  theme="light"
                                >
                                  <FontAwesomeIcon
                                    icon={faShare}
                                    className="mx-1"
                                  />
                                </Tooltip>
                              </button>
                              <button className="btn btn-link ms-1">
                                <Tooltip
                                  title="Report (Pro license)"
                                  arrow="true"
                                  position="bottom"
                                  theme="light"
                                >
                                  <FontAwesomeIcon
                                    icon={faFlag}
                                    className="mx-1"
                                  />
                                </Tooltip>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <br />
                <br />
              </div>
            </div>

            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="panel-footer">
            <a className="t-2" href="https://salesintel.io">
              Need help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
