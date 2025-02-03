type PhaseItem = {
    date: string;
    user: string;
    descriptions: string[];
};

type Phase = {
    phase_name: string;
    phase_items: PhaseItem[];
};

type ParsedChangelog = Phase[];

export default ParsedChangelog;
