import styled from "styled-components";

export const FormOverlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80%;
  background: white;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.4s ease;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #6c63ff;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #574bff;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;
