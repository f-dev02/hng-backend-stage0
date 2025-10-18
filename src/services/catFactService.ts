import axios from "axios";
import { config } from "../config/env";
import { CatFactResponse } from "../types";
import { logger } from "../utils/logger";

export class CatFactService {
    private readonly apiUrl: string;
    private readonly timeout: number;

    constructor() {
        this.apiUrl = config.catFactApiUrl;
        this.timeout = config.apiTimeout;
    }

    async fetchCatFact(): Promise<string> {
        try {
            logger.info("Fetching cat fact from external API");

            const response = await axios.get<CatFactResponse>(this.apiUrl, {
                timeout: this.timeout,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.data || !response.data.fact) {
                throw new Error("Invalid response from Cat Facts API");
            }

            logger.info("Cat fact fetched successfully");
            return response.data.fact;
        } catch (error) {
            logger.error("Failed to fetch cat fact:", error);
            return this.getFallbackFact();
        }
    }

    private getFallbackFact(): string {
        const fallbackFacts = [
            "Cats are fascinating creatures with unique personalities.",
            'A group of cats is called a "clowder".',
            "Cats spend 70% of their lives sleeping.",
            "A cat has been the mayor of an Alaskan town for 20 years.",
        ];

        const randomIndex = Math.floor(Math.random() * fallbackFacts.length);
        return fallbackFacts[randomIndex]!;
    }
}
