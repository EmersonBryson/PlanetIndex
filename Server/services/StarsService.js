import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
    async find(query = {}) {
        return await dbContext.Stars.find(query)
    }
    async getOne(id) {
        let star = await dbContext.Stars.findById(id)
        if (!star) {
            throw new BadRequest("This star isn't on any of our charts.")
        }
        return star
    }
    async create(star) {
        return await dbContext.Stars.create(star)
    }
    async edit(update, user) {
        let updated = await dbContext.Stars.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("This star isn't on any of our charts.")
        }
        return updated
    }
    async delete(id) {
        let deleted = await dbContext.Stars.findOneAndDelete({ _id: id })
        if (!deleted) {
            throw new BadRequest("This star isn't on any of our charts.")
        }
    }
}


export const starsService = new StarsService();