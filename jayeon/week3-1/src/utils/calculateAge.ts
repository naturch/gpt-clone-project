const calculateAge = (birthYear: string): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - parseInt(birthYear, 10);
};

export default calculateAge;
