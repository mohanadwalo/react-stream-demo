import React from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  ${(props) => props.theme.layout}
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem 1rem;
  }

  main,
  header,
  footer {
    padding: 1rem;
  }
  main {
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
  }
  footer {
    width: 100%;
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <header>Campaign #1</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </StyledLayout>
  );
};

export default Layout;
