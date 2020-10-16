import React from 'react';

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='page-footer__wrapper'>
        <div className='page-footer__contacts contacts'>
          <b className='contacts__title'>BrbShop</b>
          <p className='contacts__text'>
            г. Киев, ул. Пушкина дом Клапаушкина <br />
            <span className='contacts__phone--tablet'>
              Тел.: +38(010)2012113
            </span>
            <a href='tel:+380102012113' className='contacts__phone button'>
              +38(010)2012113
            </a>
          </p>
        </div>
        <div className='page-footer__social social'>
          <b className='social__title'>Давайте дружить</b>
          <ul className='social__list'>
            <li className='social__item'>
              <a href='vk.com' className='social__link social__link--vkontakte'>
                <svg
                  width='36'
                  height='36'
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.05708 0.0022583C3.17704 0.0022583 0.00219727 3.1771 0.00219727 7.05714V28.9519C0.00219727 32.832 3.17704 36.0068 7.05708 36.0068H28.9518C32.8319 36.0068 36.0067 32.832 36.0067 28.9519V7.05714C36.0067 3.1771 32.8319 0.0022583 28.9518 0.0022583H7.05708V0.0022583ZM11.0958 8.12587H18.198C19.673 8.12587 20.7933 8.17984 21.5538 8.29576C22.3143 8.40588 23.0287 8.64193 23.6925 9.00114C24.4108 9.38811 24.9503 9.90921 25.3057 10.5548C25.6611 11.2041 25.8412 11.9505 25.8412 12.7991C25.8412 13.7799 25.5965 14.6517 25.1032 15.417C24.6147 16.1823 23.9369 16.7451 23.0748 17.109V17.2136C24.3152 17.4771 25.31 18.0069 26.0561 18.8134C26.8034 19.6208 27.1766 20.7077 27.1766 22.0725C27.1766 23.0715 26.988 23.9527 26.6096 24.7084C26.2314 25.4641 25.7248 26.0868 25.0841 26.5849C24.3284 27.1788 23.4989 27.5978 22.59 27.8517C21.6868 28.1045 20.5395 28.2308 19.143 28.2308H11.0959V8.12591L11.0958 8.12587ZM16.119 11.8114V16.0661H16.7546C17.6166 16.0661 18.2257 16.0573 18.5715 16.0391C18.9172 16.021 19.2771 15.9284 19.6458 15.7579C20.0462 15.5692 20.3282 15.3072 20.4795 14.9749C20.6317 14.6387 20.7101 14.2504 20.7101 13.8128C20.7101 13.4862 20.627 13.1536 20.4603 12.8126C20.2946 12.4717 20.0372 12.2224 19.6818 12.0701C19.3504 11.9227 18.9585 11.8449 18.5017 11.8305C18.0458 11.8161 17.3683 11.8114 16.4699 11.8114H16.1189L16.119 11.8114ZM16.119 19.5098V24.543H16.3912C17.7053 24.543 18.613 24.5331 19.1148 24.5149C19.6167 24.4968 20.1338 24.3776 20.6538 24.1515C21.1155 23.9533 21.447 23.6628 21.6596 23.2796C21.8713 22.8975 21.9769 22.464 21.9769 21.9803C21.9769 21.3577 21.8538 20.8739 21.6 20.5234C21.3471 20.169 20.9688 19.9058 20.466 19.7258C20.1614 19.606 19.7371 19.5411 19.2026 19.5278C18.6682 19.5144 17.9499 19.5098 17.0505 19.5098H16.119H16.119Z'
                    fill='black'
                  />
                </svg>
              </a>
            </li>
            <li className='social__item'>
              <a href='vk.com' className='social__link social__link--facebook'>
                <svg
                  width='16'
                  height='28'
                  viewBox='0 0 16 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.0955 27.4955V15.2015H14.243L14.8595 10.388H10.0955V7.32201C10.0955 5.93301 10.4825 4.98201 12.476 4.98201H15.002V0.69051C13.773 0.558796 12.5376 0.495199 11.3015 0.50001C7.63555 0.50001 5.11855 2.73801 5.11855 6.84651V10.379H0.998047V15.1925H5.12755V27.4955H10.0955Z'
                    fill='black'
                  />
                </svg>
              </a>
            </li>
            <li className='social__item'>
              <a href='vk.com' className='social__link social__link--instagram'>
                <svg
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M29.6 0.799988H4.40005C2.42005 0.799988 0.800049 2.41999 0.800049 4.39999V29.6C0.800049 31.5818 2.42005 33.2 4.40005 33.2H29.6C31.58 33.2 33.2 31.5818 33.2 29.6V4.39999C33.2 2.41999 31.58 0.799988 29.6 0.799988ZM16.9712 26.9414C19.6152 26.9409 22.1507 25.8903 24.0201 24.0205C25.8895 22.1508 26.9396 19.6151 26.9396 16.9712C26.9396 16.3628 26.8622 15.776 26.7542 15.2H29.6V28.1888C29.6 28.3523 29.5677 28.5143 29.505 28.6653C29.4422 28.8164 29.3503 28.9535 29.2344 29.0689C29.1185 29.1843 28.9809 29.2757 28.8296 29.3378C28.6783 29.3999 28.5162 29.4315 28.3526 29.4308H5.64745C5.48389 29.4315 5.32181 29.3999 5.1705 29.3378C5.01919 29.2757 4.88163 29.1843 4.76573 29.0689C4.64983 28.9535 4.55786 28.8164 4.4951 28.6653C4.43235 28.5143 4.40005 28.3523 4.40005 28.1888V15.2H7.18825C7.07845 15.776 7.00105 16.3628 7.00105 16.9712C7.00153 19.6153 8.05211 22.151 9.92178 24.0207C11.7915 25.8903 14.3271 26.9409 16.9712 26.9414V26.9414ZM10.7414 16.9712C10.7414 16.1531 10.9026 15.343 11.2157 14.5871C11.5287 13.8313 11.9876 13.1445 12.5661 12.5661C13.1446 11.9876 13.8314 11.5287 14.5872 11.2156C15.343 10.9025 16.1531 10.7414 16.9712 10.7414C17.7894 10.7414 18.5995 10.9025 19.3553 11.2156C20.1111 11.5287 20.7979 11.9876 21.3764 12.5661C21.9549 13.1445 22.4138 13.8313 22.7268 14.5871C23.0399 15.343 23.201 16.1531 23.201 16.9712C23.201 18.6234 22.5447 20.208 21.3764 21.3763C20.2081 22.5446 18.6235 23.201 16.9712 23.201C15.319 23.201 13.7344 22.5446 12.5661 21.3763C11.3978 20.208 10.7414 18.6234 10.7414 16.9712V16.9712ZM28.3526 9.79999H25.4456C25.1156 9.79904 24.7993 9.6675 24.5659 9.43411C24.3325 9.20072 24.201 8.88445 24.2 8.55439V5.64379C24.2 4.95619 24.758 4.39999 25.4438 4.39999H28.3508C29.042 4.39999 29.6 4.95619 29.6 5.64379V8.55259C29.6 9.23839 29.042 9.79999 28.3526 9.79999Z'
                    fill='black'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className='page-footer__copyright copyright'>
          <b className='copyright__text'>Разработано:</b>
          <a
            href='https://github.com/MaxKichiy'
            className='button copyright__link'
          >
            Mark1
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
