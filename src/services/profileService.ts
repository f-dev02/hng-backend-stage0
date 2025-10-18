import { config } from "../config/env";
import { ProfileResponse } from "../types";
import { CatFactService } from "./catFactService";

export class ProfileService {
    private catFactService: CatFactService;

    constructor() {
        this.catFactService = new CatFactService();
    }

    async getProfile(): Promise<ProfileResponse> {
        const catFact = await this.catFactService.fetchCatFact();

        return {
            status: "success",
            user: {
                email: config.user.email,
                name: config.user.name,
                stack: config.user.stack,
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        };
    }
}
