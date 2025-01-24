import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Style from './MainPageStyle.ts';
import { fetchResources } from "../../../api/api.ts";
import Title from "../../atoms/Title/Title.tsx";
import Loader from "../../molecules/Loader/Loader.tsx";

const RESOURCE_LIMITS: { [key: string]: number } = {
  people: 82,
  planets: 60,
  starships: 36,
  vehicles: 39,
  species: 37,
  films: 6,
};

const getRandomId = (resource: string) => {
  const maxId = RESOURCE_LIMITS[resource] || 10;
  return Math.floor(Math.random() * maxId) + 1;
};

const MainPage: React.FC = () => {
  const [resources, setResources] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    fetchResources().then(setResources);
  }, []);

  if (!resources) {
    return (
      <Loader />
    );
  }

  return (
    <Style.Container>
      <Title title = {"Star Wars API"}/>
      <Style.List>
        {Object.entries(resources).map(([key]) => {
          const randomId = getRandomId(key);
          return (
            <li key={key}>
              <Link to={`/${key}/${randomId}`}>{key} (ID {randomId})</Link>
            </li>
          );
        })}
      </Style.List>
    </Style.Container>
  );
};

export default MainPage;
