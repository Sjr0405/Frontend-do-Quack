import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface Crop {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ProfileImageUploaderProps {
  setCroppedImageUrl: (url: string | null) => void;
}

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageUpload = styled.div<{ hasImage: boolean }>`
  background-color: white;
  position: relative;
  width: 100px;
  height: 100px;
  border: 4px solid #eb832e;
  border-radius: 100%;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  background-image: ${({ hasImage }) => (hasImage ? 'none' : 'url(/src/svgs/Cadastro-svgs/2.svg)')};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  cursor: pointer;
  color: white;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  } 
`;

const ImagePreview = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const UploadIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #eb832e;
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const CroppedImage = styled.img`
  margin-top: 20px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.6);
`;

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({ setCroppedImageUrl }) => {
  const [croppedImageUrl] = useState<string | null>(null);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [hasImage, setHasImage] = useState(false);
  const imagePreviewRef = useRef<HTMLImageElement | null>(null);

  const onCropComplete = (crop: Crop) => {
    if (imageRef && crop.width && crop.height) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        canvas.width = crop.width;
        canvas.height = crop.height;

        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
          imageRef,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height
        );

        const radius = crop.width / 2;

        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, Math.PI * 2);
        ctx.fill();

        canvas.toBlob(blob => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setCroppedImageUrl(url);
          }
        });
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        setImageRef(img);
        if (imagePreviewRef.current) {
          imagePreviewRef.current.src = img.src;
        }
        setHasImage(true);
        onCropComplete({ x: 0, y: 0, width: 100, height: 100 }); 
      };
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <Main>
      <Box>
        <form id="form-form">
          <ImageUpload hasImage={hasImage}>
            <ImagePreview ref={imagePreviewRef} alt="Preview" />
            {!hasImage && <UploadIcon className="fas fa-upload" />}
            <HiddenInput
              type="file"
              onChange={handleImageChange}
            />
          </ImageUpload>
        </form>
      </Box>
      {croppedImageUrl && (
        <CroppedImage src={croppedImageUrl} alt="Cropped" />
      )}
    </Main>
  );
};

export default ProfileImageUploader;
