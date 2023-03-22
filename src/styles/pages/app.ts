import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '0.4rem',
  
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  img: {
    width: '5rem',
    height: '5rem',
  },

  h1: {
    display: 'flex-wrap',
    alignContent: 'center',
    height: '5rem',
    width: '5rem',
    
    lineHeight: '2.5rem',
    fontFamily: 'Hind',
    fontWeight: 500,
    color: "$lightGreen",
    border: '2px solid $lightGreen',
    padding: '0 0.4rem'
  },
})