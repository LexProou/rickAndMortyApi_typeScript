export type FilterBTNProps = {
    input: string;
    index: number;
    name: string;
    task: React.Dispatch<React.SetStateAction<string>>;
    updatePageNumber: React.Dispatch<React.SetStateAction<number>>;
    status: string
}