"use client"
// pages/recenzije.tsx

import { NextPage, GetServerSideProps } from 'next';
import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';

interface MongoDBRecenzija {
  _id: ObjectId;
  name: string;
  recenzija: string;
  ocjena: string;
}

interface RecenzijeProps {
  recenzije: MongoDBRecenzija[];
}

const Recenzije: NextPage<RecenzijeProps> = ({ recenzije }) => {
  return (
    <div>
      <h1>Recenzije</h1>
      <ul>
        {recenzije.map((recenzija, index) => (
          <li key={index}>
            <h2>{recenzija.name}</h2>
            <p>Recenzija: {recenzija.recenzija}</p>
            <p>Ocjena: {recenzija.ocjena}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<RecenzijeProps> = async () => {
  const client = new MongoClient('mongodb://localhost:27017', {});

  await client.connect();
  const db = client.db('cityscape');

  const recenzijeCollection = db.collection<MongoDBRecenzija>('recenzije');
  const recenzijeData = await recenzijeCollection.find().toArray();

  await client.close();

  return {
    props: {
      recenzije: recenzijeData,
    },
  };
};

export default Recenzije;
