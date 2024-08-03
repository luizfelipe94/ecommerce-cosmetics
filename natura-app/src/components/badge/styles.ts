import styled from "styled-components";

export const StyledBadge = styled.div<{ color?: string; fontSize?: string }>`
display: inline-block;
padding: 1px 8px;
border-radius: 12px;
background-color: ${(props) => props.color || "#f00"};
color: #fff; 
font-size: ${(props) => props.fontSize || "12px"};
font-weight: bold;
text-align: center;
vertical-align: middle;
`;