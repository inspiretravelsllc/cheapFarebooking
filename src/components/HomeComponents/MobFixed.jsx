import React from "react";
import "../../assets/css/style.css"
import CallBackHover from "../../assets/images/callback-hover.webp"

function MobFixed() {
  return (
    <div id="voucherFixed">
    <div className="voucherDiv">
        <img src={CallBackHover} />
        <div>
            Call Us to Get  <span>$300 EXTRA</span>:<br />
Voucher Code <span>CHPAPFB5</span>
        </div>
    </div>
    <div className="fixedkdIcon" style={{cursor:'pointer'}}>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="60" height="60" x="0" y="0" viewBox="0 0 512 512"  xmlSpace="preserve" className=""><g><circle cx="256" cy="256" r="256"  fill="#6aaf50" data-original="#6aaf50" className=""></circle><path d="m135.693 102.206-.008.004c-29.639 15.464-42.074 51.222-28.494 81.77a454.997 454.997 0 0 0 77.468 119.423l23.939 23.939 159.073 159.073c39.82-19.335 73.863-48.69 98.876-84.783l-58.697-58.697a32.553 32.553 0 0 0-8.681-8.681L177.747 112.833c-9.294-13.695-27.382-18.283-42.054-10.627z"  fill="#4d8538" data-original="#4d8538"></path><path d="M349.593 300.614a24.052 24.052 0 0 0-27.116.071l-11.752 8.066c-13.09 8.984-30.498 8.496-43.08-1.187a402.081 402.081 0 0 1-33.924-29.283 401.742 401.742 0 0 1-29.283-33.924c-9.684-12.581-10.171-29.989-1.187-43.08l8.066-11.752a24.054 24.054 0 0 0 .071-27.116l-33.64-49.575c-9.293-13.694-27.381-18.282-42.054-10.627l-.009.004c-29.639 15.464-42.074 51.222-28.494 81.77a454.997 454.997 0 0 0 77.468 119.423l23.939 23.939a455.055 455.055 0 0 0 119.423 77.468c30.549 13.58 66.306 1.145 81.77-28.494l.004-.009c7.655-14.672 3.068-32.761-10.627-42.054l-49.575-33.64z"  fill="#ffffff" data-original="#ffffff" className=""></path></g></svg>
</div>
</div>
  );
}

export default MobFixed;
