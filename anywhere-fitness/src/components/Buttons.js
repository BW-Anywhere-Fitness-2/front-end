import styled from 'styled-components'

const Buttons = styled.button`
  display: inline-block;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  background: palevioletred;
`;

export default Buttons

// Define our button, but with the use of props.theme this time
// const Buttons = styled.button`
//   color: ${props => props.theme.fg};
//   border: 2px solid ${props => props.theme.fg};
//   background: ${props => props.theme.bg};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;
// // Define our `fg` and `bg` on the theme
// const theme = {
//   fg: "palevioletred",
//   bg: "white"
// };
// // This theme swaps `fg` and `bg`
// const invertTheme = ({ fg, bg }) => ({
//   fg: bg,
//   bg: fg
// });
// return(
//   <ThemeProvider theme={theme}>
//     <div>
//       <Buttons>Default Theme</Buttons>
//       <ThemeProvider theme={invertTheme}>
//         <Buttons>Inverted Theme</Buttons>
//       </ThemeProvider>
//     </div>
//   </ThemeProvider>
// );