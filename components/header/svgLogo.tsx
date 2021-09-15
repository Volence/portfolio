function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        viewBox="0 0 800 800"
        {...props}
      >
        <defs>
          <radialGradient
            fx={0}
            fy={0}
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(299.72058 0 0 -299.72058 300.56 295.812)"
            spreadMethod="pad"
            id="prefix__b"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.799} stopColor="#fff" />
            <stop offset={1} stopColor="#fff" />
          </radialGradient>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(431.34961 0 0 -431.34961 88.64 336.09)"
            spreadMethod="pad"
            id="prefix__c"
          >
            <stop offset={0} stopColor="#1aaeec" />
            <stop offset={0.298} stopColor="#4253a7" />
            <stop offset={0.646} stopColor="#e70c8d" />
            <stop offset={0.955} stopColor="#e33c47" />
            <stop offset={1} stopColor="#e33c47" />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="prefix__a">
            <path d="M0 600h600V0H0z" />
          </clipPath>
        </defs>
        <g
          clipPath="url(#prefix__a)"
          transform="matrix(1.33333 0 0 -1.33333 0 800)"
        >
          <path d="M600-4.188H1.118v600H600z" fill="url(#prefix__b)" />
          <path
            d="M356.152 414.826c-12.432-1.85-24.044-4.484-34.903-7.701-5.525-13.572-9.591-27.056-11.201-41.192 73.941 35.204 157.277 13.74 191.421-17.912 7.458 8.882 18.14 28.531 18.52 31.751-31.682 21.421-86.809 46.531-163.837 35.054m77.834-196.208c-7.362 9.043-20.173 26.94-20.173 26.94s-18.017 25.196-27.219 66.963c-6.274 25.865-7.038 49.05-5.892 66.971 11.338-.221 24.694.453 36.69-1.468a99.39 99.39 0 01-.53-3.551c-3.85-51.46 14.817-83.505 14.817-83.505 4.953-10.923 10.949-22.188 16.727-32.64a229.432 229.432 0 0112.899-17.475c8.6-10.569 17.403-19.544 26.166-27.195-14.803-4.068-32.59-7.842-45.308-4.603a256.186 256.186 0 00-8.177 9.563m-208.408 169.31c1.851-12.43 4.485-24.043 7.7-34.903 13.573-5.525 27.055-9.591 41.194-11.202-35.204 73.942-13.74 157.279 17.91 191.422-8.882 7.457-28.53 18.139-31.75 18.52-21.423-31.68-46.53-86.809-35.054-163.837m196.209 77.833c-9.045-7.359-26.939-20.173-26.939-20.173s-25.197-18.016-66.965-27.216c-25.866-6.275-49.05-7.039-66.97-5.894.221 11.338-.454 24.696 1.467 36.691a90.427 90.427 0 013.552-.528c51.458-3.852 83.506 14.813 83.506 14.813 10.92 4.955 22.187 10.95 32.641 16.729a229.608 229.608 0 0117.473 12.899c10.569 8.602 19.545 17.401 27.196 26.166 4.065-14.805 7.841-32.592 4.6-45.308a257.08 257.08 0 00-9.561-8.179M252.476 257.355c12.431 1.851 24.043 4.483 34.903 7.7 5.525 13.573 9.593 27.055 11.204 41.194-73.943-35.204-157.28-13.741-191.423 17.91-7.457-8.881-18.139-28.531-18.52-31.751 31.681-21.421 86.809-46.53 163.836-35.053m-77.835 196.207c7.361-9.043 20.174-26.939 20.174-26.939s18.018-25.196 27.218-66.963c6.274-25.866 7.039-49.051 5.893-66.972-11.338.223-24.697-.454-36.692 1.468.138.798.328 2.008.53 3.551 3.852 51.461-14.813 83.506-14.813 83.506-4.955 10.922-10.951 22.188-16.729 32.641a229.381 229.381 0 01-12.9 17.475c-8.601 10.568-17.402 19.543-26.166 27.195 14.804 4.066 32.593 7.841 45.308 4.601a254.31 254.31 0 008.177-9.563m208.408-169.309c-1.851 12.432-4.483 24.043-7.7 34.904-13.574 5.524-27.056 9.591-41.193 11.201 35.203-73.94 13.739-157.279-17.91-191.42 8.879-7.457 28.529-18.14 31.749-18.521 21.422 31.678 46.53 86.808 35.054 163.836M186.842 206.42c9.043 7.358 26.939 20.172 26.939 20.172s25.196 18.016 66.964 27.218c25.863 6.275 49.049 7.039 66.97 5.893-.223-11.338.453-24.696-1.467-36.69-.8.136-2.008.325-3.552.526-51.46 3.854-83.505-14.81-83.505-14.81-10.923-4.957-22.189-10.954-32.641-16.73a229.471 229.471 0 01-17.474-12.898c-10.568-8.604-19.544-17.402-27.196-26.167-4.066 14.805-7.841 32.592-4.602 45.308a256.241 256.241 0 009.564 8.178"
            fill="url(#prefix__c)"
          />
        </g>
      </svg>
    )
  }
  
  export default SvgComponent
  