export type Data = {
    success: boolean;
    errors: Record<string, string>;
};

export type Candidate = {
    name: string,
    phone: string,
    email: string
};
