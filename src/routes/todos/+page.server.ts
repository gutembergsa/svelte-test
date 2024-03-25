import type { PageServerLoad } from './$types';
import { todos } from '../lib/server/database';

export const load: PageServerLoad = async () => {
    return { todos }
}