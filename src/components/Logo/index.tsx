import { useTheme } from 'contexts/ThemeContext'

const Logo = () => {
  const { theme } = useTheme()

  return (
    <svg width="541" height="541" viewBox="0 0 541 541" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M455.843 175.324C419.546 133.707 356.78 115.023 304.433 134.298C293.337 138.381 247.633 138.381 236.542 134.298C184.205 115.033 121.439 133.717 85.1574 175.324C42.0778 224.75 28.6229 290.848 37.8349 353.153C49.5516 432.364 93.7733 486.635 175.705 511.015C221.449 524.625 239.067 517.321 270.515 517.321C301.963 517.321 319.606 524.625 365.325 511.015C447.257 486.635 491.479 432.369 503.195 353.153C512.392 290.858 498.962 224.76 455.843 175.324Z" fill="#FF6363" />
      <path d="M455.843 175.324C419.545 133.707 356.779 115.023 304.433 134.298C293.337 138.381 247.633 138.381 236.542 134.298C219.31 127.952 200.976 125.782 182.788 127.14C212.658 133.652 213.695 171.472 307.333 164.529C394.349 158.077 458.613 287.256 409.086 393.628C378.349 459.71 273.395 504.432 135.621 495.18C148.474 501.658 161.887 506.961 175.695 511.025C221.439 524.635 239.057 517.331 270.505 517.331C301.953 517.331 319.596 524.635 365.32 511.025C447.247 486.644 491.468 432.379 503.185 353.163C512.392 290.858 498.962 224.755 455.843 175.324Z" fill="#F25757" />
      <path d="M263.111 126.499C254.03 99.544 228.928 82.237 200.816 77.909C213.725 91.7296 223.057 103.416 226.429 126.499C212.042 117.387 172.329 109.242 149.511 123.759C178.565 128.578 194.459 135.971 210.439 156.444C210.439 156.444 197.951 166.843 194.85 178.876C192.641 187.456 194.239 207.473 194.239 207.473C213.64 182.813 256.063 198.141 259.435 171.467C259.435 171.467 303.406 182.292 318.774 213.885C324.169 173.561 304.954 165.341 304.954 165.341C324.385 152.817 358.938 164.254 378.59 171.507C366.568 151.575 338.826 133.702 312.523 135.851C324.044 117.357 343.234 107.649 364.99 106.662C332.86 93.6882 286.344 91.7296 263.096 126.464L263.111 126.499Z" fill="#56A875" />
      <path d="M281.305 21.7402C245.454 50.0475 249.341 118.875 253.574 151.781C256.158 153.068 259.364 153.363 262.941 151.074C263.056 131.132 264.554 100.08 271.958 79.2816C282.627 49.3262 299.454 40.2945 299.454 40.2945C299.459 20.1973 281.305 21.7402 281.305 21.7402Z" fill="#428F60" />
      <path d="M148.154 174.773C114.998 186.294 52.8727 221.68 71.5723 322.095C72.3638 326.353 78.4951 326.303 79.2164 322.035C84.8669 288.674 101.928 223.754 151.941 181.39C155.217 178.615 152.211 173.36 148.154 174.773Z" fill="#FF8585" />
    </svg>

  )
}

export default Logo
