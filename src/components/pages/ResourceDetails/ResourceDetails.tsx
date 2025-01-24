import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import * as Style from "./ResourceDetailsStyle.ts";

import { fetchResourceDetails, fetchAdditionalData } from "../../../api/api.ts";

import Error from "../../molecules/Loader/Loader.tsx";
import Loader from "../../molecules/Loader/Loader.tsx";

const ResourceDetails: React.FC = () => {
  const { resource, id } = useParams<{ resource: string; id: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<string[]>([]);
  const [planets, setPlanets] = useState<string[]>([]);
  const [starships, setStarships] = useState<string[]>([]);
  const [vehicles, setVehicles] = useState<string[]>([]);
  const [species, setSpecies] = useState<string[]>([]);
  const [residents, setResidents] = useState<string[]>([]);
  const [films, setFilms] = useState<string[]>([]);
  const [people, setPeople] = useState<string[]>([]);
  const [pilots, setPilots] = useState<string[]>([]);
  const [homeworld, setHomeworld] = useState<string>("");

  useEffect(() => {
    if (!resource || !id) return;

    fetchResourceDetails(resource, id)
      .then(async (data) => {
        setData(data);
        setLoading(false);

        if (data.homeworld) {
          const homeworldData = await fetchAdditionalData([data.homeworld]);
          setHomeworld(homeworldData[0]);
        }

        if (data.characters?.length) {
          fetchAdditionalData(data.characters).then(setCharacters);
        }

        if (resource === "films" && data.planets?.length) {
          fetchAdditionalData(data.planets).then(setPlanets);
        }

        if (data.films?.length) {
          fetchAdditionalData(data.films).then(setFilms);
        }

        if (data.starships?.length) {
          fetchAdditionalData(data.starships).then(setStarships);
        }

        if (data.vehicles?.length) {
          fetchAdditionalData(data.vehicles).then(setVehicles);
        }

        if (data.species?.length) {
          fetchAdditionalData(data.species).then(setSpecies);
        }

        if (data.people?.length) {
          fetchAdditionalData(data.people).then(setPeople);
        }

        if (data.pilots?.length) {
          fetchAdditionalData(data.pilots).then(setPilots);
        }

        if (resource === "planets" && data.residents?.length) {
          fetchAdditionalData(data.residents).then(setResidents);
        }
      })
      .catch((error) => console.error("Error fetching details:", error));
  }, [resource, id]);

  if (loading) {
    return (
        <Loader />
    );
  }

  if (!data) {
    return (

        <Error />

    );
  }

  return (
    <Style.Container>
      <Style.Title>Details of {resource}</Style.Title>
      <Style.DetailBox>
        <ul>
          {Object.entries(data).map(([key, value]) => {
            if (key === "homeworld") {
              return (
                <li key={key}>
                  <strong>Homeworld:</strong> {homeworld || "Unknown"}
                </li>
              );
            }

            if (key === "characters") {
              return (
                <li key={key}>
                  <strong>Characters:</strong> {characters.length > 0 ? characters.join(", ") : "None"}
                </li>
              );
            }

            if (key === "people") {
              return (
                <li key={key}>
                  <strong>People:</strong> {people.length > 0 ? people.join(", ") : "None"}
                </li>
              );
            }

            if (key === "pilots") {
              return (
                <li key={key}>
                  <strong>Pilots:</strong> {pilots.length > 0 ? pilots.join(", ") : "None"}
                </li>
              );
            }

            if (key === "starships") {
              return (
                <li key={key}>
                  <strong>Starships:</strong> {starships.length > 0 ? starships.join(", ") : "None"}
                </li>
              );
            }

            if (key === "vehicles") {
              return (
                <li key={key}>
                  <strong>Vehicles:</strong> {vehicles.length > 0 ? vehicles.join(", ") : "None"}
                </li>
              );
            }

            if (key === "species") {
              return (
                <li key={key}>
                  <strong>Species:</strong> {species.length > 0 ? species.join(", ") : "None"}
                </li>
              );
            }

            if (key === "residents") {
              return (
                <li key={key}>
                  <strong>Residents:</strong> {residents.length > 0 ? residents.join(", ") : "None"}
                </li>
              );
            }

            if (key === "planets") {
              return (
                <li key={key}>
                  <strong>Planets:</strong> {planets.length > 0 ? planets.join(", ") : "None"}
                </li>
              );
            }

            if (key === "opening_crawl") {
              return (
                <li key={key}>
                  <strong>Opening Crawl:</strong>
                  <p dangerouslySetInnerHTML={{ __html: typeof value === "string" ? value.replace(/(\r\n|\r\n\r\n|\r)/g, "<br />") : "" }} />
                </li>
              );
            }

            if (key === "films") {
              return (
                <li key={key}>
                  <strong>Films:</strong> {films.length > 0 ? films.join(", ") : "None"}
                </li>
              );
            }

            if (key === "created" || key === "edited") {
              return (
                <li key={key}>
                  <strong>{key === "created" ? "Created on" : "Edited on"}:</strong>{" "}
                  {typeof value === "string" && moment(value, moment.ISO_8601, true).isValid()
                    ? moment.utc(value).format("MMMM Do YYYY, h:mm:ss a")
                    : "Invalid Date"}
                </li>
              );
            }

            return (
              <li key={key}>
                <strong>{key}:</strong> {JSON.stringify(value)}
              </li>
            );
          })}
        </ul>
      </Style.DetailBox>
    </Style.Container>
  );
};

export default ResourceDetails;
