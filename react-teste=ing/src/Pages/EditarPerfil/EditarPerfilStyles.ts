import styled from 'styled-components';

export const ProfileEditContainer = styled.div`
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #444;
  }
`;

export const BackButton = styled.button`
  font-family: 'Montserrat Alternates';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF3E41;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #e62e33;
  }
`;

export const SaveButton = styled.button`
  font-family: 'Montserrat Alternates';
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #785ef0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #5841d8;
  }
`;

export const FormContainer = styled.div`
  margin-left: 5%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: relative;
  justify-content: center;
`;

export const Label = styled.label`
  font-weight: bold;
  font-family: 'Montserrat Alternates';
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Input = styled.input`
  font-family: 'Montserrat Alternates';
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const PasswordInput = styled(Input)`
  font-family: 'Montserrat Alternates';
  padding-right: 40px;
`;

export const EyeIcon = styled.img`
  justify-self: center;
  align-self: center;
  position: absolute;
  right: 2%;
  top: 55%;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const PhotoSection = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const PhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F6C761;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat Alternates';

  &:hover {
    background-color: #e5b14c;
  }
`;

export const RemovePhotoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #F6C761;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat Alternates';

  &:hover {
    background-color: #f7f7f7;
    border-color: #e5b14c;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const LogoImage = styled.img`
  margin-right: 10px;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold; 
  color: #FC7A02;
`;