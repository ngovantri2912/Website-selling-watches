import { Button, Col, Row } from "antd";
import styled from "styled-components";
import { color } from "themes/color";

export const CheckoutWrapper = styled.div`
  margin: 0 auto;
  padding: 24px;
  background-color: ${color.primaryText};
`;
export const Heading = styled.h1`
  display: block;
  margin-top: 16px;
  color: ${color.outstanding};
  font-weight: 550;
`;
export const SubHeading = styled.h3`
  display: block;
  margin-top: 16px;
  color: ${color.primary};
  font-weight: 650;
`;
export const Address = styled(Row)`
  margin: 10px 0;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const ChangeDefaultAddress = styled(Button)`
  margin: 10px 0;
  padding: 8px;
  display: flex;
  align-items: center;
`;
export const Unit = styled.span`
  font-size: 0.75rem;
`;
// CartList Detail
export const CartListDetailWrapper = styled(Row)`
  background-color: #f5f5f5;
  padding: 16px;
`;
export const CartItem = styled(Row)`
  width: 100%;
  margin-top: 8px;
  border-top: 1px solid #ccc;
  padding-top: 15px;
`;

export const ImageCartWrapper = styled(Col)`
  text-align: center;
`;
export const ImageCart = styled.img``;
export const Name = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled(Col)`
  text-align: center;
`;
export const Price = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.outstanding};
    font-weight: 600;
    width: 100%;
    height: 100%;
  }
`;
export const Quantity = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
export const IntoMoney = styled(Col)`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.outstanding};
    font-weight: 600;
    width: 100%;
    height: 100%;
  }
`;
export const TotalPrice = styled(Col)`
  display: flex;
  color: ${color.outstanding};
  font-weight: 600;
  width: 100%;
  height: 100%;
`;

export const Order = styled(Button)`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
