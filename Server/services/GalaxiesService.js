import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
    async find(query = {}) {
        return await dbContext.Galaxies.find(query)
    }
    async getOne(id) {
        let galaxy = await dbContext.Galaxies.findById(id)
        if (!galaxy) {
            throw new BadRequest("No Galaxy With That ID Exists.")
        }
        return galaxy
    }
    async create(galaxy) {
        return await dbContext.Galaxies.create(galaxy)
    }
    async edit(update, user) {
        let updated = await dbContext.Galaxies.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("No Galaxy With That ID Exists")
        }
        return updated
    }
    async delete(id) {
        let deleted = await dbContext.Galaxies.findOneAndDelete({ _id: id })
        if (!deleted) {
            throw new BadRequest("No Galaxy With That ID Exists.")
        }
    }
}


export const galaxiesService = new GalaxiesService();