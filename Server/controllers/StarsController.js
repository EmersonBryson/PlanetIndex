import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";
import { galaxiesService } from "../services/GalaxiesService"

export class StarsController extends BaseController {
    constructor() {
        super("api/stars");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .get("/:id/planets", this.getPlanets)
            .get("/:id/moons", this.getMoons)
            .put("/:id", this.edit)
            .post("", this.create)
            .delete("/:id", this.delete);
    }

    async getPlanets(req, res, next) {
        try {
            let data = await galaxiesService.find({ stars: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getMoons(req, res, next) {
        try {
            let data = await galaxiesService.find({ planets: req.params.id })
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getAll(req, res, next) {
        try {
            let data = await starsService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            let data = await starsService.find(req.params.id)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await starsService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await starsService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            let data = await starsService.delete(req.params.id)
            res.send("Deleted Successfully")
        } catch (error) {
            next(error)
        }
    }


}