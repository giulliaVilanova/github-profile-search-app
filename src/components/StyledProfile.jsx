import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  padding: 16px;
`;

const Card = styled.div`
  background: #d1d5db;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px;
`;

const Name = styled.h2`
  margin: 8px 0;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #999;
  margin: 8px 0;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background: #4a7f2a;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
`;

export default function StyledProfile() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [username]);

  if (!data) return <Container>Loading...</Container>;

  return (
    <Container>
      <Card>
        <Avatar src={data.avatar_url} alt={data.login} />
        <Name>{data.name || data.login}</Name>
        <Line />
        <p>{data.bio}</p>
        <Line />
        <p>Repositórios públicos: {data.public_repos}</p>
        <Button href={data.html_url} target="_blank" rel="noopener noreferrer">
          Ver no GitHub
        </Button>
      </Card>
    </Container>
  );
}
