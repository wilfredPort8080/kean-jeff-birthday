import { createGlobalStyle } from "styled-components";

const GlobalSyles = createGlobalStyle`
:root{
    
    /* breakpoints */



    /*body background*/
    --color-brand-50: #4c1d95;
    --color-brand-100: #2e1065;
    --color-brand-200: #1e1b4b;

    /*text color*/
    --color-grey-0:  #fff;

    /*other color */
    --color-red-500: #dc2626;
    --color-red-600:  #ef4444;
    --color-amber-500: #f59e0b;
    --color-yellow-300: #fde047;
    --color-purple-900: ##581c87;

    /*radius*/
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 50rem;

    /*shadow*/
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);   
    --shadow-double: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);

    /* filter  shadow*/
    --filter-sm: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    --filter-md: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    --filter-lg: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));

}

*,
*::before,
*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
    transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
}

html{
    font-size: 62.5%;
}
body{
    font-family: 'Outfit',sans-serif;
    font-size: 1.6rem;
    position: relative;
    background:radial-gradient(circle at 50% 20%, var(--color-brand-50) 0%, var(--color-brand-100) 60%, var(--color-brand-200) 100%);
    background-repeat: no-repeat;
   
    min-height: 100dvh;
    color: var(--color-grey-0);

    padding-bottom: 3rem;
}

      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #2e1065;
      }
      ::-webkit-scrollbar-thumb {
        background: #fbbf24;
        border-radius: 4px;
      }



@keyframes floatSlow {
  0%,
  100% {
    transform: translateY(0) rotate(-12deg);
  }

  50% {
    transform: translateY(-18px) rotate(-8deg);
  }
}


@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0) rotate(12deg);
  }

  50% {
    transform: translateY(-22px) rotate(6deg);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(
      0 0 15px rgba(251, 191, 36, 0.6)
    );
  }

  50% {
    transform: scale(1.02);
    filter: drop-shadow(
      0 0 25px rgba(251, 191, 36, 0.9)
    );
  }
}
`;

export default GlobalSyles;
