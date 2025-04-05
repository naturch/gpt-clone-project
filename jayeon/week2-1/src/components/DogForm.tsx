import React, { useEffect, useState } from "react";
import { Dog } from "../types/dog";
import {
  FormOverlay,
  FormContainer,
  FormTitle,
  Input,
  Label,
  Select,
  SubmitButton,
  CloseButton,
} from "../styles/DogFormStyle";

interface DogFormProps {
  onClose: () => void;
  onAddDog: (dog: Dog) => void;
  editingDog: Dog | null;
}

const DogForm: React.FC<DogFormProps> = ({ onClose, onAddDog, editingDog }) => {
  const [dogData, setDogData] = useState<Dog>({
    name: "",
    breed: "",
    birthYear: "",
    gender: "",
    image: "",
    personality: "",
  });

  useEffect(() => {
    if (editingDog) {
      setDogData(editingDog);
    }
  }, [editingDog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddDog(dogData);
    onClose();
  };

  return (
    <FormOverlay>
      <FormContainer>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <FormTitle>반려견 {editingDog ? "수정" : "등록"}하기</FormTitle>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="name">이름</Label>
          <Input
            name="name"
            value={dogData.name}
            onChange={handleChange}
            required
          />

          <Label htmlFor="breed">종</Label>
          <Input
            name="breed"
            value={dogData.breed}
            onChange={handleChange}
            required
          />

          <Label htmlFor="birthYear">탄생년도</Label>
          <Input
            name="birthYear"
            placeholder="예:2020"
            value={dogData.birthYear}
            onChange={handleChange}
            required
          />

          <Label htmlFor="gender">성별</Label>
          <Select
            name="gender"
            value={dogData.gender}
            onChange={handleChange}
            required
          >
            <option value="">선택하세요</option>
            <option value="수컷">수컷</option>
            <option value="암컷">암컷</option>
          </Select>

          <Label htmlFor="personality">성격</Label>
          <Input
            name="personality"
            placeholder="예: 발랄함"
            value={dogData.personality}
            onChange={handleChange}
          />

          <Label htmlFor="image">사진 URL</Label>
          <Input
            name="image"
            type="url"
            placeholder="이미지 주소 입력"
            value={dogData.image}
            onChange={handleChange}
          />

          <SubmitButton type="submit">
            {editingDog ? "수정 완료" : "등록"}
          </SubmitButton>
        </form>
      </FormContainer>
    </FormOverlay>
  );
};

export default DogForm;
