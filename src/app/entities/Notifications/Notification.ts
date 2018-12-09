enum StatusCategories {
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    SUCCESS = 'SUCCESS'
}

export class Notification {
    constructor(
        public statusCode: number,
        public statusText: string,
        public statusCategories: StatusCategories
    ) {}
}
