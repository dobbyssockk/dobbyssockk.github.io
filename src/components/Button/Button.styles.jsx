import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
    font-size: 16px;
    padding: 8px 18px;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    border: 1px solid transparent;
    transition: all 0.3s ease;

  &:hover {
    color: #007bff;
    border-color: #007bff;
    background-color: transparent;
  }
`;