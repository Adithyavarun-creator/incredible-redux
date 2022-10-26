import React, { useEffect } from "react";
import {
  SubscriptionContainer,
  GridBox,
  PriceBox,
  PlanBox,
  ListElements,
  PlanList,
  SignInButton,
  ShareBox,
  ButtonSubsBox,
} from "../styles/SubscriptionStyle";
import { NavLinks } from "../styles/NavbarStyle";
import { BsShareFill } from "react-icons/bs";
import Header from "../components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const SubscriptionPage = () => {
  const url = "https://incredible-indol.vercel.app/plans&subscriptions";

  const shareFunction = async () => {
    try {
      await navigator.share({
        text: "Follow this subscription for watcing free movies",
        url: url,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Header title="Check onto variuos plans below" />
      <ShareBox>
        <NavLinks onClick={shareFunction}>
          <span style={{ color: "#1da1f2" }}>Share</span>
          <span>
            <BsShareFill className="shareIcon" />
          </span>
        </NavLinks>
      </ShareBox>
      <SubscriptionContainer>
        <GridBox data-aos="flip-left">
          <PlanBox>
            <span className="planName">Free</span>
          </PlanBox>
          <PriceBox>
            <span className="subPrice">$0</span>
            <span className="perMonth">per month</span>
          </PriceBox>
          <ListElements>
            <PlanList>Full Access</PlanList>
            <PlanList>Live Comments</PlanList>
            <PlanList>24/7 streaming</PlanList>
            <PlanList>Auto Subscriptions</PlanList>
            <PlanList>Get new releases asap</PlanList>
          </ListElements>
          <ButtonSubsBox>
            <SignInButton>Sign in</SignInButton>
          </ButtonSubsBox>
        </GridBox>
        <GridBox data-aos="flip-left">
          <PlanBox>
            <span className="planName">Basic</span>
          </PlanBox>
          <PriceBox>
            <span className="subPrice">$50</span>
            <span className="perMonth">per month</span>
          </PriceBox>
          <ListElements>
            <PlanList>Full Access</PlanList>
            <PlanList>Live Comments</PlanList>
            <PlanList>24/7 streaming</PlanList>
            <PlanList>Auto Subscriptions</PlanList>
            <PlanList>Get new releases asap</PlanList>
          </ListElements>
          <ButtonSubsBox>
            <SignInButton>Sign in</SignInButton>
          </ButtonSubsBox>
        </GridBox>
        <GridBox data-aos="flip-left">
          <PlanBox>
            <span className="planName">Standard</span>
          </PlanBox>
          <PriceBox>
            <span className="subPrice">$100</span>
            <span className="perMonth">per month</span>
          </PriceBox>
          <ListElements>
            <PlanList>Full Access</PlanList>
            <PlanList>Live Comments</PlanList>
            <PlanList>24/7 streaming</PlanList>
            <PlanList>Auto Subscriptions</PlanList>
            <PlanList>Get new releases asap</PlanList>
          </ListElements>
          <ButtonSubsBox>
            <SignInButton>Sign in</SignInButton>
          </ButtonSubsBox>
        </GridBox>
      </SubscriptionContainer>
    </>
  );
};

export default SubscriptionPage;
