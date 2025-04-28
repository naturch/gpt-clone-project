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

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  overflow-x: hidden;
  padding-top: 120px;
  padding-bottom: 80px;
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 14px;
  }
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

  //검색 실행 함수
  const handleSearch = async (breed: string) => {
    setLoading(true);
    setError("");
    setDog(null);

    try {
      const info = await fetchDogInfo(breed);

      if (!info || info.name.toLowerCase() !== breed.toLowerCase()) {
        setError(`"${breed}"에 대한 정보를 찾을 수 없습니다 `);
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

  //콜백함수 추가
  const renderContent = () => {
    if (loading) {
      return <Message>⏳ 검색 중입니다...</Message>;
    }
    if (error) {
      return <ErrorText>{error}</ErrorText>;
    }
    if (dog) {
      return <DogCard dog={dog} />;
    }
    return null;
  };

  return (
    <PageWrapper>
      <CenterColumn>
        <SearchBar onSearch={handleSearch} />
        {renderContent()}
      </CenterColumn>
    </PageWrapper>
  );
};
export default HomePage;
