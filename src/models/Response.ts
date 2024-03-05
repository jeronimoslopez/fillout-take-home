export enum QuestionType {
    Address = 'Address',
    AudioRecording = 'AudioRecording',
    Calcom = 'Calcom',
    Calendly = 'Calendly',
    Captcha = 'Captcha',
    Checkbox = 'Checkbox',
    Checkboxes = 'Checkboxes',
    ColorPicker = 'ColorPicker',
    CurrencyInput = 'CurrencyInput',
    DatePicker = 'DatePicker',
    DateRange = 'DateRange',
    DateTimePicker = 'DateTimePicker',
    Dropdown = 'Dropdown',
    EmailInput = 'EmailInput',
    FileUpload = 'FileUpload',
    ImagePicker = 'ImagePicker',
    LocationCoordinates = 'LocationCoordinates',
    LongAnswer = 'LongAnswer',
    Matrix = 'Matrix',
    MultiSelect = 'MultiSelect',
    MultipleChoice = 'MultipleChoice',
    NumberInput = 'NumberInput',
    OpinionScale = 'OpinionScale',
    Password = 'Password',
    Payment = 'Payment',
    PhoneNumber = 'PhoneNumber',
    Ranking = 'Ranking',
    RecordPicker = 'RecordPicker',
    ShortAnswer = 'ShortAnswer',
    Signature = 'Signature',
    Slider = 'Slider',
    StarRating = 'StarRating',
    Switch = 'Switch',
    TimePicker = 'TimePicker',
    URLInput = 'URLInput'
}

export enum CalculationType {
    Number = 'Number',
    String = 'String'
}

export enum FilterCondition {
    Equals = 'equals',
    DoesNotEqual = 'does_not_equal',
    GreaterThan = 'greater_than',
    LessThan = 'less_than'
}

export type Question = {
    id: string;
    name: string;
    type: QuestionType;
    value: string;
}

export type Calculation = {
    id: string;
    name: string;
    type: CalculationType;
    value: string;
}

export type IUrlParameters = {
    id: string;
    name: string;
    value: string;
}

export type IQuiz = {
    score: number;
    maxScore: number;
}

export type Response = {
    questions: Question[];
    calculations: Calculation[];
    urlParameters: IUrlParameters[];
    quiz?: IQuiz;
    submissionId: string;
    submissionTime: string;
}

export type ResponseCollection = {
    responses: Response[];
    totalResponses: number;
    pageCount: number;
}

export type ResponseFilter = {
    id: string;
    condition: FilterCondition;
    value: number | string;
}

export type ResponseParams = {
    limit?: string;
    afterDate?: string;
    beforeDate?: string;
    offset?: string;
    status?: 'in_progress' | 'finished';
    includeEditLink?: string;
    sort?: 'asc' | 'desc';
    filters?: string;
    [key: string]: any;
}
