import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .put("/:id", this.edit)
            .post("", this.create)
            .delete("/:id", this.delete);
    }

    async getAll(req, res, next) {
        try {
            let data = await moonsService.find(req.query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            let data = await moonsService.find(req.params.id)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await moonsService.edit(req.body)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let data = await moonsService.create(req.body)
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            let data = await moonsService.delete(req.params.id)
            res.send("Deleted Successfully")
        } catch (error) {
            next(error)
        }
    }


}