// src/controllers/eventsController.js

import {
  findAllEvents,
  createOneEvent,
  findEventById,
  updateEventById,
  deleteEventById,
} from "../services/event.service.js";

export const listEvents = async (req, res) => {
  try {
    const events = await findAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createEvent = async (req, res) => {
  try {
    const event = await createOneEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEvent = async (req, res) => {
  try {
    const event = await findEventById(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await updateEventById(req.params.id, req.body);
    res.json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await deleteEventById(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
