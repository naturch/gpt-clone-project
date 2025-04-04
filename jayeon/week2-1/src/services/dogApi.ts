import axios from "axios";

const NINJA_API_KEY = import.meta.env.VITE_NINJA_API_KEY;
const DOG_API_KEY = import.meta.env.VITE_DOG_API_KEY;

// API Ninja
export const fetchDogInfo = async (breed: string) => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/dogs?name=${breed}`,
      {
        headers: { "X-Api-Key": NINJA_API_KEY },
      }
    );
    return response.data[0];
  } catch (error) {
    console.error("강아지 정보 에러:", error);
    return null;
  }
};

// TheDogAPI - breedId 가져오기
export const fetchBreedId = async (breed: string): Promise<number | null> => {
  try {
    const response = await axios.get("https://api.thedogapi.com/v1/breeds");
    const match = response.data.find(
      (b: any) => b.name.toLowerCase() === breed.toLowerCase()
    );
    return match ? match.id : null;
  } catch (error) {
    console.error("breed id 에러:", error);
    return null;
  }
};

//  TheDogAPI - 이미지 검색
export const fetchDogImage = async (breedId: number): Promise<string> => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`,
      {
        headers: { "x-api-key": DOG_API_KEY },
      }
    );
    return response.data[0]?.url || "";
  } catch (error) {
    console.error("이미지 에러:", error);
    return "";
  }
};

// TheDogAPI -정확한 breed 데이터 가져오기
export const fetchBreedInfo = async (breed: string) => {
  try {
    const response = await axios.get("https://api.thedogapi.com/v1/breeds");
    const match = response.data.find(
      (b: any) => b.name.toLowerCase() === breed.toLowerCase()
    );
    return match || null;
  } catch (error) {
    console.error("TheDogAPI breed 정보 오류:", error);
    return null;
  }
};
