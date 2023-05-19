import styled from 'styled-components'
export const HomeNavAside = styled.aside`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 240px;
  background-color: var(--white);
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  section {
    width: 100%;
    height: 20rem;
    text-align: center;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`
export const HomeMainContent = styled.main`
  display: flex;
`
export const DevContainer = styled.div`
  color: var(--gray-text);
  opacity: 0.5;
  text-align: center;
  margin-top: 14rem;
  a {
    text-decoration: none;
    color: var(--green);
  }
`
