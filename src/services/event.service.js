// Cambia la primera línea para usar import en lugar de require
import { PrismaClient } from "@prisma/client";
import pool from "../config/database/mysql.js";
const prisma = new PrismaClient();

export const findAllEvents = async () => {
  const [rows] = await pool.query("SELECT * FROM Event");
  return rows;
};

export const createOneEvent = async (eventData) => {
  const { name, dateTime, description, imageUrl, categoryId, locationId } =
    eventData;
  const [result] = await pool.query(
    "INSERT INTO Event (name, dateTime, description, imageUrl, categoryId, locationId) VALUES (?, ?, ?, ?, ?, ?)",
    [name, dateTime, description, imageUrl, categoryId, locationId]
  );
  return result;
};

export const findEventById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM Event WHERE id = ?", [id]);
  return rows[0];
};

export const updateEventById = async (id, eventData) => {
  const { name, dateTime, description, imageUrl, categoryId, locationId } =
    eventData;
  const [result] = await pool.query(
    "UPDATE Event SET name = ?, dateTime = ?, description = ?, imageUrl = ?, categoryId = ?, locationId = ? WHERE id = ?",
    [name, dateTime, description, imageUrl, categoryId, locationId, id]
  );
  return result;
};

export const deleteEventById = async (id) => {
  const [result] = await pool.query("DELETE FROM Event WHERE id = ?", [id]);
  return result;
};
