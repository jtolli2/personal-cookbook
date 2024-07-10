export class CreateStepDto {
    name?: string;
    description?: string;
    body: string;
    image?: string;
    optional: boolean;
    order: number;
}
