import React from 'react';
import { baseButton } from '@/components/general/Button';
import Google from '../../../public/assets/icon/google.svg';

type SSO = 'google';
interface SSOButtonProps {
  type: SSO;
}
function SsoButton({ type }: SSOButtonProps) {
  switch (type) {
    case 'google':
      return (
        <button
          className={`${baseButton} border border-neutral-300 text-neutral-950 dark:text-neutral-50 font-bold`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className={'fill-neutral-950 dark:fill-neutral-0'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8379 10.7181C17.9459 10.1681 17.9999 9.5881 17.9999 9.0081C17.9999 8.6161 17.9739 8.2341 17.9239 7.8611C17.8869 7.5871 17.6429 7.3881 17.3669 7.3881H9.5619C9.2519 7.3881 8.9999 7.6401 8.9999 7.9501V10.1561C8.9999 10.4661 9.2519 10.7181 9.5619 10.7181H13.8369C14.0129 10.7181 14.1419 10.8981 14.0759 11.0611C13.1409 13.3711 10.6859 14.8871 7.9439 14.3801C5.83793 13.9911 4.11193 12.3211 3.65993 10.2281C2.89293 6.6761 5.57693 3.53814 8.9999 3.53814C10.1219 3.53814 11.1619 3.87514 12.0289 4.45214C12.2609 4.60614 12.5639 4.59114 12.7599 4.39214L14.4619 2.65914C14.6939 2.42214 14.6799 2.02814 14.4159 1.82714C12.9749 0.731143 11.1929 0.065143 9.2549 0.012143C4.38293 -0.122857 0.163934 3.83514 0.0049339 8.7061C-0.162066 13.8141 3.93193 18.0081 8.9999 18.0081C13.3829 18.0081 17.0369 14.8681 17.8379 10.7181Z"
            />
          </svg>
          Google
        </button>
      );
  }
}

export default SsoButton;
