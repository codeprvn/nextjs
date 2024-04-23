import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';

function SocialMediaWrap() {
  return (
    <div className="psfw-social-wrap">
      <ul className="psfw-social-icons rounded_corner only_icon ">
        <li>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://dhartii.in/product/aasmani-kurta/"
            data-psfw-href="https://www.facebook.com/sharer/sharer.php?u="
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </li>
        <li>
          <Link
            href="https://api.whatsapp.com/send?text=https://dhartii.in/product/aasmani-kurta/"
            data-psfw-href="https://api.whatsapp.com/send?text="
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
        </li>
        <li>
          <Link
            id="psfw-copy-link"
            data-url="https://dhartii.in/product/aasmani-kurta/"
            data-psfw-href=""
            href="#"
          >
            <FontAwesomeIcon icon={faClipboard} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialMediaWrap