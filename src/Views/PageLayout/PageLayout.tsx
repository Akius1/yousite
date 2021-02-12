import React from "react";

import styled from "styled-components";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const PageContainer = styled.div``;
  return (
    <PageContainer>
      {children}
    </PageContainer>
  );
};

export default PageLayout;
