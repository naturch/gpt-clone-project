import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import DogCard from "../components/DogCard";
import {
  fetchDogInfo,
  fetchBreedId,
  fetchDogImage,
  fetchBreedInfo,
} from "../services/dogApi";

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9fafb;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #888;
`;

const ErrorText = styled.p`
  color: #e74c3c;
  font-weight: bold;
`;

const HomePage: React.FC = () => {
  const [dog, setDog] = useState<null | {
    image: string;
    name: string;
    lifespan: string;
    temperament: string;
    shedding: string;
    barking: string;
  }>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (breed: string) => {
    setLoading(true);
    setError("");
    setDog(null);

    try {
      const info = await fetchDogInfo(breed);

      if (!info || info.name.toLowerCase() !== breed.toLowerCase()) {
        setError(`"${breed}"에 대한 정보를 찾을 수 없습니다 😢`);
        setLoading(false);
        return;
      }

      const breedId = await fetchBreedId(info.name);
      const breedInfo = await fetchBreedInfo(info.name);
      const image = breedId ? await fetchDogImage(breedId) : "";

      setDog({
        name: info.name,
        lifespan: breedInfo?.life_span || "정보 없음",
        temperament: breedInfo?.temperament || "정보 없음",
        shedding: info.shedding || "정보 없음",
        barking: info.barking || "정보 없음",
        image,
      });
    } catch (e) {
      console.error(e);
      setError("오류가 발생했어요. 다시 시도해 주세요.");
    }

    setLoading(false);
  };

  return (
    <Wrapper>
      <Content>
        <SearchBar onSearch={handleSearch} />
        {loading && <Message>⏳ 검색 중입니다...</Message>}
        {error && <ErrorText>{error}</ErrorText>}
        {dog && <DogCard dog={dog} />}
      </Content>
    </Wrapper>
  );
};

export default HomePage;
