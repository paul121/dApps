import { createGlobalStyle } from 'styled-components';

export const GlobalColors = createGlobalStyle`
  :root {
    --color-black: #333;
    --color-gray-dark: #666;
    --color-gray-light: #f2f2f2;
    --color-red: #eb5757;
    --color-green: #27ae60;
    --color-blue: #2f80ed;
    --color-blue-light: #1890ff;

    --color-primary: var(--color-blue);
    --button-color: var(--color-blue-light);
    --text-color: var(--color-gray-dark);
    --heading-color: var(--color-black);
    --form-error: var(--color-red);
  }
`;
