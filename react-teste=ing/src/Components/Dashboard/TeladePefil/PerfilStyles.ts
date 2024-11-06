import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin-bottom: 2%;
`;

export const ProfileImageContainer = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImageBuble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #ff6f00;
`;

export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const EditIcon = styled.div`
  width: 70px;
  height: 50px;
  background-color: #fff;
  display: flex;
  border: #E9E8E8FF 2px solid;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const ProfileInfo = styled.div`
  text-align: left;
  margin-left: 20px;

  h2 {
    font-size: 28px;
    margin: 0;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    color: #666;
  }

  span {
    color: #4f4cfc;
    font-size: 18px;
    font-weight: bold;
  }

  .ranking {
    color: #ff6f00;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BadgeCollectionContainer = styled.div`
  padding: 20px;
  border: 2px solid #E9E8E8FF;
  border-radius: 10px;
  background-color: #fff;
  width: fit-content;
  margin: 0 auto;
`;

export const BadgeTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  color: #ff7f00;
  margin-bottom: 20px;
`;

export const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 15px;
  width: 150px;
  height: 150px;
`;

export const BadgeImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

export const BadgeText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`;

export const StatsSection = styled.div`
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  background-color: transparent;
  margin: 0 auto;
`;

export const StatsTitle = styled.h2`
  font-size: 24px;
  color: #ff7f00;
  text-align: center;
  margin-bottom: 1%;
`;

export const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  gap: 20px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 15px;
  padding: 10px 20px;
`;

export const StatIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const StatLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  color: #000;
`;

export const StatValue = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 10px;
  margin-left: 10px;
  position: relative;
`;

export const Progress = styled.div`
  width: 60%;
  height: 100%;
  background-color: #F6C761;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 12px;
`;

export const ImgBuble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

export const StoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  right: 4%;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Lilita One', sans-serif;
  color: #fff;
  padding: 10px 20px;
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e62e33;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const TabContainer = styled.div`
  margin-left: 36%;
  width: 45%;
  border: 1px solid #ddd;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TabNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px;
`;

export const TabButton = styled.div<{ active?: boolean }>`
  flex: 1;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#6e52fa' : '#bcbcbc')};
  border-bottom: 3px solid ${({ active }) => (active ? '#6e52fa' : '#e0e0e0')};
  padding-bottom: 5px;
  font-size: 20px;
`;

export const TabContent = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
`;

export const Heading = styled.h3`
  color: #6e6e6e;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const SubText = styled.p`
  color: #bcbcbc;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

  Input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
  }

  img {
    cursor: pointer;
  }
`;