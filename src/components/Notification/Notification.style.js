import styled from "styled-components";

export const Notification = styled.div`
  background-color: #00000061;
  border-radius: 10px;
  color: #eee;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  padding: 1.5rem 1rem 1.5rem 2rem;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 1rem);
  }
`;

export const NotificationPicture = styled.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: initial;
    height: 4rem;
    position: absolute;
    bottom: calc(50% - 2rem);
    left: -2.3rem;
  }
`;

export const DeleteButton = styled.div`
  background-color: #6c4c74;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;
