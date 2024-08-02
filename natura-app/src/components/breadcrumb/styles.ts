import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 10px 0;
`;

export const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: #6c757d;
  margin: 0 5px;
`;