import React, { useEffect, useState } from "react";
import DogForm from "../components/DogForm";
import AddDogButton from "../components/AddDogButton";
import MyDogCard from "../components/MyDogCard";
import { Dog } from "../types/dog";
import { Wrapper, DogList, Message } from "../styles/MyPupPageStyle";

const MyPupPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false); //폼 보여줄지 여부
  const [dogs, setDogs] = useState<Dog[]>([]); //전체 강아지 목록
  const [editingDog, setEditingDog] = useState<Dog | null>(null); //수정 중인 강아지 정보

  //마운트 시 localstorage에서 데이터 불러오기
  useEffect(() => {
    const savedDogs = localStorage.getItem("myDogs");
    if (savedDogs) {
      setDogs(JSON.parse(savedDogs));
    }
  }, []);

  // 추가,수정 버튼 클릭 시 form 보여주기
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const addDog = (newDog: Dog) => {
    if (editingDog) {
      const updated = dogs.map((dog) =>
        dog.name === editingDog.name ? newDog : dog
      );
      setDogs(updated);
      localStorage.setItem("myDogs", JSON.stringify(updated));
      setEditingDog(null);
    } else {
      const updated = [...dogs, newDog];
      setDogs(updated);
      localStorage.setItem("myDogs", JSON.stringify(updated));
    }
  };

  const handleDelete = (target: Dog) => {
    const confirm = window.confirm("삭제하시겠습니까?");
    if (confirm) {
      const updated = dogs.filter((dog) => dog.name !== target.name);
      setDogs(updated);
      localStorage.setItem("myDogs", JSON.stringify(updated));
    }
  };

  const handleEdit = (target: Dog) => {
    setEditingDog(target);
    setShowForm(true);
  };

  //콜백함수 추가
  const renderMyDogs = () => {
    if (dogs.length === 0) {
      return <Message>등록된 반려견이 없습니다.</Message>;
    }
    return dogs.map((dog, index) => (
      <MyDogCard
        key={index}
        dog={dog}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    ));
  };

  return (
    <Wrapper>
      {/*폼을 보여줄 때만 렌더링*/}
      {showForm && (
        <DogForm
          onClose={() => {
            setShowForm(false);
            setEditingDog(null);
          }}
          onAddDog={addDog}
          editingDog={editingDog}
        />
      )}
      <DogList>{renderMyDogs()}</DogList>
      <AddDogButton onClick={toggleForm} />
    </Wrapper>
  );
};

export default MyPupPage;
