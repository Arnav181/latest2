import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const HomeContainer = styled.div`
  background-color: #2e2f31;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #a436f0;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavButtons = styled.div`
  & > a {
    background-color: #2e2f31;
    padding: 10px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    margin-left: 15px;
  }
`;

const Banner = styled.div`
  background-color: #fff;
  color: #2e2f31;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  height: 200px;
  background-image: url('https://example.com/banner-image.jpg'); /* Replace with actual image URL */
  background-size: cover;
  background-position: center;
`;

const BannerText = styled.h2`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
`;

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;

const CourseCard = styled.div`
  background-color: white;
  color: #2e2f31;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 20px;
  text-align: left;
  gap: 20px;
`;

const CourseImage = styled.img`
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const CourseDetails = styled.div`
  flex-grow: 1;
`;

const CourseTitle = styled.h3`
  margin: 0 0 10px 0;
`;

const CourseDescription = styled.p`
  margin: 5px 0;
`;

const JoinButton = styled(Link)`  /* Change from button to Link */
  display: inline-block;
  padding: 10px 20px;
  background-color: #a436f0;
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;

const Footer = styled.footer`
  background-color: #2e2f31;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Heading = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
`;

// Home Component
function Home() {
  const courses = [
    { id: 1, name: 'Course 1', description: 'Learn the basics of Course 1.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Course 2', description: 'Master advanced concepts in Course 2.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Course 3', description: 'Introduction to Course 3.', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Course 4', description: 'Deep dive into Course 4.', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Course 5', description: 'Comprehensive Course 5 training.', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Course 6', description: 'Start learning Course 6 today.', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Course 7', description: 'Course 7 for beginners.', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Course 8', description: 'Master Course 8 with ease.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <HomeContainer>
      <Navbar>
        <Logo>Eaze</Logo>
        <NavButtons>
          <Link to="/profile">My Profile</Link>
          <Link to="/courses">My Courses</Link>
        </NavButtons>
      </Navbar>

      <Banner>
        <BannerText>"Learning made simple, with Eaze."</BannerText>
      </Banner>

      <Heading>Courses</Heading>

      <CourseList>
        {courses.map((course) => (
          <CourseCard key={course.id}>
            <CourseImage src={course.image} alt={course.name} />
            <CourseDetails>
              <CourseTitle>{course.name}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
              <JoinButton to={`/course/${course.id}`}>View Details</JoinButton> {/* Link to Course Description */}
            </CourseDetails>
          </CourseCard>
        ))}
      </CourseList>

      <Footer>&copy; 2024 Eaze. All rights reserved.</Footer>
    </HomeContainer>
  );
}

export default Home;
