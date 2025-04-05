import React, { useEffect, useState } from "react";
import DogForm from "../components/DogForm";
import styled from "styled-components";
import AddDogButton from "../components/AddDogButton";
import MyDogCard from "../components/MyDogCard";
import { Dog } from "../types/dog";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #fefefe;
  padding: 120px 20px 40px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;

const MyPupPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [editingDog, setEditingDog] = useState<Dog | null>(null);

  useEffect(() => {
    const savedDogs = localStorage.getItem("myDogs");
    if (savedDogs) {
      setDogs(JSON.parse(savedDogs));
    }
  }, []);

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
    const confirm = window.confirm("정말 삭제하시겠습니까?");
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

  return (
    <Wrapper>
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
      <DogList>
        {dogs.map((dog, index) => (
          <MyDogCard
            key={index}
            dog={dog}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </DogList>
      <AddDogButton onClick={toggleForm} />
    </Wrapper>
  );
};

export default MyPupPage;
