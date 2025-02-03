type StockCode = string;

interface Evaluation {
    admin: string;
    system: Record<StockCode, string>;
    teacher: string;
}

interface ProjectionDetail {
    delay: number;
    probability: number;
    time: number;
}

interface Headline {
    headline: string;
    tags: string[];
}

interface EventData {
    approved: boolean;
    created_by_user_id: string;
    evaluated: boolean;
    evaluation: Evaluation;
    event_description: string;
    event_id: string;
    event_name: string;
    headline: Headline;
    processed: boolean;
    projection: Record<StockCode, ProjectionDetail>;
    timestamp: number;
}

export default EventData;
