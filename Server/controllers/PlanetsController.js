import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { galaxiesService } from "../services/GalaxiesService"

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .get("/:id/moons", this.getMoons)
            .put("/:id", this.edit)
            .post("", this.create)
            .delete("/:id", this.delete);
    }

    async getMoons(req, res, next) {
        try {
            let data = await galaxiesService.find({ galaxy: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            let data = await planetsService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            let data = await planetsService.find(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await planetsService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await planetsService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            let data = await planetsService.delete(req.params.id)
            res.send("Deleted Successfully")
        } catch (error) {
            next(error)
        }
    }


}