export interface AsyncModel<P> {
    isFetching?: boolean;
    payload?: P;
}