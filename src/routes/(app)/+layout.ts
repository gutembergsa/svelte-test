import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    return {
        message: "Hello from layout"
    }    
};