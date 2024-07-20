import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  & {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --shadow-sm: 0 2px 3px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);

  --liner-gradient-1:  111.3deg,rgb(74, 105, 187) 9.6%,rgb(205, 77, 204) 93.6%;
  --liner-gradient-2: 90deg, #74EBD5 0%, #9FACE6 100%;
  --liner-gradient-3: 180deg, #A9C9FF 0%, #FFBBEC 100%;
  --liner-gradient-4: 180deg, #A9C9FF 0%, #FFBBEC 100%;
  --liner-gradient-5: 160deg, #0093E9 0%, #80D0C7 100%;
  --liner-gradient-6: 160deg, #0093E9 0%, #80D0C7 100%
  
  --image-grayscale: 0;
  --image-opacity: 100%;
  }

  --border-radius-tiny: 2px;
  --border-radius-sm: 8px;
  --border-radius-md: 16px;
  --border-radius-lg: 32px;


} 

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {
  font-family: "rubik", sans-serif;
  position: relative;

  background: linear-gradient(var(--liner-gradient-${
    Math.floor(Math.random() * 5) + 1
  }));

  min-height: 100vh;
  font-size: 1.6rem;
  
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

input:focus{
  outline: 2px solid var(--color-grey-400);
  outline-offset: -1px;
}

ul {
  list-style: none;
}

p,
h1{
  overflow-wrap: break-word;
  hyphens: auto;
  font-family: inherit;
}

img {
  width: 100%;
}

`;

export default GlobalStyles;
