import React from "react";
import { createPortal } from "react-dom";
import "../../App.css"
import CallCenter from "../../assets/images/call-center.jpg"

function StartingModal({showModal, setShowModal}) {
  return createPortal(
    <div
      onClick={() => setShowModal(false)}
      className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${
        showModal ? "" : "hidden" 
      }`} style={{zIndex:"1"}}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg"
      >
        <div
          className="modal fade show"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-modal="true"
          role="dialog"
          style={{ display: "block" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "650px" }}
          >
            <div className="modal-content">
              <div className="modal-body px-4">
                <div className="text-end">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>{" "}
                </div>
                <div className="row position-relative">
                  <div className="col-md-3">
                    <div className="position-relative d-inline-block afterbefore">
                      <img
                        src={CallCenter}
                        className=" user-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-9 headerContent">
                    <h1>Let Us Help You Book</h1>
                    <p>Speak with a travel expert and get assistance 24/7</p>
                    <div
                      className="text-center "
                      style={{ position: "absolute", width: "100%", left: "0" }}
                    >
                      <a
                        href="tel:+1 888-316-4927"
                        className="cta d-none d-sm-inline-block"
                      >
                        <img
                          src="https://img.icons8.com/?size=512&amp;id=9730&amp;format=png"
                          className="me-3"
                          style={{
                            width: "21px",
                            position: "relative",
                            zIndex: "999",
                          }}
                        />
                        <span>+1 888-316-4927</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-block pb-md-4 pb-3">
                <h2 className="text-center mb-md-5 mb-3">
                  Why to Book with Call Center
                </h2>
                <div className="row">
                  <div className="col-md-6 mb-md-5 mb-3 d-flex align-items-center">
                    <svg
                      className="me-3"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M57.6 51.055a8.517 8.517 0 0 0-6.392-7.25L39 40.371v-4.736c2.409-1.975 4.505-4.659 4.916-7.635H47.8a3.2 3.2 0 0 0 3.2-3.2v-3.6a3.192 3.192 0 0 0-1.82-2.873 15.965 15.965 0 0 0 .12-1.827C49.3 10.337 47.051 0 32 0S14.7 10.337 14.7 16.5a15.965 15.965 0 0 0 .119 1.827A3.192 3.192 0 0 0 13 21.2v3.6a3.2 3.2 0 0 0 3.2 3.2h3.887c.411 2.968 2.5 5.647 4.915 7.62v4.751L12.823 43.8A8.531 8.531 0 0 0 6.4 51.055L5.007 62.883a1 1 0 0 0 .876 1.11A.945.945 0 0 0 6 64a1 1 0 0 0 .992-.883l1.393-11.828a6.533 6.533 0 0 1 4.946-5.559l6.137-1.725 5.7 8.55a1 1 0 0 0 .688.434A.873.873 0 0 0 26 53a1 1 0 0 0 .64-.231L31 49.135v6.842a1 1 0 1 0 2 0v-6.842l4.36 3.634A1 1 0 0 0 38 53a.873.873 0 0 0 .144-.011 1 1 0 0 0 .688-.434l5.7-8.555 6.168 1.739a6.519 6.519 0 0 1 4.912 5.55l1.392 11.828A1 1 0 0 0 58 64a.945.945 0 0 0 .118-.007 1 1 0 0 0 .876-1.11ZM20.073 18h-.338C20 9.147 23.818 5 31.709 5c7.458 0 11.275 3.706 11.9 11.585a4.752 4.752 0 0 0-4.653-3.659 9.681 9.681 0 0 0-3.984.992 7.3 7.3 0 0 1-2.97.79 7.3 7.3 0 0 1-2.97-.79 9.681 9.681 0 0 0-3.984-.992c-3.423 0-4.684 2.917-4.975 5.074ZM49 24.8a1.2 1.2 0 0 1-1.2 1.2H44v-6h3.8a1.2 1.2 0 0 1 1.2 1.2ZM32 2c12.645 0 15.3 7.884 15.3 14.5a13.714 13.714 0 0 1-.092 1.5h-1.526C45.4 7.92 40.828 3 31.709 3S18.02 7.92 17.736 18h-.943a13.73 13.73 0 0 1-.092-1.5C16.7 9.884 19.355 2 32 2ZM15 24.8v-3.6a1.2 1.2 0 0 1 1.2-1.2H20v6h-3.8a1.2 1.2 0 0 1-1.2-1.2Zm7 2.155V19c0-.167.057-4.077 3.046-4.077a7.818 7.818 0 0 1 3.2.833 9.087 9.087 0 0 0 3.75.949 9.087 9.087 0 0 0 3.75-.949 7.818 7.818 0 0 1 3.2-.833C41.943 14.926 42 18.836 42 19v7.307l-4.718 1.769A2.983 2.983 0 1 0 38 30c0-.019-.005-.036-.006-.055l3.768-1.413C40.491 33.157 34.093 37 32.023 37 29.71 37 22 32.252 22 26.957ZM36 30a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-3.977 9A10.926 10.926 0 0 0 37 37.077v3.509l-5 5-5-5v-3.525A11.035 11.035 0 0 0 32.023 39Zm-5.808 11.52-4.723-7.085 4.316-1.213 4.711 4.711Zm11.57 0-4.3-3.587 4.711-4.711 4.316 1.213Z"
                          fill="#FED03B"
                          className=""
                        ></path>
                        <path
                          d="M32 59a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Z"
                          fill="#FED03B"
                          className=""
                        ></path>
                      </g>
                    </svg>
                    <span className="text-white">
                      Expert Guidance by Our Travel Experts
                    </span>
                  </div>
                  <div className="col-md-6 mb-md-5 mb-3 d-flex align-items-center">
                    <svg
                      className="me-3"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512"
                      
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M512 218.1c0-2.3-2-3.4-2.7-4.1l-38.8-33.2c44.6-32.3 54.6-94.7 22.3-139.3-41.4-60.1-138.1-52.2-169.6 13.3L261 1.9c-2.9-2.5-7.2-2.5-10 0l-86.9 74.2h-71c-4.3 0-7.8 3.5-7.7 7.8v59.4L2.7 214C0 215.7.1 218.8.1 220c.5 3.9-.1 278.3-.1 287.1 0 2.4 1.5 4.9 6.4 5 6.3.1 493.1-.1 500.2-.1 3.8 0 5.5-5.5 5.4-7.5h.1c-1-4.5-.1-278.9-.1-286.4zm-15.5 18.7v250.5L349.8 362.1l146.7-125.3zm-4.2-16.8-65.6 56v-77.4c10.3-1.4 20.4-4.5 29.7-9.2l35.9 30.6zM412.1 15.5c111.3 2.8 111.3 166 0 168.8-111.4-2.9-111.2-165.8 0-168.8zm-156.2 2.6 60.8 52c-.6 1.8-1 3.9-1.6 6H187.9l68-58zm56.7 73.6c-5.1 57.4 40.9 107.8 98.6 108v89.6L338 351.9l-77-65.8c-2.9-2.3-7.1-2.3-10 0l-76.9 65.8-73.2-62.6V91.7h211.7zM162.1 362.1 15.4 487.3V236.8l146.7 125.3zM85.3 276l-65.6-56 65.6-56.2V276zM28.8 496.5l227.1-194.3 227.3 194.3H28.8z"
                          fill="#FED03B"
                          className=""
                        ></path>
                        <path
                          d="M402.4 152.5c3.3 4.2 10.6 3.5 12.9-1.4l45.1-87.3c2-4.2 0-7.9-3.1-9.8-3.4-2-8.2-1.8-10.7 2.7l-39.7 76.9-30.3-36.9c-3.2-3.8-7.8-3.3-10.8-.9s-4.4 6.8-1.3 10.7c.1.1 37.8 45.9 37.9 46zM147.4 207.3H318c5-.1 7.6-3.9 7.6-7.7 0-3.8-2.5-7.6-7.6-7.7H147.4c-5 .1-7.6 3.9-7.6 7.7 0 3.8 2.5 7.6 7.6 7.7zM147.4 157h131.8c5.3.1 8-3.8 8-7.7 0-3.9-2.6-7.9-8-7.7H147.4c-9.6.4-9.7 14.9 0 15.4zM147.4 257.7h217.3c4.8-.2 7.2-3.9 7.2-7.7 0-3.8-2.4-7.5-7.2-7.7H147.4c-4.8.2-7.2 4-7.2 7.7-.1 3.8 2.3 7.5 7.2 7.7z"
                          fill="#FED03B"
                          className=""
                        ></path>
                      </g>
                    </svg>
                    <span className="text-white">
                      Immediate Booking Confirmation
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-md-0 mb-3 d-flex align-items-center">
                    <svg
                      className="me-3"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      viewBox="0 0 480 480"
                      
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M472 432h-24V280a8 8 0 0 0-14.552-4.584l-112 160A7.999 7.999 0 0 0 328 448h104v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16zm-40 0h-88.64L432 305.376V432z"
                          fill="#FED03B"
                        ></path>
                        <path
                          d="M328 464h-94.712l88.056-103.688c.2-.238.387-.486.56-.744 16.566-24.518 11.048-57.713-12.56-75.552-28.705-20.625-68.695-14.074-89.319 14.631A63.997 63.997 0 0 0 208 336a8 8 0 0 0 16 0c-.003-26.51 21.486-48.002 47.995-48.005A47.999 47.999 0 0 1 300 297.008c16.537 12.671 20.388 36.007 8.8 53.32l-98.896 116.496A8 8 0 0 0 216 480h112a8 8 0 0 0 0-16z"
                          fill="#FED03B"
                        ></path>
                        <path
                          d="M216.176 424.152a8 8 0 0 0-7.693-8.296h-.003C104.11 411.982 20.341 328.363 16.28 224H48a8 8 0 0 0 0-16H16.28C20.283 103.821 103.82 20.287 208 16.288V40a8 8 0 0 0 16 0V16.288c102.754 3.974 185.686 85.34 191.616 188l-31.2-31.2a8 8 0 0 0-11.312 11.312l44.656 44.656a7.863 7.863 0 0 0 3.152 2.296c.313.094.631.172.952.232a7.914 7.914 0 0 0 1.696.408h.456a7.708 7.708 0 0 0 1.792-.352c.329-.04.655-.101.976-.184a7.88 7.88 0 0 0 2.888-1.808l45.264-45.248a8 8 0 0 0-11.312-11.312l-31.976 31.952C425.933 90.37 331.38.281 216.568.112 216.368.104 216.2 0 216 0s-.368.104-.568.112C96.582.275.275 96.582.112 215.432c0 .2-.112.368-.112.568s.104.368.112.568c.199 115.917 91.939 210.97 207.776 215.28h.296a8 8 0 0 0 7.992-7.696z"
                          fill="#FED03B"
                        ></path>
                        <path
                          d="M323.48 108.52a8 8 0 0 0-11.312 0L226.2 194.48a25.055 25.055 0 0 0-20.408 0l-40.704-40.704a8 8 0 0 0-11.312 11.312l40.624 40.624c-5.704 11.94-.648 26.244 11.293 31.947a23.96 23.96 0 0 0 27.275-4.683 23.737 23.737 0 0 0 4.624-27.256l85.888-85.888a8 8 0 0 0 0-11.312zM221.658 221.654l-.002.002a8.185 8.185 0 0 1-11.312 0 8 8 0 1 1 11.314-.002z"
                          fill="#FED03B"
                        ></path>
                      </g>
                    </svg>
                    <span className="text-white">24 Hour Cancellation</span>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <svg
                      className="me-3"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.com/svgjs"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      viewBox="0 0 512.001 512.001"
                      
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M341.954 328.358c-12.131 0-22-8.542-22-19.041 0-10.5 9.869-19.042 22-19.042s22 8.542 22 19.042c0 5.522 4.478 10 10 10s10-4.478 10-10c0-18.325-13.654-33.733-32-37.915v-5.201c0-5.522-4.478-10-10-10s-10 4.478-10 10v5.201c-18.346 4.182-32 19.59-32 37.915 0 21.527 18.841 39.041 42 39.041 12.131 0 22 8.542 22 19.042s-9.869 19.042-22 19.042-22-8.542-22-19.042c0-5.522-4.478-10-10-10s-10 4.478-10 10c0 18.325 13.654 33.733 32 37.915v4.32c0 5.522 4.478 10 10 10s10-4.478 10-10v-4.32c18.346-4.182 32-19.59 32-37.915 0-21.528-18.841-39.042-42-39.042zM451.482 268.876a130.294 130.294 0 0 0-53.222-47.101c-4.979-2.394-10.954-.298-13.346 4.68-2.393 4.978-.298 10.952 4.68 13.345C427.505 258.024 452 296.963 452 339.001c0 17.988-4.434 35.827-12.821 51.591-2.594 4.875-.745 10.931 4.131 13.525a10 10 0 0 0 13.525-4.131C466.756 381.342 472 360.253 472 339.001c0-24.96-7.095-49.209-20.518-70.125zM357.673 209.002l-.673-.001c-5.522 0-10 4.477-10 10s4.478 10 10 10l.579.001h.048c5.501 0 9.973-4.446 9.999-9.953.025-5.523-4.431-10.021-9.953-10.047zM294.407 438.202c-37.91-18.225-62.405-57.164-62.405-99.201 0-17.988 4.434-35.827 12.821-51.591 2.594-4.875.745-10.931-4.131-13.525-4.874-2.594-10.932-.745-13.525 4.131-9.921 18.645-15.165 39.733-15.165 60.985 0 24.96 7.095 49.208 20.518 70.125a130.304 130.304 0 0 0 53.222 47.102 10.002 10.002 0 0 0 8.665-18.026zM327.002 449.001l-.579-.002c-5.548-.01-10.02 4.429-10.045 9.953-.026 5.523 4.432 10.021 9.954 10.047l.67.002c5.522 0 10-4.478 10-10s-4.478-10-10-10z"
                          fill="#FED03B"
                          data-original="#000000"
                          className=""
                        ></path>
                        <path
                          d="M387.409 175.168a45.9 45.9 0 0 0-4.443-8.168H409c25.364 0 46-20.636 46-46s-20.636-46-46-46h-80.08A45.733 45.733 0 0 0 337 49c0-25.364-20.636-46-46-46H46C20.636 3 0 23.636 0 49s20.636 46 46 46h80.08c-5.091 7.402-8.08 16.357-8.08 26s2.988 18.598 8.08 26H100c-25.364 0-46 20.636-46 46 0 14.567 6.814 27.566 17.415 36C60.814 237.434 54 250.433 54 265s6.814 27.566 17.415 36C60.814 309.434 54 322.433 54 337s6.814 27.566 17.415 36C60.814 381.434 54 394.433 54 409c0 25.364 20.636 46 46 46h117.85c31.046 33.207 75.212 54.001 124.151 54.001 93.738 0 170-76.262 170-170 0-78.017-52.83-143.918-124.592-163.833zM409 95c14.337 0 26 11.664 26 26s-11.663 26-26 26H164c-14.337 0-26-11.664-26-26s11.663-26 26-26h245zM46 75c-14.337 0-26-11.664-26-26s11.663-26 26-26h245c14.337 0 26 11.664 26 26s-11.663 26-26 26H46zm54 92h245c4.028 0 7.885.936 11.345 2.612-4.73-.397-9.512-.611-14.344-.611-46.945 0-89.505 19.129-120.299 49.999H100c-14.336 0-26-11.664-26-26s11.664-26 26-26zm0 72h104.615c-11.352 15.553-20.129 33.095-25.703 52H100c-14.337 0-26-11.663-26-26 0-14.336 11.663-26 26-26zm0 72h74.32a170.4 170.4 0 0 0-2.319 28.001c0 8.146.589 16.156 1.702 23.999H100c-14.337 0-26-11.663-26-26s11.663-26 26-26zm0 124c-14.337 0-26-11.663-26-26s11.663-26 26-26h77.786a169.33 169.33 0 0 0 23.993 52H100zm242.001 54.001c-82.71 0-150-67.29-150-150s67.29-150 150-150 150 67.29 150 150-67.29 150-150 150z"
                          fill="#FED03B"
                          data-original="#000000"
                          className=""
                        ></path>
                      </g>
                    </svg>{" "}
                    <span className="text-white">Get Unpublished Deals</span>
                  </div>
                </div>
              </div>
              <div className="py-3 d-inline-block d-sm-none text-center">
                <a href="tel:+1 888-316-4927" className="cta">
                  <img
                    src="https://img.icons8.com/?size=512&amp;id=9730&amp;format=png"
                    className="me-3"
                    style={{
                      width: "21px",
                      position: "relative",
                      zIndex: "999",
                    }}
                  />
                  <span>+1 888-316-4927</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("startingModel")
  );
}

export default StartingModal;
