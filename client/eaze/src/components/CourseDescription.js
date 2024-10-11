import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const DescriptionContainer = styled.div`
  background-color: #2e2f31;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

const CourseDetailsContainer = styled.div`
  background-color: white;
  color: #2e2f31;
  border-radius: 10px;
  padding: 30px;
  margin-top: 20px;
`;

const CourseImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const CourseTitle = styled.h1`
  font-size: 32px;
  margin-top: 20px;
`;

const CourseDescriptionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #a436f0;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

// Dummy course data (you can replace this with actual API data)
const courses = [
  { id: 1, name: 'Course 1', description: 'This is a detailed description of Course 1.', image: 'https://via.placeholder.com/800x400' },
  { id: 2, name: 'Course 2', description: 'This is a detailed description of Course 2.', image: 'https://via.placeholder.com/800x400' },
  { id: 3, name: 'Course 3', description: 'This is a detailed description of Course 3.', image: 'https://via.placeholder.com/800x400' },
  // Add more courses
];

function CourseDescription() {
  const { id } = useParams(); // Get course ID from URL
  const course = courses.find((course) => course.id === parseInt(id)); // Find the course by ID

  if (!course) {
    return <DescriptionContainer>Course not found!</DescriptionContainer>;
  }

  return (
    <DescriptionContainer>
      <CourseDetailsContainer>
        <CourseImage src={course.image} alt={course.name} />
        <CourseTitle>{course.name}</CourseTitle>
        <CourseDescriptionText>{course.description}</CourseDescriptionText>
        <BackButton to="/Home">Back to Courses</BackButton>
      </CourseDetailsContainer>
    </DescriptionContainer>
  );
}

export default CourseDescription;
