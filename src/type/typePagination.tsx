export type PagProps = {
    pageNumber: number;   
        count: number;
        pages: number;
        next: string;
        prev: string;

    
    updatePageNumber: React.Dispatch<React.SetStateAction<number>>;
   
    
}