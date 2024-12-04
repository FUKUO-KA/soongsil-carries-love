import { SchoolData } from "@/api/types/response";

export interface RankedSchoolData extends SchoolData {
    rank: number;
}